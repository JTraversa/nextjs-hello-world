import { ERC20PermitWithMint, ERC20PermitWithMint__factory } from '@elementfi/elf-council-typechain';
import { getAddress } from '@ethersproject/address';
import { BigNumberish } from '@ethersproject/bignumber';
import { ContractMethodArgs, useSmartContractReadCall } from '@koyofinance/react-query-typechain';
import { useWeb3 } from '../../hooks/useWeb3';
import { QueryObserverResult } from 'react-query';

export default function useTokenBalance(
	account: string | null | undefined,
	tokenAddress: string | null | undefined
): QueryObserverResult<BigNumberish> {
	const { provider, chainId } = useWeb3();
	const tokenContract = tokenAddress ? ERC20PermitWithMint__factory.connect(tokenAddress, provider) : undefined;

	return useSmartContractReadCall(tokenContract, 'balanceOf(address)' as 'balanceOf', {
		callArgs: [account as string].map((addr) => (addr ? getAddress(addr) : addr)) as ContractMethodArgs<ERC20PermitWithMint, 'balanceOf'>,
		chainId,
		enabled: Boolean(account && tokenContract)
	});
}
