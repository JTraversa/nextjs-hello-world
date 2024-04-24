import { ERC20Permit, ERC20Permit__factory } from '@elementfi/elf-council-typechain';
import { getAddress } from '@ethersproject/address';
import { BigNumberish } from '@ethersproject/bignumber';
import { ContractMethodArgs, useSmartContractReadCalls } from '@koyofinance/react-query-typechain';
import { useWeb3 } from '../../hooks/useWeb3';
import { QueryObserverResult } from 'react-query';

export default function useMultiTokenBalances(
	account: string | null | undefined,
	tokenAddresses: (string | undefined | null)[] = []
): QueryObserverResult<BigNumberish>[] {
	const { provider, chainId } = useWeb3();
	const tokenContracts = tokenAddresses.map((tokenAddress) => (tokenAddress ? ERC20Permit__factory.connect(tokenAddress, provider) : undefined));

	return useSmartContractReadCalls(tokenContracts, 'balanceOf(address)' as 'balanceOf', {
		callArgs: [account as string].map((addr) => (addr ? getAddress(addr) : addr)) as ContractMethodArgs<ERC20Permit, 'balanceOf'>,
		chainId,
		enabled: Boolean(account && tokenContracts.length !== 0 && tokenContracts.every(Boolean))
	});
}
