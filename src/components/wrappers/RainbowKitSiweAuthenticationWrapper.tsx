import { RainbowKitAuthenticationProvider } from '@rainbow-me/rainbowkit';
import { useQuayAuthStatus } from '../../hooks/auth/useQuayAuthStatus';
import { siweAuthenticationAdapter } from '../../lib/core/siweAuthentication';
import React from 'react';

export interface RainbowKitSiweAuthenticationWrapperProps {
	children?: React.ReactNode;
}

const RainbowKitSiweAuthenticationWrapper: React.FC<RainbowKitSiweAuthenticationWrapperProps> = ({ children }) => {
	const { data: authenticationStatus = 'loading' } = useQuayAuthStatus();

	return (
		<RainbowKitAuthenticationProvider
			adapter={siweAuthenticationAdapter} //
			status={authenticationStatus}
		>
			{children}
		</RainbowKitAuthenticationProvider>
	);
};

export default RainbowKitSiweAuthenticationWrapper;
