import { createAuthenticationAdapter } from '@rainbow-me/rainbowkit';
import { SiweMessage } from 'siwe';
import { config } from './config';
import { queryClient } from './query';

export const siweAuthenticationAdapter = createAuthenticationAdapter({
	getNonce: async () => {
		const response = await fetch(`${config.quayBaseUrl}/nonce`, {
			method: 'GET',
			mode: 'cors',
			credentials: 'include'
		});

		await queryClient.invalidateQueries(['quay', 'auth', 'status']);

		return response.text();
	},

	createMessage: ({ nonce, address, chainId }) => {
		const { host: domain, origin } = window.location;

		return new SiweMessage({
			domain,
			uri: origin,
			address,
			statement: config.siweMessage,
			version: '1',
			chainId,
			nonce
		});
	},

	getMessageBody: ({ message }) => {
		return message.prepareMessage();
	},

	verify: async ({ message, signature }) => {
		const verifyRes = await fetch(`${config.quayBaseUrl}/verify`, {
			method: 'POST',
			mode: 'cors',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json' //
			},
			body: JSON.stringify({ message, signature })
		});

		await queryClient.invalidateQueries(['quay', 'auth', 'status']);

		return Boolean(verifyRes.ok);
	},

	signOut: async () => {
		// This effectively wipes the session.
		await fetch(`${config.quayBaseUrl}/nonce`, {
			method: 'GET',
			mode: 'cors',
			credentials: 'include'
		});

		await queryClient.invalidateQueries(['quay', 'auth', 'status']);
	}
});
