import { isFloatingPointNumericCharacter } from '../../lib/utils';
import React, { FC, useCallback } from 'react';

interface Props {
	className?: string;
	disabled?: boolean;
	onChange?: (value: string) => void;
	value?: string;
}

const NumberInput: FC<Props> = ({ className = '', value: _value = '', onChange: _onChange = () => null, disabled }) => {
	const [value, setValue] = React.useState(_value);

	React.useEffect(() => {
		if (_value) {
			setValue(_value);
		}
	}, [_value]);

	const sanitize = (value: string) => {
		return value.split('').filter(isFloatingPointNumericCharacter).join('');
	};

	const onChange = useCallback(
		(_event: React.ChangeEvent<HTMLInputElement>) => {
			const event = _event.nativeEvent as InputEvent;
			if (event.isComposing) {
				return;
			}

			const sanitizedValue = sanitize(_event.currentTarget.value);

			setValue(sanitizedValue);

			_onChange(sanitizedValue);
		},
		[_onChange]
	);

	const onBlur = useCallback(() => {
		// If user types something like "2.", something that ends with a '.'
		// but no decimals, this removes the trailing '.'.
		if (value !== '') {
			setValue(parseFloat(value).toString());
			_onChange(value);
		}
	}, [_onChange, value]);

	return (
		<input
			className={`w-full rounded-lg border-none bg-gray-700 px-6 py-6 text-lg focus:outline-none focus:outline-lime-500 disabled:cursor-not-allowed ${className}`}
			disabled={disabled}
			onBlur={onBlur}
			onChange={onChange}
			type="text"
			value={value}
		/>
	);
};

export default NumberInput;
