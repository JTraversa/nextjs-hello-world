import { ERC20Permit, ERC20Permit__factory } from '@elementfi/elf-council-typechain';
import { getAddress } from '@ethersproject/address';
import { BigNumberish } from '@ethersproject/bignumber';
import { ContractMethodArgs, useSmartContractReadCall } from '@koyofinance/react-query-typechain';
import { useWeb3 } from '../../hooks/useWeb3';
import { QueryObserverResult } from 'react-query';

export default function useTokenAllowance(
	account: string | null | undefined,
	spender: string | null | undefined,
	tokenAddress: string | null | undefined
): QueryObserverResult<BigNumberish> {
	const { provider, chainId } = useWeb3();
	const tokenContract = tokenAddress ? ERC20Permit__factory.connect(tokenAddress, provider) : undefined;

	return useSmartContractReadCall(tokenContract, 'allowance', {
		callArgs: [account as string, spender as string].map((addr) => (addr ? getAddress(addr) : addr)) as ContractMethodArgs<
			ERC20Permit,
			'allowance'
		>,
		chainId,
		enabled: Boolean(account && spender && tokenAddress)
	});
}
