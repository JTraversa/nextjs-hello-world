import { ERC20Permit, ERC20Permit__factory } from '@elementfi/elf-council-typechain';
import { Signer } from '@ethersproject/abstract-signer';
import { getAddress } from '@ethersproject/address';
import { ContractReceipt } from '@ethersproject/contracts';
import { makeSmartContractReadCallQueryKey, useSmartContractTransaction } from '@koyofinance/react-query-typechain';
import { useAddRecentTransaction } from '@rainbow-me/rainbowkit';
import { UseMutationResult, useQueryClient } from 'react-query';

export default function useSetTokenAllowance(
	signer: Signer | undefined,
	tokenAddress: string
): UseMutationResult<ContractReceipt | undefined, unknown, Parameters<ERC20Permit['approve']>> {
	const queryClient = useQueryClient();
	const addRecentTransaction = useAddRecentTransaction();

	const tokenContract: ERC20Permit | undefined = signer ? ERC20Permit__factory.connect(tokenAddress, signer) : undefined;

	const approve = useSmartContractTransaction(tokenContract, 'approve', signer, {
		onTransactionSubmitted: (tx) => {
			addRecentTransaction({
				hash: tx.hash,
				description: 'Approving asset spending.'
			});
		},
		onTransactionMined: async (tx, [spender]) => {
			await queryClient.invalidateQueries(
				makeSmartContractReadCallQueryKey<ERC20Permit, 'allowance'>(tx.to, 'allowance', [tx.from, getAddress(spender)])
			);
		},
		blockConfirmations: 1
	});

	return approve;
}
