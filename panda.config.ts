import { defineConfig } from "@pandacss/dev";
import { textStyles } from "./src/styles/typography";

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ["./src/**/*.{js,ts,svelte}"],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {
			textStyles,
			tokens: {
				fonts: {
					tt: { value: "var(--font-ttcp), sans-serif" },
				},
			},
		},
	},

	// The output directory for your css system
	outdir: "styled-system",

	globalCss: {
		"html, body": {
			bg: "neutral.900",
			height: "100%",
		},
		html: {
			fontFamily: "tt",
			color: "neutral.200",
			colorScheme: "dark",
		},
		a: {
			color: {
				_osLight: "#3a76f8ff",
				_hover: "#2953aeff",
				_osDark: "#5193f5ff",
			},
		},
		strong: {
			fontWeight: "unset",
			fontVariationSettings: '"wght" 700',
		},
		p: {
			textStyle: "body",
		},
		h1: {
			textStyle: "h1",
		},
		h2: {
			textStyle: "h2",
		},
		h3: {
			textStyle: "h3",
		},
		h4: {
			textStyle: "h4",
		},
		h5: {
			textStyle: "h5",
		},
		h6: {
			textStyle: "h6",
		},
	},
});
