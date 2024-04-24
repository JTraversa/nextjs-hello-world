import { Provider } from '@ethersproject/providers';
import { config } from '../lib/core/config';
import { ArtGobblers__factory, Multicall__factory } from '../lib/types/contracts';
import { useQuery } from 'react-query';
import { useBlockNumber } from 'wagmi';

export interface GobblerInfo {
	id: number;
	owner: string;
	idx: string;
	multiple: number;
}

async function fetchAllGobblers(provider: Provider): Promise<GobblerInfo[]> {
	const multicall = Multicall__factory.connect(config.multicallAddress, provider);
	const gobblersContract = ArtGobblers__factory.connect(config.artGobblersAddress, provider);

	// Get the last minted Gobbler ID.
	const currentNonLegendaryId = await gobblersContract.currentNonLegendaryId();

	// Fetch all gobbler data using multicall.
	const multicallResult = await multicall.aggregate(
		Array.from({ length: currentNonLegendaryId.toNumber() }).map((_, i) => ({
			target: gobblersContract.address,
			callData: gobblersContract.interface.encodeFunctionData('getGobblerData(uint256)', [i + 1])
		}))
	);

	// Decode results
	return multicallResult.returnData.map((callData, i) => {
		const decodedResult = gobblersContract.interface.decodeFunctionResult('getGobblerData(uint256)', callData);
		return {
			id: i + 1,
			owner: decodedResult[0] as string,
			idx: decodedResult[1].toString() as string,
			multiple: decodedResult[2] as number
		};
	});
}

export function useUserGobblers(address: `0x${string}` | undefined, provider: Provider) {
	const query = useQuery(
		['user-gobblers', address],
		async () => {
			if (!address) {
				return [];
			}

			const allGoblers = await fetchAllGobblers(provider);

			return allGoblers.filter((gobbler) => gobbler.owner.toLowerCase() === address.toLowerCase());
		},
		{
			refetchInterval: false,
			refetchOnMount: false,
			refetchOnWindowFocus: false
		}
	);

	// Ensures Gobblers stays up to date with each new block.
	useBlockNumber({
		onBlock: () => {
			void query.refetch();
		}
	});

	return query;
}
