import { ChainId } from 'lib/enums/ChainId';
import * as z from 'zod';

export const configSchema = z.object({
	defaultSiteRoot: z.string(),
	nextJsProduction: z.boolean(),

	defaultChainId: z.number().optional().default(ChainId.MAINNET),
	wrappedNativeAssetAddress: z.string(),
	multicallAddress: z.string(),
	alchemyApiKey: z.string(),
	siweMessage: z.string(),
	darkModeDefault: z.boolean(),

	quayBaseUrl: z.string(),

	gooberContractAddress: z.string(),
	gooAddress: z.string(),
	artGobblersAddress: z.string(),

	artGobblersAverageMultiplier: z.number().optional().default(73294),

	subgraphUrl: z.string()
});

export const config = configSchema.parse({
	defaultSiteRoot: process.env.NEXT_PUBLIC_DEFAULT_SITE_ROOT || 'goober.xyz',
	nextJsProduction: process.env.NEXT_PUBLIC_VERCEL_ENV ? process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' : false,

	defaultChainId: process.env.NEXT_PUBLIC_DEFAULT_CHAIN_ID ? parseInt(process.env.NEXT_PUBLIC_DEFAULT_CHAIN_ID, 10) : undefined,
	wrappedNativeAssetAddress: process.env.NEXT_PUBLIC_WRAPPED_NATIVE_ASSET_ADDRESS || '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
	multicallAddress: process.env.NEXT_PUBLIC_MULTICALL_ADDRESS || '0xcA11bde05977b3631167028862bE2a173976CA11',
	alchemyApiKey: process.env.NEXT_PUBLIC_ALCHEMY_ETHEREUM_MAINNET_API_KEY || '8RJeK9zauXMw3z8tOCiWBDOvG_gxth9j',
	siweMessage: process.env.NEXT_PUBLIC_SIWE_MESSAGE || 'Hi from Goober!',
	darkModeDefault: JSON.parse(process.env.NEXT_PUBLIC_DARK_MODE_DEFAULT || 'false') as boolean,

	quayBaseUrl: process.env.NEXT_PUBLIC_QUAY_URL || '',

	artGobblersAddress: '0x60bb1e2AA1c9ACAfB4d34F71585D7e959f387769',
	// TODO(Branch prod/non-prod)
	gooberContractAddress: '0x2275d4937b6bfd3c75823744d3efbf6c3a8de473',
	gooAddress: '0x600000000a36F3cD48407e35eB7C5c910dc1f7a8',

	artGobblersAverageMultiplier: process.env.NEXT_PUBLIC_AVERAGE_MULT_BPS ? parseInt(process.env.NEXT_PUBLIC_AVERAGE_MULT_BPS, 10) : undefined,

	subgraphUrl: 'https://api.thegraph.com/subgraphs/name/thal0x/goober-mainnet'
});

export type Config = z.infer<typeof configSchema>;
