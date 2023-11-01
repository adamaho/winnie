import { globalStyle } from "@vanilla-extract/css";

globalStyle("*, *::after, *::before", {
	"@layer": {
		reset: {
			boxSizing: "border-box",
		},
	},
});

globalStyle("body", {
	"@layer": {
		reset: {
			margin: 0,
			padding: 0,
			WebkitFontSmoothing: "antialiased",
			MozOsxFontSmoothing: "grayscale",
		},
	},
});

globalStyle("button, [type=button], [type=reset], [type=submit]", {
	"@layer": {
		reset: {
			appearance: "none",
			backgroundColor: "transparent",
			border: "none",
			fontSize: "inherit",
			fontFamily: "inherit",
			lineHeight: "inherit",
			letterSpacing: "inherit",
			outline: "none",
			color: "inherit",
			padding: 0,
			margin: 0,
			textAlign: "initial",
		},
	},
});

globalStyle("a", {
	"@layer": {
		reset: {
			textDecoration: "none",
		},
	},
});

globalStyle("h1, h2, h3, h4, h5, h6", {
	"@layer": {
		reset: {
			margin: 0,
		},
	},
});

globalStyle("p", {
	"@layer": {
		reset: {
			margin: 0,
		},
	},
});

globalStyle("input", {
	"@layer": {
		reset: {
			appearance: "none",
			backgroundColor: "transparent",
			border: "none",
			color: "inherit",
			fontFamily: "inherit",
			margin: 0,
			outline: "none",
			padding: 0,
		},
	},
});
