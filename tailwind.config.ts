import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	},
  	colors: {
  		primary: '#235697',
  		black: '#000',
  		disabled: '#E5E5E5',
  		secondary: '#88A9C9',
  		grey: {
  			'100': '#7D7C93',
  			'200': '#a1a1a1',
  			'300': '#373F46'
  		},
  		white: '#FFF',
  		gradientblue: {
  			'100': 'rgb(21,68,126)',
  			'200': 'rgb(37,86,147)',
  			'300': 'rgb(38,88,149)'
  		},
  		darkgrey: '#373F46',
  		ashwhite: '#EFEFEF',
  		blue: '#4681AA',
  		lightgrey: '#F3F3F3',
  		listtitle: '#3B3D4B',
  		orange: {
  			'500': '#ff6600',
  			'600': '#cc5200'
  		},
  		appbackground: '#7c3ecd',
  		heading: '#f8c63b',
  		darkbrown: '#401903',
  		lightbrown: '#5D2A0E',
  		darkpink: '#EC2D6F',
  		lightpink: '#ee4480',
  		simplewhite: '#f2f2f2',
  		whitegrey: '#DFDFDF',
  		parrot: '#00ff00',
  		lightred: '#ff3333',
  		green: '#008000',
  		blackWithOpacity: 'rgba(0,0,0,0.3)',
  		correct: 'rgba(0, 179, 0, 0.7)',
  		wrong: 'rgba(255, 26, 26, 0.8)',
  		red: '#ff0000',
  		darkishpink: '#ff3355',
  		yellow: '#FFC107',
  		pink: '#FF4081',
  		lightyellow: '#f9c823'
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
