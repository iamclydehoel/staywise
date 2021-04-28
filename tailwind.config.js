const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
	purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		colors: {
			transparent: 'transparent',
			black: '#000000',
			white: '#ffffff',
			sky: '#a5e1ed',
			grass: '#85ae26',
			grey: '#817e7f',
			green: '#4bbc3d',
			'green-dark': '#348e3a',
			indigo: '#475bb3',
			'indigo-dark': '#2e45a2',
			'indigo-darker': '#2a3b87',
			orange: '#fab329',
			red: '#eb2129',
			teal: '#61c9bc',
		},
		boxShadow: {
			DEFAULT: '0 0.25em 0 0 rgba(0, 0, 0, 0.5)',
			lg: '0 0.375em 0 0 rgba(0, 0, 0, 0.375)',
			inner: 'inset 0 -0.175em 0 0 rgba(255, 255, 255, 0.25), inset 0 0.175em 0 0 rgba(0, 0, 0, 0.25)',
			'inner-lg': 'inset 0 -0.25em 0 0 rgba(255, 255, 255, 0.375)',
		},
		dropShadow: {
			DEFAULT: '0 0.125em 0 rgba(0, 0, 0, 0.25)',
			lg: '0 0.25em 0 rgba(0, 0, 0, 0.25)',
		},
		extend: {
			borderWidth: {
				'3': '3px',
				'6': '6px',
			},
			cursor: {
				grab: 'grab',
				grabbing: 'grabbing',
			},
			fontFamily: {
				sans: ['Inter var', ...fontFamily.sans],
				rounded: ['Jellee', ...fontFamily.sans],
			},
			fontSize: {
				'8xl': ['8.5rem', '1'],
				'9xl': ['10rem', '1'],
			},
			minHeight: {
				20: '5rem',
				40: '10rem',
			},
			spacing: {
				'17': '4.25rem',
				'18': '4.5rem',
				'22': '5.5rem',
				'26': '6.5rem',
			},
			zIndex: {
				'999': '999',
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: ['active', 'group-focus'],
			boxShadow: ['focus', 'focus-within'],
			translate: ['focus', 'focus-within'],
		},
	},
	plugins: [],
}
