import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

const space = {
	none: 0,
	small: "4px",
	medium: "8px",
	large: "16px",
	// etc.
};

const responsiveProperties = defineProperties({
	conditions: {
		xs: {},
		sm: { "@media": "screen and (min-width: 768px)" },
		md: { "@media": "screen and (min-width: 1024px)" },
	},
	defaultCondition: "xs",
	properties: {
		m: {
			"1": {
				margin: 1,
			},
			"2": {
				margin: 2,
			},
		},
		mt: {
			1: {},
		},
	},
});

export const cls = createSprinkles(responsiveProperties);
