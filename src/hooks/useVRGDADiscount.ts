import { Provider } from '@ethersproject/providers';
import { BigNumber, FixedNumber } from 'ethers';
import { WAD } from '../lib/constants';
import { config } from '../lib/core/config';
import { ArtGobblers__factory, Goober__factory } from '../lib/types/contracts';
import { useQuery } from 'react-query';
import { useBlockNumber } from 'wagmi';

function useVRGDADiscount(provider: Provider) {
	const query = useQuery(
		['goober', 'vrgda-count'],
		async () => {
			const gobblers = ArtGobblers__factory.connect(config.artGobblersAddress, provider);
			const goober = Goober__factory.connect(config.gooberContractAddress, provider);

			const vrgdaGooPrice = await gobblers.gobblerPrice();
			const { _gobblerReserve, _gooReserve } = await goober.getReserves();

			const auctionPricePerMult = BigNumber.from(vrgdaGooPrice.mul(10000)).div(config.artGobblersAverageMultiplier);
			const poolPricePerMult = _gooReserve.div(_gobblerReserve);

			return {
				value: FixedNumber.fromValue(
					poolPricePerMult.lt(auctionPricePerMult)
						? auctionPricePerMult.mul(WAD).div(poolPricePerMult).sub(WAD)
						: poolPricePerMult.mul(WAD).div(auctionPricePerMult).sub(WAD),
					18
				),
				premium: poolPricePerMult.gt(auctionPricePerMult)
			};
		},
		{
			refetchInterval: false,
			refetchOnMount: true,
			refetchOnWindowFocus: true
		}
	);

	useBlockNumber({
		onBlock: () => {
			void query.refetch();
		}
	});

	return query;
}

export default useVRGDADiscount;
