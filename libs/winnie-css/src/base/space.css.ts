import {
	assignVars,
	createGlobalThemeContract,
	globalStyle,
} from "@vanilla-extract/css";

const DEFAULT_SCALE = 0.9;
const SCALE_VAR = "--w-scale";

export const space = createGlobalThemeContract({
	space_px_1: "w-space-px-1",
	space_px_2: "w-space-px-2",
	space_px_3: "w-space-px-3",
	space_px_4: "w-space-px-4",
	space_px_5: "w-space-px-5",
	space_px_6: "w-space-px-6",
	space_px_7: "w-space-px-7",
	space_px_8: "w-space-px-8",
	space_px_9: "w-space-px-9",

	space_em_1: "w-space-em-1",
	space_em_2: "w-space-em-2",
	space_em_3: "w-space-em-3",
	space_em_4: "w-space-em-4",
	space_em_5: "w-space-em-5",
	space_em_6: "w-space-em-6",
	space_em_7: "w-space-em-7",
	space_em_8: "w-space-em-8",
	space_em_9: "w-space-em-9",
});

globalStyle(":root", {
	"@layer": {
		base: {
			vars: assignVars(space, {
				space_px_1: `calc(4px * var(${SCALE_VAR}, ${DEFAULT_SCALE}))`,
				space_px_2: `calc(8px * var(${SCALE_VAR}, ${DEFAULT_SCALE}))`,
				space_px_3: `calc(12px * var(${SCALE_VAR}, ${DEFAULT_SCALE}))`,
				space_px_4: `calc(16px * var(${SCALE_VAR}, ${DEFAULT_SCALE}))`,
				space_px_5: `calc(24px * var(${SCALE_VAR}, ${DEFAULT_SCALE}))`,
				space_px_6: `calc(32px * var(${SCALE_VAR}, ${DEFAULT_SCALE}))`,
				space_px_7: `calc(40px * var(${SCALE_VAR}, ${DEFAULT_SCALE}))`,
				space_px_8: `calc(48px * var(${SCALE_VAR}, ${DEFAULT_SCALE}))`,
				space_px_9: `calc(64px * var(${SCALE_VAR}, ${DEFAULT_SCALE}))`,

				space_em_1: `calc(0.25em * var(${SCALE_VAR}, ${DEFAULT_SCALE}))`,
				space_em_2: `calc(0.5em * var(${SCALE_VAR}, ${DEFAULT_SCALE}))`,
				space_em_3: `calc(0.75em * var(${SCALE_VAR}, ${DEFAULT_SCALE}))`,
				space_em_4: `calc(1em * var(${SCALE_VAR}, ${DEFAULT_SCALE}))`,
				space_em_5: `calc(1.25em * var(${SCALE_VAR}, ${DEFAULT_SCALE}))`,
				space_em_6: `calc(1.5em * var(${SCALE_VAR}, ${DEFAULT_SCALE}))`,
				space_em_7: `calc(1.75em * var(${SCALE_VAR}, ${DEFAULT_SCALE}))`,
				space_em_8: `calc(2em * var(${SCALE_VAR}, ${DEFAULT_SCALE}))`,
				space_em_9: `calc(2.25em * var(${SCALE_VAR}, ${DEFAULT_SCALE}))`,
			}),
		},
	},
});
