/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				custom: ["Roboto Slab", "system-ui"],
			},
		},
	},
	plugins: [],
};
