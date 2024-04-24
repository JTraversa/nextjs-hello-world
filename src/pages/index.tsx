/* eslint-disable @next/next/no-img-element */
import { generateSitemap } from '../lib/core/sitemap';
import { ExtendedNextPage } from '../lib/types/ExtendedNextPage';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import path from 'path';
import React from 'react';

const IndexPage: ExtendedNextPage = () => {
	return (
		<>
			<Head>
				<title>Warlock</title>
			</Head>
			<div className="mx-auto">
				<div className="mx-auto w-2/3">
					<picture>
						<img src="/warlock-full.png" alt="" />
					</picture>
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
