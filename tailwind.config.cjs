/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	daisyui: {
		themes: [
			{
				aqua: {
					...require("daisyui/src/colors/themes")[
						"[data-theme=aqua]"
					],
					".bg-base-400": {
						"background-color": "#27457c",
					},
					".bg-base-500": {
						"background-color": "#13264b",
					},
					".text-base-400": {
						"background-color": "#27457c",
					},
					".text-base-500": {
						"background-color": "#13264b",
					},
				},
			},
			"light",
			"dark",
			"cupcake",
			"bumblebee",
			"emerald",
			"corporate",
			"synthwave",
			"retro",
			"cyberpunk",
			"valentine",
			"halloween",
			"garden",
			"forest",
			"lofi",
			"pastel",
			"fantasy",
			"wireframe",
			"black",
			"luxury",
			"dracula",
			"cmyk",
			"autumn",
			"business",
			"acid",
			"lemonade",
			"night",
			"coffee",
			"winter",
		],
	},
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
};
