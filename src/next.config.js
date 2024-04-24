// @ts-ignore
const withPlugins = require('next-compose-plugins');
const { withPlausibleProxy: plausiblePlugin } = require('next-plausible');
const withBundleAnalyzer = require('@next/bundle-analyzer');
const { withAxiom: axiomPlugin } = require('next-axiom');

const config = {
	reactStrictMode: true,
	images: {
		domains: [
			//
			'storage.googleapis.com',
			'i.seadn.io'
		]
	},
	async rewrites() {
		return [
			{
				source: '/index',
				destination: '/'
			},
			{
				source: '/api/gobblers/:path*',
				destination: 'https://nfts.artgobblers.com/api/gobblers/:path*'
			}
		];
	},
	async redirects() {
		return [];
	},
	poweredByHeader: false
};

const bundleAnalyzerPlugin = withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' });

module.exports = withPlugins([plausiblePlugin, axiomPlugin, bundleAnalyzerPlugin], config);
