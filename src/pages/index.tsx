/* eslint-disable @next/next/no-img-element */
import HowItWorks from 'components/UI/HowItWorks';
import PoolStats from 'components/UI/PoolStats';
import TopStakers from 'components/UI/TopStakers';
import { generateSitemap } from 'lib/core/sitemap';
import { ExtendedNextPage } from 'lib/types/ExtendedNextPage';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import path from 'path';
import React from 'react';

const DepositForm = dynamic(() => import('components/UI/DepositForm'), {
	ssr: false
});

const WithdrawForm = dynamic(() => import('components/UI/WithdrawForm'), {
	ssr: false
});

const SwapForm = dynamic(() => import('components/UI/SwapForm'), {
	ssr: false
});

const IndexPage: ExtendedNextPage = () => {
	const [selected, setSelected] = React.useState('SWAP');
	return (
		<>
			<Head>
				<title>Goober</title>
			</Head>
			<div className="mx-auto max-w-screen-lg px-4">
				<div className="flex flex-col-reverse lg:flex-row lg:gap-16">
					<div className="flex-1 space-y-8 pt-4">
						<PoolStats />
						<HowItWorks />
						<TopStakers />
					</div>
					<div className="flex-1">
						<div className="flex">
							<button
								className={`min-w-0 flex-1 border-b-2 py-4 transition-colors hover:bg-gray-800 ${
									selected === 'DEPOSIT'
										? 'border-[#8EF42E] text-white'
										: 'border-gray-600 text-gray-400 hover:border-gray-500 hover:text-white'
								}`}
								onClick={() => setSelected('DEPOSIT')}
							>
								Deposit
							</button>
							<button
								className={`min-w-0 flex-1 border-b-2 py-4 transition-colors hover:bg-gray-800 ${
									selected === 'WITHDRAW'
										? 'border-[#8EF42E] text-white'
										: 'border-gray-600 text-gray-400 hover:border-gray-500 hover:text-white'
								}`}
								onClick={() => setSelected('WITHDRAW')}
							>
								Withdraw
							</button>
							<button
								className={`min-w-0 flex-1 border-b-2 py-4 transition-colors hover:bg-gray-800 ${
									selected === 'SWAP'
										? 'border-[#8EF42E] text-white'
										: 'border-gray-600 text-gray-400 hover:border-gray-500 hover:text-white'
								}`}
								onClick={() => setSelected('SWAP')}
							>
								Swap
							</button>
						</div>
						{selected === 'DEPOSIT' && <DepositForm />}
						{selected === 'WITHDRAW' && <WithdrawForm />}
						{selected === 'SWAP' && <SwapForm />}
					</div>
				</div>
			</div>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const directory = path.join(process.cwd(), 'src');

	await generateSitemap(directory);

	return { props: {} };
};

export default IndexPage;
