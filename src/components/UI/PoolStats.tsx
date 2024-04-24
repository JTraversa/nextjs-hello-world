import React, { FC } from 'react';
import { useQuery } from 'react-query';
import { Contract, ethers } from 'ethers';
import { Provider } from '@ethersproject/providers';
import { ArtGobblers } from '../../lib/types/contracts';
import ArtGobblersABI from '../../lib/constants/abis/ArtGobblers.json';
import { config } from '../../lib/core/config';
import { useBlockNumber, useProvider } from 'wagmi';
import { useGetGooberDayDataQuery } from '../../generated/graph/graphql-codegen-generated';
import useVRGDADiscount from '../../hooks/useVRGDADiscount';

function useArtGobbersUserData(address: `0x${string}` | undefined, provider: Provider) {
	const query = useQuery(
		['pool-stats', address],
		async () => {
			if (!address) {
				return null;
			}

			const artGobblers = new Contract(config.artGobblersAddress, ArtGobblersABI, provider) as ArtGobblers;

			const userData = await artGobblers.getUserData(address);

			const gooBalance = await artGobblers.gooBalance(address);

			return {
				lastBalance: userData.lastBalance,
				emissionMultiple: userData.emissionMultiple,
				gobblersOwned: userData.gobblersOwned,
				gooBalance
			};
		},
		{
			refetchInterval: false,
			refetchOnMount: false,
			refetchOnReconnect: false,
			refetchOnWindowFocus: false
		}
	);

	useBlockNumber({
		onBlock: () => {
			void query.refetch();
		}
	});

	return query;
}

const PoolStats: FC = () => {
	const provider = useProvider();

	const { data: poolData } = useArtGobbersUserData(config.gooberContractAddress as `0x${string}`, provider);
	const { data: dayDatas } = useGetGooberDayDataQuery({
		endpoint: config.subgraphUrl
	});
	const { data: auctionPoolDifference } = useVRGDADiscount(provider);

	let n = 0;

	const averageKDelta = dayDatas
		? dayDatas.gooberDayDatas.reduce((acc, dayData) => {
				const kDelta = parseFloat(dayData.kDelta);

				if (kDelta === 0) {
					return acc;
				}

				n += 1;
				return (acc += kDelta);
		  }, 0) / n
		: null;

	return (
		<div>
			<div className="grid grid-cols-2 gap-4">
				<h2 className="col-span-2 gap-4 text-2xl font-bold">Pool Info</h2>
				<div>
					<p className="mb-2">
						<span className="font-bold">APY</span>
						<span className="text-base text-gray-400"> = &#916;&#8730;(Goo * Mult)</span>
					</p>
					<p className="text-3xl tabular-nums text-goober-goo">{averageKDelta && (averageKDelta * 365 * 100).toFixed(2)}%</p>
				</div>
				<div>
					<p className="mb-2 font-bold">VRGDA {auctionPoolDifference?.premium ? 'Premium' : 'Discount'}</p>
					{auctionPoolDifference && (
						<p className={`text-3xl tabular-nums ${auctionPoolDifference.premium ? 'text-goober-roo' : 'text-goober-goo'}`}>
							{(parseFloat(auctionPoolDifference.value.round(4).toString()) * 100).toFixed(2)}%
						</p>
					)}
				</div>
				<div>
					<p className="mb-2 font-bold">Goo Staked</p>
					{poolData && <p className="text-3xl tabular-nums">{parseFloat(ethers.utils.formatEther(poolData.gooBalance)).toFixed(4)}</p>}
				</div>
				<div>
					<p className="mb-2 font-bold">Total Multiplier</p>
					{poolData && <p className="text-3xl tabular-nums">{poolData.emissionMultiple}x</p>}
				</div>
				<div>
					<p className="mb-2 font-bold">Goo Production</p>
					{poolData && (
						<p className="text-3xl tabular-nums">
							{Math.sqrt(poolData.emissionMultiple * parseFloat(ethers.utils.formatEther(poolData.gooBalance))).toFixed(2)}{' '}
							<span className="text-base text-gray-400">/ day</span>
						</p>
					)}
				</div>
				<div>
					<p className="mb-2 font-bold">Gobblers Staked</p>
					{poolData && <p className="text-3xl tabular-nums">{poolData.gobblersOwned}</p>}
				</div>
			</div>
		</div>
	);
};

export default PoolStats;
