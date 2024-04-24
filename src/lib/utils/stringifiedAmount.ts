import { parseEther } from '@ethersproject/units';

export function stringifiedAmount(amount: number) {
	return parseEther(amount.toString()).toString();
}
