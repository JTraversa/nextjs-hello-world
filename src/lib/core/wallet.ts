import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient } from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { publicProvider } from 'wagmi/providers/public';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { config } from './config';

const chainPresets = [chain.mainnet];
if (!config.nextJsProduction) chainPresets.push(chain.foundry);

export const { chains, provider, webSocketProvider } = configureChains(
	chainPresets, //
	[
		jsonRpcProvider({ rpc: (chain) => ({ http: chain.rpcUrls.default }) }), //
		alchemyProvider({ apiKey: config.alchemyApiKey }),
		publicProvider()
	]
);

const { connectors } = getDefaultWallets({
	appName: 'Goober',
	chains
});

export const wagmiClient = createClient({
	autoConnect: true,
	connectors,
	provider,
	webSocketProvider
});
