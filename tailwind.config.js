const colors = require('./tailwind/colors.config');
const typography = require('./tailwind/typography.config');
const fonts = require('./tailwind/fonts.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		colors: colors,
		extend: {
			fontSize: typography,
		},
		fontFamily: fonts,
	},
	plugins: [],
};
