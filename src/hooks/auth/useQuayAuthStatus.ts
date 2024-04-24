import { AuthenticationStatus } from '@rainbow-me/rainbowkit';
import { config } from '../../lib/core/config';
import { useQuery } from 'react-query';

export function useQuayAuthStatus() {
	return useQuery<AuthenticationStatus>(
		['quay', 'auth', 'status'],
		async () => {
			const authenticateRes = await fetch(`${config.quayBaseUrl}/authenticate`, {
				method: 'GET',
				mode: 'cors',
				credentials: 'include'
			}).catch(() => ({ status: 400 }));

			return authenticateRes.status === 200 ? 'authenticated' : 'unauthenticated';
		},
		{
			placeholderData: 'loading'
		}
	);
}
