import React, { createContext, FC, useState } from 'react';

interface UserSettings {
	slippage: number;
	customSlippage: boolean;
	updateSlippage: (value: number, custom: boolean) => void;
}

export const UserSettingsContext = createContext<UserSettings>({
	slippage: 5,
	customSlippage: false,
	updateSlippage: () => null
});

export const UserSettingsProvider: FC = ({ children }) => {
	const [slippage, setSlippage] = useState(3);
	const [customSlippage, setCustomSlippage] = useState(false);

	const updateSlippage = (value: number, custom: boolean) => {
		setCustomSlippage(custom);
		setSlippage(value);
	};

	return <UserSettingsContext.Provider value={{ customSlippage, slippage, updateSlippage }}>{children}</UserSettingsContext.Provider>;
};
