import { BigNumber, ethers } from 'ethers';
import { useGetTopGooberBalancesQuery } from '../../generated/graph/graphql-codegen-generated';
import { config } from '../../lib/core/config';
import { useTotalGooberSupply } from '../../lib/goobers/usePreviewDeposit';
import React, { FC } from 'react';
import { useEnsName } from 'wagmi';

interface RowProps {
	address: string;
	balance: number;
	totalSupply: number;
}

const Row: FC<RowProps> = ({ address, balance, totalSupply }) => {
	const { data: ensName } = useEnsName({
		address: address as `0x${string}`
	});

	return (
		<div className="flex items-center justify-between gap-4">
			<p className="truncate">
				<a href={`https://etherscan.io/address/${address}`} className="underline decoration-goober-goo" target="_blank" rel="noreferrer">
					{ensName || `${address.substring(0, 2 + 4)}...${address.slice(-4)}`}
				</a>
			</p>
			<p>{((balance / totalSupply) * 100).toFixed(2)}%</p>
		</div>
	);
};

const TopStakers: FC = () => {
	const { data: queryData } = useGetTopGooberBalancesQuery({
		endpoint: config.subgraphUrl
	});

	const { data: totalSupply } = useTotalGooberSupply();

	const totalSupplyFloat = parseFloat(ethers.utils.formatEther(totalSupply ?? BigNumber.from(0)));

	return (
		<div>
			<h2 className="mb-8 text-2xl font-bold">Top Stakers</h2>
			<div className="space-y-3">
				{queryData &&
					totalSupply &&
					queryData.gooberBalances.map((balance) => (
						<Row key={balance.id} address={balance.id} balance={parseFloat(balance.balance)} totalSupply={totalSupplyFloat} />
					))}
			</div>
		</div>
	);
};

export default TopStakers;
