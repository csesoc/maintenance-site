import { defineTextStyles } from "@pandacss/dev";

export const textStyles = defineTextStyles({
	display: {
		description: "Used to emphasise dynamic content",
		value: {
			fontSize: "3.583rem",
			fontVariationSettings: '"wght" 700',
			fontStyle: "normal",
			letterSpacing: 0,
			lineHeight: "4.5rem",
		},
	},
	h1: {
		description: "Page titles",
		value: {
			fontSize: "2.986rem",
			fontVariationSettings: '"wght" 800',
			fontStyle: "normal",
			letterSpacing: 0,
			lineHeight: "3.75rem",
		},
	},
	h2: {
		description: "Page titles",
		value: {
			fontSize: "2.488rem",
			fontVariationSettings: '"wght" 700',
			fontStyle: "normal",
			letterSpacing: 0,
			lineHeight: "3.125rem",
		},
	},
	h3: {
		value: {
			fontSize: "2.074rem",
			fontVariationSettings: '"wght" 700',
			fontStyle: "normal",
			letterSpacing: 0,
			lineHeight: "2.563rem",
		},
	},
	h4: {
		value: {
			fontSize: "1.728rem",
			fontVariationSettings: '"wght" 700',
			fontStyle: "normal",
			letterSpacing: 0,
			lineHeight: "2.188rem",
		},
	},
	h5: {
		value: {
			fontSize: "1.44rem",
			fontVariationSettings: '"wght" 700',
			fontStyle: "normal",
			letterSpacing: 0,
			lineHeight: "1.813rem",
		},
	},
	h6: {
		value: {
			fontSize: "1.2rem",
			fontVariationSettings: '"wght" 700',
			fontStyle: "normal",
			letterSpacing: 0,
			lineHeight: "1.5rem",
		},
	},
	body: {
		value: {
			fontSize: "1rem",
			fontVariationSettings: '"wght" 500',
			fontStyle: "normal",
			letterSpacing: 0,
			lineHeight: "1.25rem",
		},
	},
	caption: {
		value: {
			fontSize: ".833rem",
			fontVariationSettings: '"wght" 500',
			fontStyle: "normal",
			letterSpacing: 0,
			lineHeight: "1.063rem",
		},
	},
});
