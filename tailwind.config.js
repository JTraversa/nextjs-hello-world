// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		container: {
			center: true
		},
		extend: {
			colors: {
				goober: {
					semit: '#0000003d',
					yelloop: '#F3FF8D',
					goo: '#56299E',
					roo: '#F42E2E'
				},
				paradigm: {
					gray: '#828C96',
					green: '#56299E',
					toc: '#744ec2'
				},
				gray: colors.neutral
			},
			fontFamily: {
				inter: ["'Inter'", 'sans-serif'],
				paradigm: ['RiformaLL', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
				authors: ['NBInter', 'monospace']
			},
			screens: {
				tiny: { max: '639px' }
			}
		}
	},
	plugins: [
		require('daisyui'), //
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		require('@headlessui/tailwindcss')({ prefix: 'ui' })
	],
	daisyui: {
		themes: []
	}
};