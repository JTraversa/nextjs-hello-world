import { config } from '../lib/core/config';
import React from 'react';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	public render() {
		return (
			<Html lang="en" prefix="og: https://ogp.me/ns#">
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />

					<link
						href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
						rel="stylesheet"
					/>
					<link
						rel="stylesheet"
						href="https://cdn.jsdelivr.net/npm/katex@0.16.3/dist/katex.min.css"
						integrity="sha256-NJNVfEC6jfEt62wQMafLNT2eI6BaWONXbpkSEVAs3+8="
						crossOrigin="anonymous"
					/>
					{/* eslint-disable-next-line @next/next/no-sync-scripts */}
					<script
						src="https://cdn.jsdelivr.net/npm/katex@0.16.3/dist/katex.min.js"
						integrity="sha256-CTlFz7hy+P3zbjcw23BiURHAy05kNSD3DqvRcD7eSD8="
						crossOrigin="anonymous"
					></script>
				</Head>
				<body className={`${config.darkModeDefault ? 'dark' : ''} bg-gray-900 text-white`}>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}

	public static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}
}

export default MyDocument;
