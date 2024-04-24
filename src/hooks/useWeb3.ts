import type { Provider } from '@ethersproject/providers';
import type { Signer } from '@opensea/seaport-js/lib/types';
import { DEFAULT_CHAIN_ID } from '../lib/constants';
import type { ChainId } from '../lib/enums/ChainId';
import { Chain, useAccount, useNetwork, useProvider, useSigner } from 'wagmi';

export type WagmiAccountStatus = 'connected' | 'reconnecting' | 'connecting' | 'disconnected';
export interface Web3State {
	status: WagmiAccountStatus;
	isConnected: boolean;

	accountAddress: string;
	signer?: Signer;

	provider: Provider;

	chain?: Chain & { unsupported?: boolean };
	chains: Chain[];
	chainId: ChainId;
}

export function useWeb3(): Web3State {
	const { address, status, isConnected } = useAccount();
	const { data: signer } = useSigner();
	const { chain, chains } = useNetwork();

	const chainId: ChainId = (!chain?.unsupported && chain?.id) || DEFAULT_CHAIN_ID;

	const provider = useProvider();

	return {
		status,
		isConnected,

		accountAddress: address || '',
		signer: (signer as unknown as Signer) || undefined,

		provider,

		chain,
		chains,
		chainId
	};
}
