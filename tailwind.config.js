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
			maxWidth: {
				'8xl': '1400px',
			},
			animation: {
				'banner-animation': 'power 20s linear infinite',
				'banner-circle': 'power2 20s linear infinite',
				'banner-animation-bigger': 'power2 35s linear infinite',
			},
			keyframes: {
				power: {
					to: { transform: 'rotate(1turn)' },
				},
				power2: {
					to: { transform: 'rotate(1turn)' },
				},
			},
		},
		fontFamily: fonts,
	},
	darkMode: 'class',
	plugins: [],
};
