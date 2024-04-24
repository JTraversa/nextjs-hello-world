import { ERC20PermitWithMint__factory } from '@elementfi/elf-council-typechain';
import { BigNumberish } from '@ethersproject/bignumber';
import { useSmartContractReadCall } from '@koyofinance/react-query-typechain';
import { useWeb3 } from '../../hooks/useWeb3';
import { QueryObserverResult } from 'react-query';

export default function useTokenTotalSupply(tokenAddress: string | null | undefined): QueryObserverResult<BigNumberish> {
	const { provider, chainId } = useWeb3();
	const tokenContract = tokenAddress ? ERC20PermitWithMint__factory.connect(tokenAddress, provider) : undefined;

	return useSmartContractReadCall(tokenContract, 'totalSupply()' as 'totalSupply', {
		chainId,
		enabled: Boolean(tokenContract)
	});
}
