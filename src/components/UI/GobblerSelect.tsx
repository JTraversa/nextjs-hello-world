import { useUserGobblers } from '../../hooks/useUserGobblers';
import { config } from '../../lib/core/config';
import Image from 'next/image';
import React, { FC, useState } from 'react';
import { useAccount, useNetwork, useProvider } from 'wagmi';

interface Props {
	address?: string;
	onChange?: (value: number[]) => void;
	display?: boolean;
}

const GobblerSelect: FC<Props> = ({ onChange = () => null, address: _address, display }) => {
	const [selectedGobblers, setSelectedGobblers] = useState<number[]>([]);

	const { address } = useAccount();
	const { chain } = useNetwork();
	const provider = useProvider({ chainId: chain?.id || config.defaultChainId });

	const { data: vaultGobblers, isLoading: gobblersLoading } = useUserGobblers((_address as `0x${string}` | undefined) ?? address, provider);

	React.useEffect(() => {
		onChange(selectedGobblers);
	}, [onChange, selectedGobblers]);

	if (gobblersLoading) {
		return (
			<div className="max-h-96 overflow-y-auto">
				<div className="grid grid-cols-2 gap-4">
					{Array.from({ length: 6 }).map((_, i) => (
						<div key={i} className="aspect-square w-full animate-pulse rounded-lg bg-gray-700"></div>
					))}
				</div>
			</div>
		);
	}

	if ((!display && (!chain || chain.unsupported)) || !vaultGobblers || vaultGobblers.length === 0) {
		return (
			<div className="flex h-96 items-center justify-center rounded-xl border border-gray-600 bg-gray-800 p-6">
				<p className="text-lg text-gray-100">You aren't holding any Gobblers.</p>
			</div>
		);
	}

	return (
		<div className="max-h-96 overflow-y-auto">
			<div className="grid grid-cols-2 gap-4">
				{vaultGobblers
					.sort((a, b) => b.multiple - a.multiple)
					.map((gobbler) => (
						<button
							className="relative aspect-square w-full rounded-lg bg-gray-700"
							key={gobbler.id}
							onClick={() => {
								if (selectedGobblers.includes(gobbler.id)) {
									// Remove gobbler
									setSelectedGobblers([
										...selectedGobblers.slice(0, selectedGobblers.indexOf(gobbler.id)),
										...selectedGobblers.slice(selectedGobblers.indexOf(gobbler.id) + 1)
									]);
								} else {
									setSelectedGobblers([...selectedGobblers, gobbler.id]);
								}
							}}
						>
							<Image
								className="rounded-lg"
								src={`https://storage.googleapis.com/gobblers.artgobblers.com/gifs/${gobbler.idx}.gif`}
								alt={`Gobbler ${gobbler.idx}`}
								layout="fill"
							/>
							<p className="absolute bottom-2 right-2 rounded-xl bg-[#8EF42E] py-1 px-4 text-sm font-bold tabular-nums text-gray-900">
								{gobbler.multiple}x
							</p>
							<div
								className={`absolute inset-0 flex items-start justify-end rounded-lg border-2 p-4 text-[#8EF42E] transition-colors hover:bg-gray-900/50 ${
									selectedGobblers.includes(gobbler.id) ? 'border-[#8EF42E] bg-gray-900/50' : 'border-transparent'
								}`}
							>
								{selectedGobblers.includes(gobbler.id) && (
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
											clipRule="evenodd"
										/>
									</svg>
								)}
							</div>
						</button>
					))}
			</div>
		</div>
	);
};

export default GobblerSelect;
