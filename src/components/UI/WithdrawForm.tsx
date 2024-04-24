import { BigNumber, Contract, ethers } from 'ethers';
import useTokenBalance from '../../hooks/generic/useTokenBalance';
import { config } from '../../lib/core/config';
import { usePreviewWithdraw } from '../../lib/goobers/usePreviewDeposit';
import React, { FC, useCallback, useContext, useEffect } from 'react';
import { useAccount, useNetwork, useProvider, useSigner } from 'wagmi';
import Alert from './Alert';
import GobblerSelect from './GobblerSelect';
import NumberInput from './NumberInput';
import { useChainModal, useConnectModal } from '@rainbow-me/rainbowkit';
import { Goober } from '../../lib/types/contracts';
import GooberABI from '../../lib/constants/abis/Goober.json';
import { UserSettingsContext } from '../../lib/UserSettingsContext';

const WithdrawForm: FC = () => {
	const [transacting, setTransacting] = React.useState(false);
	const [gooInputValue, setGooInputValue] = React.useState('');
	const [insufficientGBR, setInsufficientGBR] = React.useState(false);
	const [selectedGobblers, setSelectedGobblers] = React.useState<number[]>([]);
	const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

	const { slippage } = useContext(UserSettingsContext);

	const { address } = useAccount();
	const { chain } = useNetwork();
	const provider = useProvider();
	const { data: signer } = useSigner();

	const { openConnectModal } = useConnectModal();
	const { openChainModal } = useChainModal();

	const gooberContractAddress = config.gooberContractAddress as `0x${string}`;

	const { data: gbrBalance, refetch: refetchGbrBalance } = useTokenBalance(address, config.gooberContractAddress);

	const { data: withdrawalShares } = usePreviewWithdraw(
		gooInputValue === '' ? BigNumber.from(0) : ethers.utils.parseEther(gooInputValue),
		selectedGobblers,
		provider
	);

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

		if (!withdrawalShares) {
			// this should never occur.
			return;
		}

		const gooAmount = gooInputValue === '' ? BigNumber.from(0) : ethers.utils.parseEther(gooInputValue);

		const gooberContract = new Contract(config.gooberContractAddress, GooberABI, signer) as Goober;

		setTransacting(true);

		try {
			const maxFractions = withdrawalShares.mul(BigNumber.from(1000).add(slippage)).div(BigNumber.from(1000));

			const tx = await gooberContract.safeWithdraw(selectedGobblers, gooAmount, address, address, maxFractions, Date.now() + 1800000);

			await tx.wait();

			refetchGbrBalance();
		} catch (e) {
			setErrorMessage((e as Error).message);
		}

		setTransacting(false);
	}, [address, gooInputValue, refetchGbrBalance, selectedGobblers, signer, slippage, withdrawalShares]);

	useEffect(() => {
		setInsufficientGBR(false);
		if (withdrawalShares && gbrBalance) {
			if (withdrawalShares.gt(gbrBalance)) {
				setInsufficientGBR(true);
			} else {
				setErrorMessage(null);
			}
		}
	}, [withdrawalShares, gbrBalance]);

	return (
		<div className="divide-y divide-gray-700">
			<div className="space-y-4 pb-8 pt-4">
				<div className="space-y-2">
					<div>
						<p className="text-lg font-bold">Goo</p>
						<p className="tracking-wide text-gray-500">Amount of Goo to withdraw.</p>
					</div>
					<div className="relative">
						<NumberInput value={gooInputValue} onChange={(value) => setGooInputValue(value)} />
					</div>
				</div>
				<div className="space-y-4">
					<div>
						<p className="text-lg font-bold">Gobblers</p>
						<p className="tracking-wide text-gray-500">Select Gobblers to withdraw.</p>
					</div>
					<GobblerSelect address={gooberContractAddress} onChange={(value) => setSelectedGobblers(value)} display={true} />
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
						onClick={onSubmit}
						disabled={transacting || errorMessage !== null || (gooInputValue === '' && selectedGobblers.length === 0) || insufficientGBR}
					>
						{insufficientGBR ? 'Insufficient Funds' : 'Withdraw'}
					</button>
				)}
			</div>
			<div className="py-8">
				<div className="flex items-center justify-between">
					<p className="font-bold">GBR Required:</p>
					<p>
						{withdrawalShares &&
							ethers.utils.formatEther(withdrawalShares.mul(BigNumber.from(1000).add(slippage)).div(BigNumber.from(1000)))}{' '}
						GBR
					</p>
				</div>
				<div className="flex items-center justify-between">
					<p className="font-bold">GBR Balance:</p>
					<p>{gbrBalance && ethers.utils.formatEther(gbrBalance)} GBR</p>
				</div>
			</div>
			<div className="py-6">{errorMessage && <Alert>{errorMessage}</Alert>}</div>
		</div>
	);
};

export default WithdrawForm;
