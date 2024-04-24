import { ROOT_WITH_PROTOCOL } from './lib/constants/links';
import type { DefaultSeoProps as DefaultSeoPropsType } from 'next-seo';

export const BaseUrl = ROOT_WITH_PROTOCOL;

export const Title = '';
export const Summary = '';

export const DefaultSeoProps: DefaultSeoPropsType = {
	titleTemplate: `${Title} | %`,
	title: Title,
	description: Summary,
	canonical: BaseUrl,
	additionalMetaTags: [
		{ name: 'url', content: BaseUrl },
		{ name: 'identifier-URL', content: BaseUrl },
		{ name: 'shortlink', content: BaseUrl },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		{ name: 'robots', content: 'archive,follow,imageindex,index,odp,snippet,translate' },
		{ name: 'googlebot', content: 'index,follow' },
		{ name: 'author', content: `` },
		{ name: 'owner', content: `` },
		{ name: 'designer', content: `` },
		{ name: 'reply-to', content: '' },
		{ name: 'target', content: 'all' },
		{ name: 'audience', content: 'all' },
		{ name: 'coverage', content: 'Worldwide' },
		{ name: 'distribution', content: 'Global' },
		{ name: 'rating', content: 'safe for kids' },
		{ name: 'apple-mobile-web-app-capable', content: 'yes' },
		{ name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
		{ name: 'HandheldFriendly', content: 'True' },
		{ name: 'apple-mobile-web-app-title', content: Title },
		{ name: 'application-name', content: Title },
		{ name: 'revisit-after', content: '1 days' },

		{ property: 'og:email', content: '' },

		{
			name: 'twitter:title',
			content: Title
		},
		{
			name: 'twitter:description',
			content: Summary
		},
		{
			name: 'twitter:image',
			content: ''
		}
	],
	openGraph: {
		title: Title,
		url: BaseUrl,
		description: Summary,
		type: 'website',
		locale: 'en_US',
		site_name: Title,
		images: [
			{
				url: ''
			}
		],
		profile: {
			firstName: '',
			username: ''
		}
	},
	twitter: {
		handle: '',
		site: '',
		cardType: 'summary_large_image'
	}
};

export default DefaultSeoProps;
