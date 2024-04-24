import { Popover } from '@headlessui/react';
import { UserSettingsContext } from '../../lib/UserSettingsContext';
import { isFloatingPointNumericCharacter } from '../../lib/utils';
import React, { FC, useCallback, useContext, useEffect } from 'react';

const SlippageDropdown: FC = () => {
	const { customSlippage, slippage, updateSlippage } = useContext(UserSettingsContext);

	const [value, setValue] = React.useState('');

	const sanitize = (value: string) => {
		return value.split('').filter(isFloatingPointNumericCharacter).join('');
	};

	const onChange = (_event: React.ChangeEvent<HTMLInputElement>) => {
		const event = _event.nativeEvent as InputEvent;
		if (event.isComposing) {
			return;
		}

		const sanitizedValue = sanitize(_event.currentTarget.value);

		setValue(sanitizedValue);
	};

	const onBlur = useCallback(() => {
		// If user types something like "2.", something that ends with a '.'
		// but no decimals, this removes the trailing '.'.
		if (value !== '') {
			setValue(parseFloat(value).toString());
			updateSlippage(parseFloat(value) * 10, true);
		}
	}, [updateSlippage, value]);

	useEffect(() => {
		if (!customSlippage) {
			setValue('');
		}
	}, [customSlippage]);

	return (
		<Popover className="relative">
			<Popover.Button className="block rounded-full p-2 text-gray-300 transition-colors hover:bg-gray-600">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
					<path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
				</svg>
			</Popover.Button>
			<Popover.Panel className="absolute right-0 z-20 pt-1">
				<div className="overflow-hidden rounded-lg border border-gray-700 bg-gray-800 p-4 shadow-lg">
					<p className="mb-4 text-sm font-bold">Slippage Tolerance</p>
					<div className="flex items-center gap-4">
						<button
							className={`rounded-lg py-2 px-4 font-bold tabular-nums transition-colors ${
								!customSlippage && slippage === 3 ? 'bg-[#8EF42E] text-gray-900' : 'bg-gray-700 hover:bg-gray-600'
							}`}
							onClick={() => updateSlippage(3, false)}
						>
							0.5%
						</button>
						<button
							className={`rounded-lg py-2 px-4 font-bold tabular-nums transition-colors ${
								!customSlippage && slippage === 7 ? 'bg-[#8EF42E] text-gray-900' : 'bg-gray-700 hover:bg-gray-600'
							}`}
							onClick={() => updateSlippage(7, false)}
						>
							0.7%
						</button>
						<button
							className={`rounded-lg py-2 px-4 font-bold tabular-nums transition-colors ${
								!customSlippage && slippage === 10 ? 'bg-[#8EF42E] text-gray-900' : 'bg-gray-700 hover:bg-gray-600'
							}`}
							onClick={() => updateSlippage(10, false)}
						>
							1.0%
						</button>
						<div className="relative">
							<input
								className={`w-28 rounded-lg border border-gray-700 bg-gray-800 py-2 px-4 pr-9 text-right tabular-nums  focus:outline-none focus:outline-lime-500 ${
									customSlippage && 'outline outline-2 outline-offset-2 outline-lime-500'
								}`}
								type="text"
								placeholder="1.5"
								value={value}
								onChange={onChange}
								onBlur={onBlur}
							/>
							<span className="absolute right-0 top-0 bottom-0 flex items-center pr-4 text-gray-500">%</span>
						</div>
					</div>
				</div>
			</Popover.Panel>
		</Popover>
	);
};

export default SlippageDropdown;
