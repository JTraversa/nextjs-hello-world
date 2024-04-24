// import { formatEther } from '@ethersproject/units';
import { BigNumber } from 'ethers';
import { WAD } from '../lib/constants';
import { config } from '../lib/core/config';
import { ArtGobblers__factory, Goober__factory, Multicall__factory } from '../lib/types/contracts';
import { useProvider, useQuery } from 'wagmi';

export interface SwapParams {
	gooIn: BigNumber;
	gobblersIn: number[];
	gooOut: BigNumber;
	gobblersOut: number[];
}

export default function useSwapPriceImpact(fromAsset: string, toAsset: string, params: SwapParams) {
	const provider = useProvider();

	return useQuery(['goober', 'swap', 'impact', fromAsset, toAsset, params], async () => {
		const artGobblersContract = ArtGobblers__factory.connect(config.artGobblersAddress, provider);
		const gooberContract = Goober__factory.connect(config.gooberContractAddress, provider);
		const multicallContract = Multicall__factory.connect(config.multicallAddress, provider);

		const erroneousGoo =
			fromAsset === 'Goo' && toAsset === 'Gobblers' && params.gobblersOut.length > 0
				? await gooberContract.previewSwap([], BigNumber.from(1), params.gobblersOut, BigNumber.from(0))
				: fromAsset === 'Gobblers' && toAsset === 'Goo' && params.gobblersIn.length > 0
				? await gooberContract.previewSwap(params.gobblersIn, BigNumber.from(0), [], BigNumber.from(0))
				: fromAsset === 'Gobblers' && toAsset === 'Gobblers' && params.gobblersIn.length > 0 && params.gobblersOut.length > 0
				? await gooberContract.previewSwap(params.gobblersIn, BigNumber.from(0), params.gobblersOut, BigNumber.from(0))
				: BigNumber.from(0);

		if (erroneousGoo.isNegative()) params.gooOut = params.gooOut.add(erroneousGoo.abs());
		else params.gooIn = params.gooIn.add(erroneousGoo.abs());

		const gooberReserves = await gooberContract.getReserves();

		const gobblersInMultCall = await multicallContract.aggregate(
			params.gobblersIn.map((gobblerId) => ({
				target: artGobblersContract.address,
				callData: artGobblersContract.interface.encodeFunctionData('getGobblerEmissionMultiple(uint256)', [gobblerId])
			}))
		);
		const gobblersInMult = gobblersInMultCall.returnData
			.map((rd) => BigNumber.from(rd))
			.reduce((prev, curr) => prev.add(curr), BigNumber.from(0));

		const gobblersOutMultCall = await multicallContract.aggregate(
			params.gobblersOut.map((gobblerId) => ({
				target: artGobblersContract.address,
				callData: artGobblersContract.interface.encodeFunctionData('getGobblerEmissionMultiple(uint256)', [gobblerId])
			}))
		);
		const gobblersOutMult = gobblersOutMultCall.returnData
			.map((rd) => BigNumber.from(rd))
			.reduce((prev, curr) => prev.add(curr), BigNumber.from(0));

		if (fromAsset === 'Gobblers' && toAsset === 'Gobblers' && params.gobblersIn.length > 0 && params.gobblersOut.length > 0) {
			if (gobblersInMult.gt(gobblersOutMult)) {
				toAsset = 'Goo';
			} else {
				fromAsset = 'Goo';
			}
		}

		const gooX = BigNumber.from(params.gooIn).sub(params.gooOut);
		const multX = BigNumber.from(gobblersInMult).sub(gobblersOutMult);

		const gooI = gooberReserves._gooReserve;
		const multI = gooberReserves._gobblerReserve;

		const gooN = BigNumber.from(gooI).add(gooX);
		const multN = BigNumber.from(multI).add(multX);

		// console.log(gooN.div(multN).toString(), gooI.div(multI).toString(), gooI.div(multI).toString());
		// console.log(gooN.div(multN).sub(gooI.div(multI)).toString(), gooI.div(multI).toString());
		// console.log(gooN.toString(), multN.toString(), gooI.toString(), multI.toString(), gooX.toString(), multX.toString(), params);
		// console.log(gobblersInMult.toString(), gobblersOutMult.toString());
		// console.log(formatEther(gooN), multN.toString(), formatEther(gooI), multI.toString(), formatEther(gooX), multX.toString());
		// console.log(BigNumber.from(gooI.mul(WAD)).div(multI).toString(), BigNumber.from(gooN.mul(WAD)).div(multN).toString());

		// console.log(gooN.div(multN).toString(), gooI.div(multI).toString(), gooI.div(multI).toString());

		const impact =
			fromAsset === 'Goo' && toAsset === 'Gobblers'
				? BigNumber.from(gooN.mul(WAD).div(multN).sub(gooI.mul(WAD).div(multI)))
						.mul(WAD)
						.div(gooN.mul(WAD).div(multN))
						.abs()
				: BigNumber.from(multI.mul(WAD).mul(WAD).div(gooI).sub(multN.mul(WAD).mul(WAD).div(gooN)))
						.mul(WAD)
						.div(multN.mul(WAD).mul(WAD).div(gooN))
						.abs();

		// console.log(impact.toString());

		// console.log(
		// 	(BigNumber.from(gooI.mul(WAD))
		// 		.div(multI)
		// 		.lt(BigNumber.from(gooN.mul(WAD)).div(multN))
		// 		? BigNumber.from(gooI.mul(WAD))
		// 				.div(multI)
		// 				.div(BigNumber.from(gooN.mul(WAD)).div(multN))
		// 				.sub(WAD)
		// 		: BigNumber.from(gooN.mul(WAD))
		// 				.div(multN)
		// 				.div(BigNumber.from(gooI.mul(WAD)).div(multI))
		// 				.sub(WAD)
		// 	)
		// 		.abs()
		// 		.toString()
		// );

		return impact;
	});
}
