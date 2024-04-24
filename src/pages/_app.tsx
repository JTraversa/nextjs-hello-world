import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { Analytics } from '@vercel/analytics/react';
import RainbowKitDisclaimer from 'components/UI/RainbowKit/RainbowKitDisclaimer';
import DefaultLayout from 'layouts/DefaultLayout';
import { ROOT } from 'lib/constants';
import { queryClient } from 'lib/core/query';
import { chains, wagmiClient } from 'lib/core/wallet';
import { ExtendedNextPage } from 'lib/types/ExtendedNextPage';
import type { NextPage } from 'next';
import PlausibleProvider from 'next-plausible';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { gooberDarkTheme } from 'styles/rainbowkit';
import { WagmiConfig } from 'wagmi';
import DefaultSeoProps from '../DefaultSeoProps';
import { UserSettingsProvider } from 'lib/UserSettingsContext';
import RainbowKitConstantDefautAvatar from 'components/UI/RainbowKit/RainbowKitConstantDefautAvatar';

import '@rainbow-me/rainbowkit/styles.css';
import 'styles/_App.css';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
	const ExtendedPage = Component as ExtendedNextPage<any, any>;
	const Layout = ExtendedPage.Layout || DefaultLayout;

	return (
		<React.StrictMode>
			<QueryClientProvider client={queryClient}>
				<WagmiConfig client={wagmiClient}>
					<RainbowKitProvider
						chains={chains} //
						theme={gooberDarkTheme()}
						showRecentTransactions={true}
						appInfo={{
							disclaimer: RainbowKitDisclaimer
						}}
						avatar={RainbowKitConstantDefautAvatar}
					>
						<PlausibleProvider domain={ROOT}>
							<UserSettingsProvider>
								<>
									<Head>
										<meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
										<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
										<meta httpEquiv="Expires" content="1y" />
										<meta httpEquiv="Pragma" content="1y" />
										<meta httpEquiv="Cache-Control" content="1y" />

										<link rel="shortcut icon" href="/favicon.ico" />
									</Head>
									<DefaultSeo {...DefaultSeoProps} />
								</>

								<>
									<Layout>
										<ExtendedPage {...pageProps} />
									</Layout>
								</>
							</UserSettingsProvider>
						</PlausibleProvider>

						<ReactQueryDevtools />
						<Analytics />
					</RainbowKitProvider>
				</WagmiConfig>
			</QueryClientProvider>
		</React.StrictMode>
	);
};

export default App;
export { reportWebVitals } from 'next-axiom';
