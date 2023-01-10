const colors = require('./tailwind/colors.config');
const typography = require('./tailwind/typography.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		colors: colors,
		extend: {
			fontSize: typography,
		},
	},
	plugins: [],
};
