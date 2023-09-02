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
				"--light-gray": "var(--light-gray)",
				"--gray-100": "var(--gray-100)",
				"--gray": "var(--gray)",
				"--red": "var(--red)",
				"--teal": "var(--teal)",
			},
		},
	},
	plugins: [],
};
