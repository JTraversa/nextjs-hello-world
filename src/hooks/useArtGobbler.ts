import type { Provider } from '@ethersproject/providers';
import { BigNumber, Contract } from 'ethers';
import { useQuery } from 'react-query';
import ArtGobblersABI from '../lib/constants/abis/ArtGobblers.json';
import { ArtGobblers } from '../lib/types/contracts';
import { formatEther } from '@ethersproject/units';
export interface GobblerAPITrait {
	trait_type: string;
	value: unknown;
}

export interface GobblerAPIResponse {
	name: string;
	image: string;
	attributes: GobblerAPITrait[];
}

export function useGobblerMetadata(idx: string | undefined) {
	return useQuery(
		['gobbler-metadata', idx],
		async () => {
			const res = await fetch(`/api/gobblers/${idx}`);

			const resJson = await res.json();

			return resJson as GobblerAPIResponse;
		},
		{
			refetchInterval: false,
			refetchOnMount: false,
			refetchOnWindowFocus: false,
			enabled: idx !== undefined
		}
	);
}

export function useArtGobbler(id: string, provider: Provider) {
	return useQuery(
		['use-art-gobbler', id],
		async () => {
			const contract = new Contract('0x60bb1e2AA1c9ACAfB4d34F71585D7e959f387769', ArtGobblersABI, provider) as ArtGobblers;

			const gobblerData = await contract.getGobblerData(BigNumber.from(id));

			const gooBalance = await contract.gooBalance(gobblerData.owner);

			const res = await fetch(`/api/gobblers/${gobblerData.idx.toString()}`);

			const resJson = (await res.json()) as GobblerAPIResponse;

			const multiplierAttr = resJson.attributes.find((attr) => attr.trait_type === 'Multiplier');
			const multiplier = multiplierAttr ? (multiplierAttr.value as number) : 0;
			const dailyGooProduction = Math.sqrt(parseFloat(formatEther(gooBalance.mul(multiplier))));

			return {
				name: resJson.name.split(' – ')[1],
				imageURL: resJson.image,
				multiplier,
				dailyGooProduction
			};
		},
		{
			refetchInterval: false,
			refetchOnMount: false,
			refetchOnWindowFocus: false
		}
	);
}
