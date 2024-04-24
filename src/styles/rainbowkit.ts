import { darkTheme, lightTheme, Theme } from '@rainbow-me/rainbowkit';
import merge from 'lodash.merge';

export const systemFontStack =
	'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

export const gooberThemeShared = {
	fonts: {
		body: `'Inter', ${systemFontStack}`
	},
	colors: {
		accentColor: '#8EF42E',
		accentColorForeground: '#404040',
		connectButtonBackgroundError: '#F42E2E',
		error: '#F42E2E'
	}
} as Theme;

export const gooberDarkTheme = () => merge(darkTheme({}), gooberThemeShared);
export const gooberLightTheme = () => merge(lightTheme({}), gooberThemeShared);
