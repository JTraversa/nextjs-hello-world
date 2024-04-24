import { Listbox } from '@headlessui/react';
import { ERC20 } from '@opensea/seaport-js/lib/typechain/ERC20';
import { useChainModal, useConnectModal } from '@rainbow-me/rainbowkit';
import { BigNumber, Contract, ethers, FixedNumber } from 'ethers';
import useTokenBalance from '../../hooks/generic/useTokenBalance';
import useSwapPriceImpact from '../../hooks/useSwapPriceImpact';
import { config } from '../../lib/core/config'; 
import { ArtGobblers__factory, Goober__factory } from '../../lib/types/contracts';
import { UserSettingsContext } from '../../lib/UserSettingsContext';
import React, { FC, useCallback, useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { erc20ABI, useAccount, useNetwork, useProvider, useSigner } from 'wagmi';
import Alert from './Alert';
import GobblerSelect from './GobblerSelect';

interface SwapParams {
	gooIn: BigNumber;
	gobblersIn: number[];
	gooOut: BigNumber;
	gobblersOut: number[];
	erroneousGoo?: BigNumber;
}

function usePreviewSwap(fromAsset: string, toAsset: string, slippage: number, params: SwapParams) {
	const provider = useProvider();

	return useQuery(['preview-swap', fromAsset, toAsset, params, slippage], async () => {
		const gooberContract = Goober__factory.connect(config.gooberContractAddress, provider);

		if (fromAsset === 'Goo' && toAsset === 'Gobblers' && params.gobblersOut.length > 0) {
			const erroneousGoo = await gooberContract.previewSwap([], BigNumber.from(1), params.gobblersOut, BigNumber.from(0));

			const gooKey = erroneousGoo.isNegative() ? 'gooOut' : 'gooIn';
			const gooTerm = erroneousGoo.isNegative()
				? erroneousGoo.abs()
				: erroneousGoo.abs().mul(BigNumber.from(1000).add(slippage)).div(BigNumber.from(1000));

			// TODO(This ratio should be user input slippage control with default, and use the safe method)
			return {
				...params,
				[gooKey]: gooTerm,
				erroneousGoo
			};
		}

		if (fromAsset === 'Gobblers' && toAsset === 'Goo' && params.gobblersIn.length > 0) {
			const erroneousGoo = await gooberContract.previewSwap(params.gobblersIn, BigNumber.from(0), [], BigNumber.from(0));

			const gooKey = erroneousGoo.isNegative() ? 'gooOut' : 'gooIn';
			const gooTerm = erroneousGoo.isNegative()
				? erroneousGoo.abs()
				: erroneousGoo.abs().mul(BigNumber.from(1000).add(slippage)).div(BigNumber.from(1000));

			// TODO(This ratio should be user input slippage control with default, and use the safe method)
			return {
				...params,
				[gooKey]: gooTerm,
				erroneousGoo
			};
		}

		if (fromAsset === 'Gobblers' && toAsset === 'Gobblers' && params.gobblersIn.length > 0 && params.gobblersOut.length > 0) {
			const erroneousGoo = await gooberContract.previewSwap(params.gobblersIn, BigNumber.from(0), params.gobblersOut, BigNumber.from(0));

			const gooKey = erroneousGoo.isNegative() ? 'gooOut' : 'gooIn';
			const gooTerm = erroneousGoo.isNegative()
				? erroneousGoo.abs()
				: erroneousGoo.abs().mul(BigNumber.from(1000).add(slippage)).div(BigNumber.from(1000));

			// TODO(This ratio should be user input slippage control with default, and use the safe method)
			return {
				...params,
				[gooKey]: gooTerm,
				erroneousGoo
			};
		}

		return params;
	});
}

const SwapForm: FC = () => {
	const [transacting, setTransacting] = useState(false);
	const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
	const [insufficientGoo, setInsufficientGoo] = React.useState(false);

	const [fromAsset, setFromAsset] = useState('Goo');
	const [toAsset, setToAsset] = useState('Gobblers');

	const { slippage } = useContext(UserSettingsContext);

	const [selectedGobblerIn, setSelectedGobblersIn] = useState<number[]>([]);
	const [selectedGobblersOut, setSelectedGobblersOut] = useState<number[]>([]);

	const gobblersIn = fromAsset === 'Gobblers' ? selectedGobblerIn : [];
	const gobblersOut = toAsset === 'Gobblers' ? selectedGobblersOut : [];

	const { data: previewResults } = usePreviewSwap(fromAsset, toAsset, slippage, {
		gobblersIn,
		gooIn: BigNumber.from('0'),
		gobblersOut,
		gooOut: BigNumber.from(0)
	});

	const { data: impact = BigNumber.from(0) } = useSwapPriceImpact(fromAsset, toAsset, {
		gobblersIn,
		gooIn: BigNumber.from(0),
		gobblersOut,
		gooOut: BigNumber.from(0)
	});

	const impactPer = parseFloat(FixedNumber.fromValue(BigNumber.from(impact), 18).round(4).toString()) * 100;

	const { address } = useAccount();
	const { chain } = useNetwork();
	const { data: signer } = useSigner();

	const { openConnectModal } = useConnectModal();
	const { openChainModal } = useChainModal();

	const { data: gooBalance } = useTokenBalance(address, config.gooAddress);

	useEffect(() => {
		setInsufficientGoo(false);
		if (!gooBalance || !previewResults) {
			return;
		}

		if (previewResults.gooIn.gt(BigNumber.from(0)) && previewResults.gooIn.gt(gooBalance)) {
			setInsufficientGoo(true);
		} else {
			setErrorMessage(null);
		}
	}, [gooBalance, previewResults]);

	const onSubmit = useCallback(async () => {
		if (!signer) {
			// this error really should never occur.
			setErrorMessage('No signer connected.');
			return;
		}

		if (!address) {
			// this error really should never occur.
			setErrorMessage('No account connected.');
			return;
		}

		if (!previewResults?.erroneousGoo) {
			return;
		}

		setTransacting(true);

		const gooberContract = Goober__factory.connect(config.gooberContractAddress, signer);
		const artGobblersContract = ArtGobblers__factory.connect(config.artGobblersAddress, signer);
		const gooToken = new Contract(config.gooAddress, erc20ABI, signer) as ERC20;

		try {
			const gooAllowance = await gooToken.allowance(address, config.gooberContractAddress);

			// 1. Check GOO allowance
			if (previewResults.gooIn.gt(0) && gooAllowance.lt(previewResults.gooIn)) {
				const tx = await gooToken.approve(config.gooberContractAddress, ethers.constants.MaxUint256);

				await tx.wait();
			}

			// 2. Check Art Gobbler allowance
			const isApprovedForAll = await artGobblersContract.isApprovedForAll(address, config.gooberContractAddress);

			if (!isApprovedForAll && previewResults.gobblersIn.length > 0) {
				const tx = await artGobblersContract.setApprovalForAll(config.gooberContractAddress, true);

				await tx.wait();
			}

			const slippageBase = previewResults.erroneousGoo.abs();
			const gooSlipped = BigNumber.from(slippageBase).abs().mul(BigNumber.from(1000).sub(slippage)).div(BigNumber.from(1000));
			const gooDelta = BigNumber.from(slippageBase).abs().sub(gooSlipped);

			const tx = await gooberContract.safeSwap(
				gooDelta,
				Date.now() + 1800000,
				previewResults.gobblersIn,
				previewResults.gooIn,
				previewResults.gobblersOut,
				previewResults.gooOut,
				address,
				'0x'
			);

			await tx.wait();
		} catch (e) {
			setErrorMessage((e as Error).message);
		}

		setTransacting(false);
	}, [signer, address, previewResults, slippage]);

	return (
		<div className="divide-y divide-gray-700">
			<div className="space-y-4 pb-4 pt-4">
				<div className="relative grid grid-cols-2 items-center">
					<div className="relative">
						<Listbox
							onChange={(newValue) => {
								if (newValue === 'Goo' && toAsset === 'Goo') {
									setToAsset('Gobblers');
								}
								setFromAsset(newValue);
							}}
							value={fromAsset}
							as={React.Fragment}
						>
							{({ open }) => (
								<>
									<Listbox.Button
										className={`w-full rounded-l-lg hover:rounded-l-lg ${
											open ? 'rounded-bl-none hover:rounded-bl-none' : ''
										} border-l border-t border-b border-gray-700 p-6 text-left transition-colors hover:bg-gray-800`}
									>
										<span className="mb-1 block font-bold">Swap From</span>
										<span className="block text-2xl tracking-wide">{fromAsset}</span>
									</Listbox.Button>
									<Listbox.Options className="absolute left-0 right-0 z-20 w-full overflow-hidden rounded-b-lg border border-gray-700 bg-gray-800 shadow-lg">
										<Listbox.Option
											className="block w-full cursor-pointer p-4 text-left transition-colors hover:bg-gray-700"
											value="Goo"
										>
											Goo
										</Listbox.Option>
										<Listbox.Option
											className="block w-full cursor-pointer p-4 text-left transition-colors hover:bg-gray-700"
											value="Gobblers"
										>
											Gobblers
										</Listbox.Option>
									</Listbox.Options>
								</>
							)}
						</Listbox>
					</div>
					<div className="relative">
						<Listbox
							onChange={(newValue) => {
								if (newValue === 'Goo' && fromAsset === 'Goo') {
									setFromAsset('Gobblers');
								}
								setToAsset(newValue);
							}}
							value={toAsset}
							as={React.Fragment}
						>
							{({ open }) => (
								<>
									<Listbox.Button
										className={`w-full rounded-r-lg hover:rounded-r-lg ${
											open ? ' rounded-br-none hover:rounded-br-none' : ''
										} border-r border-t border-b border-gray-700 p-6 text-right transition-colors hover:bg-gray-800`}
									>
										<span className="mb-1 block font-bold">To</span>
										<span className="block text-2xl tracking-wide">{toAsset}</span>
									</Listbox.Button>
									<Listbox.Options className="absolute left-0 right-0 z-20 w-full overflow-hidden rounded-b-lg border border-gray-700 bg-gray-800 shadow-lg">
										<Listbox.Option
											className="block w-full cursor-pointer p-4 text-left transition-colors hover:bg-gray-700"
											value="Goo"
										>
											Goo
										</Listbox.Option>
										<Listbox.Option
											className="block w-full cursor-pointer p-4 text-left transition-colors hover:bg-gray-700"
											value="Gobblers"
										>
											Gobblers
										</Listbox.Option>
									</Listbox.Options>
								</>
							)}
						</Listbox>
					</div>
					<button
						className="absolute left-0 right-0 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-700 transition-colors hover:bg-gray-600"
						onClick={() => {
							const _fromAsset = fromAsset;
							const _toAsset = toAsset;
							setFromAsset(_toAsset);
							setToAsset(_fromAsset);
						}}
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
							<path
								fillRule="evenodd"
								d="M13.2 2.24a.75.75 0 00.04 1.06l2.1 1.95H6.75a.75.75 0 000 1.5h8.59l-2.1 1.95a.75.75 0 101.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 00-1.06.04zm-6.4 8a.75.75 0 00-1.06-.04l-3.5 3.25a.75.75 0 000 1.1l3.5 3.25a.75.75 0 101.02-1.1l-2.1-1.95h8.59a.75.75 0 000-1.5H4.66l2.1-1.95a.75.75 0 00.04-1.06z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
				</div>
				{fromAsset === 'Gobblers' && (
					<div className="space-y-4">
						<div>
							<p className="text-lg font-bold">Select Gobblers to send</p>
						</div>
						<GobblerSelect onChange={(value) => setSelectedGobblersIn(value)} />
					</div>
				)}
				{toAsset === 'Gobblers' && (
					<div className="space-y-4">
						<div>
							<p className="text-lg font-bold">Select Gobblers to recieve</p>
						</div>
						<GobblerSelect display={true} address={config.gooberContractAddress} onChange={(value) => setSelectedGobblersOut(value)} />
					</div>
				)}
				{address === undefined && (
					<button
						className="block w-full rounded-xl bg-goober-goo py-6 font-bold uppercase text-gray-900 transition-colors hover:bg-goober-goo/90 disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-white"
						onClick={openConnectModal}
					>
						Connect Wallet
					</button>
				)}
				{address !== undefined && (!chain || chain.unsupported) && (
					<button
						className="block w-full rounded-xl bg-goober-roo py-6 font-bold uppercase text-white transition-colors hover:bg-goober-roo/90 disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-white"
						onClick={openChainModal}
					>
						Wrong network
					</button>
				)}
				{address !== undefined && chain && !chain.unsupported && (
					<button
						className={`block w-full rounded-xl py-6 font-bold uppercase  transition-colors disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-white ${
							impactPer >= 10 ? 'bg-goober-roo text-white hover:bg-goober-roo/90' : 'bg-goober-goo text-gray-900 hover:bg-goober-goo/90'
						}`}
						onClick={onSubmit}
						disabled={transacting || insufficientGoo || !previewResults?.erroneousGoo}
					>
						{insufficientGoo ? 'Insufficient Funds' : 'Swap'}
					</button>
				)}
			</div>
			<div className="py-8">
				<div className="flex items-center justify-between">
					{fromAsset === 'Gobblers' && toAsset === 'Gobblers' && previewResults && (
						<>
							{previewResults.gooIn.gt(0) && (
								<>
									<p className="font-bold">
										<span className="text-goober-goo">GOO</span> required:
									</p>
									<p>
										{parseFloat(ethers.utils.formatEther(previewResults.gooIn)).toFixed(6)}{' '}
										<span className="text-goober-goo">GOO</span>
									</p>
								</>
							)}
							{previewResults.gooOut.gt(0) && (
								<>
									<p className="font-bold">
										<span className="text-goober-goo">GOO</span> recieved:
									</p>
									<p>
										{parseFloat(ethers.utils.formatEther(previewResults.gooOut)).toFixed(6)}{' '}
										<span className="text-goober-goo">GOO</span>
									</p>
								</>
							)}
						</>
					)}
				</div>
				<div className="flex items-center justify-between">
					{fromAsset === 'Goo' && toAsset === 'Gobblers' && previewResults && (
						<>
							<p className="font-bold">
								<span className="text-goober-goo">GOO</span> required
							</p>
							<p>
								{parseFloat(ethers.utils.formatEther(previewResults.gooIn)).toFixed(2)} <span className="text-goober-goo">GOO</span>
							</p>
						</>
					)}
					{fromAsset === 'Gobblers' && toAsset === 'Goo' && previewResults && (
						<>
							<p className="font-bold">
								<span className="text-goober-goo">GOO</span> recieved
							</p>
							<p>
								{parseFloat(ethers.utils.formatEther(previewResults.gooOut)).toFixed(2)} <span className="text-goober-goo">GOO</span>
							</p>
						</>
					)}
				</div>
				<div className="flex items-center justify-between">
					{gooBalance && (
						<>
							<p className="font-bold">
								<span className="text-goober-goo">GOO</span> balance
							</p>
							<p>
								{parseFloat(ethers.utils.formatEther(gooBalance)).toFixed(2)} <span className="text-goober-goo">GOO</span>
							</p>
						</>
					)}
				</div>
				<div className="flex items-center justify-between">
					<>
						<p className={`font-bold ${impactPer >= 10 && 'text-goober-roo'}`}>Price impact</p>
						<p className={`${impactPer >= 10 && 'text-goober-roo'}`}>
							{impact ? `${impactPer === 0 ? '' : '-'}${impactPer.toFixed(2)}%` : '?'}
						</p>
					</>
				</div>
			</div>
			<div>
				<div className="py-3 text-center text-gray-400">The vault charges a 0.3% fee on swaps.</div>
			</div>
			<div className="py-6">{errorMessage && <Alert>{errorMessage}</Alert>}</div>
		</div>
	);
};

export default SwapForm;
