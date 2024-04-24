import { BigNumber } from 'ethers';
import { config } from 'lib/core/config';
import { ChainId } from 'lib/enums/ChainId';

export const DEFAULT_CHAIN_ID: ChainId = config.defaultChainId as ChainId;
export const ROOT = config.defaultSiteRoot;

export const WAD = BigNumber.from(10).pow(18);
