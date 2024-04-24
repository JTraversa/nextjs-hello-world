import { ERC20 } from '@opensea/seaport-js/lib/typechain/ERC20';
import { useChainModal, useConnectModal } from '@rainbow-me/rainbowkit';
import { BigNumber, Contract, ethers, FixedNumber } from 'ethers';
import useTokenBalance from '../../hooks/generic/useTokenBalance';
import { config } from '../../lib/core/config'; 
import { usePreviewDeposit } from '../../lib/goobers/usePreviewDeposit';
import React, { FC, Fragment, useCallback, useContext, useEffect } from 'react';
import { erc20ABI, useAccount, useNetwork, useProvider, useSigner } from 'wagmi';
import ArtGobblersABI from '../../lib/constants/abis/ArtGobblers.json';
import GobblerSelect from './GobblerSelect';
import NumberInput from './NumberInput';
import GooberABI from '../../lib/constants/abis/Goober.json';
import { ArtGobblers, Goober } from '../../lib/types/contracts';
import Alert from './Alert';
import { UserSettingsContext } from '../../lib/UserSettingsContext';
import useSwapPriceImpact from '../../hooks/useSwapPriceImpact';

const DepositForm: FC = () => {
	const [transacting, setTransacting] = React.useState(false);
	const [gooInputValue, setGooInputValue] = React.useState('');
	const [insufficientGoo, setInsufficientGoo] = React.useState(false);
	const [selectedGobblers, setSelectedGobblers] = React.useState<number[]>([]);
	const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

	const { slippage } = useContext(UserSettingsContext);

	const { address } = useAccount();
	const { chain } = useNetwork();
	const { data: signer } = useSigner();
	const provider = useProvider();

	const { openConnectModal } = useConnectModal();
	const { openChainModal } = useChainModal();

	const { data: gooBalance, refetch: refetchGooBalance } = useTokenBalance(address, config.gooAddress);

	const { data: expectedShares } = usePreviewDeposit(
		gooInputValue === '' ? BigNumber.from(0) : ethers.utils.parseEther(gooInputValue),
		selectedGobblers,
		provider
	);

	const { data: impact = BigNumber.from(0) } = useSwapPriceImpact('Goo', 'Gobblers', {
		gobblersIn: selectedGobblers,
		gooIn: gooInputValue === '' ? BigNumber.from(0) : ethers.utils.parseEther(gooInputValue),
		gobblersOut: [],
		gooOut: BigNumber.from(0)
	});

	const impactPer = parseFloat(FixedNumber.fromValue(BigNumber.from(impact), 18).round(4).toString()) * 100;

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

		if (!expectedShares) {
			return;
		}

		const gooAmount = gooInputValue === '' ? BigNumber.from(0) : ethers.utils.parseEther(gooInputValue);

		const gooberContract = new Contract(config.gooberContractAddress, GooberABI, signer) as Goober;
		const artGobblersContract = new Contract(config.artGobblersAddress, ArtGobblersABI, signer) as ArtGobblers;
		const gooToken = new Contract(config.gooAddress, erc20ABI, signer) as ERC20;

		setTransacting(true);

		try {
			// 1. Check Goo allowance
			const gooAllowance = await gooToken.allowance(address, config.gooberContractAddress);

			if (!gooAmount.isZero() && gooAllowance.lt(gooAmount)) {
				const tx = await gooToken.approve(config.gooberContractAddress, ethers.constants.MaxUint256);

				await tx.wait();
			}

			// 2. Check Art Gobbler allowance
			const isApprovedForAll = await artGobblersContract.isApprovedForAll(address, config.gooberContractAddress);

			if (!isApprovedForAll && selectedGobblers.length > 0) {
				const tx = await artGobblersContract.setApprovalForAll(config.gooberContractAddress, true);

				await tx.wait();
			}

			const minFractions = expectedShares.mul(BigNumber.from(1000).sub(slippage)).div(BigNumber.from(1000));

			// Deposit Gobblers and/or Goo to Goober vault
			const tx = await gooberContract.safeDeposit(selectedGobblers, gooAmount, address, minFractions, Date.now() + 1800000);
			await tx.wait();

			refetchGooBalance();
		} catch (e) {
			setErrorMessage((e as Error).message);
		}

		setTransacting(false);
	}, [address, expectedShares, gooInputValue, refetchGooBalance, selectedGobblers, signer, slippage]);

	useEffect(() => {
		setInsufficientGoo(false);
		if (gooInputValue !== '' && gooBalance) {
			const bigNumberValue = ethers.utils.parseEther(gooInputValue);
			if (bigNumberValue.gt(gooBalance)) {
				setInsufficientGoo(true);
			} else {
				setErrorMessage(null);
			}
		}
	}, [gooBalance, gooInputValue]);

	return (
		<Fragment>
			<div className="divide-y divide-gray-700">
				<div className="space-y-4 pb-4 pt-4">
					<div className="space-y-2">
						<div>
							<div className="flex items-center justify-between">
								<p className="text-lg font-bold">Goo</p>
								<p>Goo Balance: {address && gooBalance ? `${ethers.utils.formatEther(gooBalance)} Goo` : 'goo?'}</p>
							</div>
							<p className="tracking-wide text-gray-500">Amount of Goo to deposit.</p>
						</div>
						<div className="relative">
							<NumberInput className="pr-20" value={gooInputValue} onChange={(value) => setGooInputValue(value)} />
							<div className="absolute right-0 top-0 bottom-0 flex w-20 items-center justify-center">
								<button
									className="font-bold uppercase text-[#8EF42E] hover:underline disabled:cursor-not-allowed disabled:text-gray-500 disabled:no-underline"
									onClick={() => gooBalance && setGooInputValue(ethers.utils.formatEther(gooBalance))}
								>
									Max
								</button>
							</div>
						</div>
					</div>
					<div className="space-y-4">
						<div>
							<p className="text-lg font-bold">Gobblers</p>
							<p className="tracking-wide text-gray-500">Select Gobblers to deposit into vault.</p>
						</div>
						<GobblerSelect onChange={(value) => setSelectedGobblers(value)} />
					</div>
					{address === undefined && (
						<button
							className="block w-full rounded-xl bg-[#8EF42E] py-6 font-bold uppercase text-gray-900 transition-colors hover:bg-[#8EF42E]/90 disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-white"
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
							className="block w-full rounded-xl bg-[#8EF42E] py-6 font-bold uppercase text-gray-900 transition-colors hover:bg-[#8EF42E]/90 disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-white"
							disabled={
								transacting || errorMessage !== null || (!Number(gooInputValue) && selectedGobblers.length === 0) || insufficientGoo
							}
							onClick={onSubmit}
						>
							{insufficientGoo ? 'Insufficient Funds' : 'Deposit'}
						</button>
					)}
				</div>
				<div className="py-8">
					<div className="flex items-center justify-between">
						<p className="font-bold">You will receive:</p>
						<p>
							{expectedShares &&
								ethers.utils.formatEther(expectedShares.mul(BigNumber.from(1000).sub(slippage)).div(BigNumber.from(1000)))}{' '}
							GBR
						</p>
					</div>
					<div className="flex items-center justify-between">
						<p className={`font-bold ${impactPer >= 10 && 'text-goober-roo'}`}>Price impact</p>
						<p className={`${impactPer >= 10 && 'text-goober-roo'}`}>
							{impact ? `${impactPer === 0 ? '' : '-'}${impactPer.toFixed(2)}%` : '?'}
						</p>
					</div>
				</div>
				<div>
					<div className="py-3 text-center text-gray-400">The vault charges a 2% deposit fee, 10% on yield.</div>
				</div>
				<div className="py-6">{errorMessage && <Alert>{errorMessage}</Alert>}</div>
			</div>
		</Fragment>
	);
};

export default DepositForm;
