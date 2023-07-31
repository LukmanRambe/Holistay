/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			colors: {
				"--primary": "var(--primary)",
				"--primary-dark": "var(--primary-dark)",
				"--pink": "var(--pink)",
				"--yellow": "var(--yellow)",
				"--gray": "var(--gray)",
				"--dark-gray": "var(--dark-gray)",
			},
		},
	},
	plugins: [],
};
