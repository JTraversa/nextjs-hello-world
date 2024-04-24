import { BigNumber, Contract } from 'ethers';
import { config } from '../core/config';
import { useQuery } from 'react-query';
import GooberABI from '../constants/abis/Goober.json';
import { Provider } from '@ethersproject/providers';
import { Goober } from '../types/contracts';
import { useProvider } from 'wagmi';

export function usePreviewDeposit(gooAmount: BigNumber, gobblerIDs: number[], provider: Provider) {
	return useQuery(
		['preview-deposit', gooAmount, gobblerIDs],
		async () => {
			if (gooAmount.isZero() && gobblerIDs.length === 0) {
				return BigNumber.from(0);
			}

			const gooberContract = new Contract(config.gooberContractAddress, GooberABI, provider) as Goober;

			const response = await gooberContract.previewDeposit(gobblerIDs, gooAmount);

			return response;
		},
		{
			refetchInterval: false,
			refetchOnMount: false,
			refetchOnReconnect: false,
			refetchOnWindowFocus: false
		}
	);
}

export function usePreviewWithdraw(gooAmount: BigNumber, gobblerIDs: number[], provider: Provider, onError?: ((err: unknown) => void) | undefined) {
	return useQuery(
		['preview-withdraw', gooAmount, gobblerIDs],
		async () => {
			if (gooAmount.isZero() && gobblerIDs.length === 0) {
				return BigNumber.from(0);
			}

			const gooberContract = new Contract(config.gooberContractAddress, GooberABI, provider) as Goober;

			const expectedShares = await gooberContract.previewWithdraw(gobblerIDs, gooAmount);

			return expectedShares;
		},
		{
			refetchInterval: false,
			refetchOnMount: false,
			refetchOnReconnect: false,
			refetchOnWindowFocus: false,
			onError
		}
	);
}

export function useTotalGooberSupply() {
	const provider = useProvider();

	return useQuery(['goober-supply'], async () => {
		const gooberContract = new Contract(config.gooberContractAddress, GooberABI, provider) as Goober;

		const totalSupply = await gooberContract.totalSupply();

		return totalSupply;
	});
}
