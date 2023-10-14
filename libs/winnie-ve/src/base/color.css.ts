import {
	blackP3A,
	blueP3,
	blueP3A,
	grayP3,
	grayP3A,
	greenP3,
	greenP3A,
	mauveP3,
	mauveP3A,
	orangeP3,
	orangeP3A,
	pinkP3,
	pinkP3A,
	purpleP3,
	purpleP3A,
	redP3,
	redP3A,
	whiteP3A,
	yellowP3,
	yellowP3A,
} from "@radix-ui/colors";

import {
	assignVars,
	createGlobalThemeContract,
	globalStyle,
	style,
} from "@vanilla-extract/css";

const colors = createGlobalThemeContract({
	/* grey */
	grey_1: "w-color-grey-1",
	grey_2: "w-color-grey-2",
	grey_3: "w-color-grey-3",
	grey_4: "w-color-grey-4",
	grey_5: "w-color-grey-5",
	grey_6: "w-color-grey-6",
	grey_7: "w-color-grey-7",
	grey_8: "w-color-grey-8",
	grey_9: "w-color-grey-9",
	grey_10: "w-color-grey-10",
	grey_11: "w-color-grey-11",
	grey_12: "w-color-grey-12",
	grey_a1: "w-color-grey-a1",
	grey_a2: "w-color-grey-a2",
	grey_a3: "w-color-grey-a3",
	grey_a4: "w-color-grey-a4",
	grey_a5: "w-color-grey-a5",
	grey_a6: "w-color-grey-a6",
	grey_a7: "w-color-grey-a7",
	grey_a8: "w-color-grey-a8",
	grey_a9: "w-color-grey-a9",
	grey_a10: "w-color-grey-a10",
	grey_a11: "w-color-grey-a11",
	grey_a12: "w-color-grey-a12",

	/* mauve */
	mauve_1: "w-color-mauve-1",
	mauve_2: "w-color-mauve-2",
	mauve_3: "w-color-mauve-3",
	mauve_4: "w-color-mauve-4",
	mauve_5: "w-color-mauve-5",
	mauve_6: "w-color-mauve-6",
	mauve_7: "w-color-mauve-7",
	mauve_8: "w-color-mauve-8",
	mauve_9: "w-color-mauve-9",
	mauve_10: "w-color-mauve-10",
	mauve_11: "w-color-mauve-11",
	mauve_12: "w-color-mauve-12",
	mauve_a1: "w-color-mauve-a1",
	mauve_a2: "w-color-mauve-a2",
	mauve_a3: "w-color-mauve-a3",
	mauve_a4: "w-color-mauve-a4",
	mauve_a5: "w-color-mauve-a5",
	mauve_a6: "w-color-mauve-a6",
	mauve_a7: "w-color-mauve-a7",
	mauve_a8: "w-color-mauve-a8",
	mauve_a9: "w-color-mauve-a9",
	mauve_a10: "w-color-mauve-a10",
	mauve_a11: "w-color-mauve-a11",
	mauve_a12: "w-color-mauve-a12",

	/* red */
	red_1: "w-color-red-1",
	red_2: "w-color-red-2",
	red_3: "w-color-red-3",
	red_4: "w-color-red-4",
	red_5: "w-color-red-5",
	red_6: "w-color-red-6",
	red_7: "w-color-red-7",
	red_8: "w-color-red-8",
	red_9: "w-color-red-9",
	red_10: "w-color-red-10",
	red_11: "w-color-red-11",
	red_12: "w-color-red-12",
	red_a1: "w-color-red-a1",
	red_a2: "w-color-red-a2",
	red_a3: "w-color-red-a3",
	red_a4: "w-color-red-a4",
	red_a5: "w-color-red-a5",
	red_a6: "w-color-red-a6",
	red_a7: "w-color-red-a7",
	red_a8: "w-color-red-a8",
	red_a9: "w-color-red-a9",
	red_a10: "w-color-red-a10",
	red_a11: "w-color-red-a11",
	red_a12: "w-color-red-a12",

	/* orange */
	orange_1: "w-color-orange-1",
	orange_2: "w-color-orange-2",
	orange_3: "w-color-orange-3",
	orange_4: "w-color-orange-4",
	orange_5: "w-color-orange-5",
	orange_6: "w-color-orange-6",
	orange_7: "w-color-orange-7",
	orange_8: "w-color-orange-8",
	orange_9: "w-color-orange-9",
	orange_10: "w-color-orange-10",
	orange_11: "w-color-orange-11",
	orange_12: "w-color-orange-12",
	orange_a1: "w-color-orange-a1",
	orange_a2: "w-color-orange-a2",
	orange_a3: "w-color-orange-a3",
	orange_a4: "w-color-orange-a4",
	orange_a5: "w-color-orange-a5",
	orange_a6: "w-color-orange-a6",
	orange_a7: "w-color-orange-a7",
	orange_a8: "w-color-orange-a8",
	orange_a9: "w-color-orange-a9",
	orange_a10: "w-color-orange-a10",
	orange_a11: "w-color-orange-a11",
	orange_a12: "w-color-orange-a12",

	/* yellow */
	yellow_1: "w-color-yellow-1",
	yellow_2: "w-color-yellow-2",
	yellow_3: "w-color-yellow-3",
	yellow_4: "w-color-yellow-4",
	yellow_5: "w-color-yellow-5",
	yellow_6: "w-color-yellow-6",
	yellow_7: "w-color-yellow-7",
	yellow_8: "w-color-yellow-8",
	yellow_9: "w-color-yellow-9",
	yellow_10: "w-color-yellow-10",
	yellow_11: "w-color-yellow-11",
	yellow_12: "w-color-yellow-12",
	yellow_a1: "w-color-yellow-a1",
	yellow_a2: "w-color-yellow-a2",
	yellow_a3: "w-color-yellow-a3",
	yellow_a4: "w-color-yellow-a4",
	yellow_a5: "w-color-yellow-a5",
	yellow_a6: "w-color-yellow-a6",
	yellow_a7: "w-color-yellow-a7",
	yellow_a8: "w-color-yellow-a8",
	yellow_a9: "w-color-yellow-a9",
	yellow_a10: "w-color-yellow-a10",
	yellow_a11: "w-color-yellow-a11",
	yellow_a12: "w-color-yellow-a12",

	/* green */
	green_1: "w-color-green-1",
	green_2: "w-color-green-2",
	green_3: "w-color-green-3",
	green_4: "w-color-green-4",
	green_5: "w-color-green-5",
	green_6: "w-color-green-6",
	green_7: "w-color-green-7",
	green_8: "w-color-green-8",
	green_9: "w-color-green-9",
	green_10: "w-color-green-10",
	green_11: "w-color-green-11",
	green_12: "w-color-green-12",
	green_a1: "w-color-green-a1",
	green_a2: "w-color-green-a2",
	green_a3: "w-color-green-a3",
	green_a4: "w-color-green-a4",
	green_a5: "w-color-green-a5",
	green_a6: "w-color-green-a6",
	green_a7: "w-color-green-a7",
	green_a8: "w-color-green-a8",
	green_a9: "w-color-green-a9",
	green_a10: "w-color-green-a10",
	green_a11: "w-color-green-a11",
	green_a12: "w-color-green-a12",

	/* blue */
	blue_1: "w-color-blue-1",
	blue_2: "w-color-blue-2",
	blue_3: "w-color-blue-3",
	blue_4: "w-color-blue-4",
	blue_5: "w-color-blue-5",
	blue_6: "w-color-blue-6",
	blue_7: "w-color-blue-7",
	blue_8: "w-color-blue-8",
	blue_9: "w-color-blue-9",
	blue_10: "w-color-blue-10",
	blue_11: "w-color-blue-11",
	blue_12: "w-color-blue-12",
	blue_a1: "w-color-blue-a1",
	blue_a2: "w-color-blue-a2",
	blue_a3: "w-color-blue-a3",
	blue_a4: "w-color-blue-a4",
	blue_a5: "w-color-blue-a5",
	blue_a6: "w-color-blue-a6",
	blue_a7: "w-color-blue-a7",
	blue_a8: "w-color-blue-a8",
	blue_a9: "w-color-blue-a9",
	blue_a10: "w-color-blue-a10",
	blue_a11: "w-color-blue-a11",
	blue_a12: "w-color-blue-a12",

	/* purple */
	purple_1: "w-color-purple-1",
	purple_2: "w-color-purple-2",
	purple_3: "w-color-purple-3",
	purple_4: "w-color-purple-4",
	purple_5: "w-color-purple-5",
	purple_6: "w-color-purple-6",
	purple_7: "w-color-purple-7",
	purple_8: "w-color-purple-8",
	purple_9: "w-color-purple-9",
	purple_10: "w-color-purple-10",
	purple_11: "w-color-purple-11",
	purple_12: "w-color-purple-12",
	purple_a1: "w-color-purple-a1",
	purple_a2: "w-color-purple-a2",
	purple_a3: "w-color-purple-a3",
	purple_a4: "w-color-purple-a4",
	purple_a5: "w-color-purple-a5",
	purple_a6: "w-color-purple-a6",
	purple_a7: "w-color-purple-a7",
	purple_a8: "w-color-purple-a8",
	purple_a9: "w-color-purple-a9",
	purple_a10: "w-color-purple-a10",
	purple_a11: "w-color-purple-a11",
	purple_a12: "w-color-purple-a12",

	/* pink */
	pink_1: "w-color-pink-1",
	pink_2: "w-color-pink-2",
	pink_3: "w-color-pink-3",
	pink_4: "w-color-pink-4",
	pink_5: "w-color-pink-5",
	pink_6: "w-color-pink-6",
	pink_7: "w-color-pink-7",
	pink_8: "w-color-pink-8",
	pink_9: "w-color-pink-9",
	pink_10: "w-color-pink-10",
	pink_11: "w-color-pink-11",
	pink_12: "w-color-pink-12",
	pink_a1: "w-color-pink-a1",
	pink_a2: "w-color-pink-a2",
	pink_a3: "w-color-pink-a3",
	pink_a4: "w-color-pink-a4",
	pink_a5: "w-color-pink-a5",
	pink_a6: "w-color-pink-a6",
	pink_a7: "w-color-pink-a7",
	pink_a8: "w-color-pink-a8",
	pink_a9: "w-color-pink-a9",
	pink_a10: "w-color-pink-a10",
	pink_a11: "w-color-pink-a11",
	pink_a12: "w-color-pink-a12",

	/* black */
	black_a1: "w-color-black-a1",
	black_a2: "w-color-black-a2",
	black_a3: "w-color-black-a3",
	black_a4: "w-color-black-a4",
	black_a5: "w-color-black-a5",
	black_a6: "w-color-black-a6",
	black_a7: "w-color-black-a7",
	black_a8: "w-color-black-a8",
	black_a9: "w-color-black-a9",
	black_a10: "w-color-black-a10",
	black_a11: "w-color-black-a11",
	black_a12: "w-color-black-a12",

	/* white */
	white_a1: "w-color-white-a1",
	white_a2: "w-color-white-a2",
	white_a3: "w-color-white-a3",
	white_a4: "w-color-white-a4",
	white_a5: "w-color-white-a5",
	white_a6: "w-color-white-a6",
	white_a7: "w-color-white-a7",
	white_a8: "w-color-white-a8",
	white_a9: "w-color-white-a9",
	white_a10: "w-color-white-a10",
	white_a11: "w-color-white-a11",
	white_a12: "w-color-white-a12",
});

globalStyle("root, .light, .light-theme", {
	"@media": {
		"(dynamic-range: high)": {
			"@supports": {
				"(color: color(display-p3 1 1 1))": {
					vars: assignVars(colors, {
						grey_1: grayP3.gray1,
						grey_2: grayP3.gray2,
						grey_3: grayP3.gray3,
						grey_4: grayP3.gray4,
						grey_5: grayP3.gray5,
						grey_6: grayP3.gray6,
						grey_7: grayP3.gray7,
						grey_8: grayP3.gray8,
						grey_9: grayP3.gray9,
						grey_10: grayP3.gray10,
						grey_11: grayP3.gray11,
						grey_12: grayP3.gray12,
						grey_a1: grayP3A.grayA1,
						grey_a2: grayP3A.grayA2,
						grey_a3: grayP3A.grayA3,
						grey_a4: grayP3A.grayA4,
						grey_a5: grayP3A.grayA5,
						grey_a6: grayP3A.grayA6,
						grey_a7: grayP3A.grayA7,
						grey_a8: grayP3A.grayA8,
						grey_a9: grayP3A.grayA9,
						grey_a10: grayP3A.grayA10,
						grey_a11: grayP3A.grayA11,
						grey_a12: grayP3A.grayA12,

						mauve_1: mauveP3.mauve1,
						mauve_2: mauveP3.mauve2,
						mauve_3: mauveP3.mauve3,
						mauve_4: mauveP3.mauve4,
						mauve_5: mauveP3.mauve5,
						mauve_6: mauveP3.mauve6,
						mauve_7: mauveP3.mauve7,
						mauve_8: mauveP3.mauve8,
						mauve_9: mauveP3.mauve9,
						mauve_10: mauveP3.mauve10,
						mauve_11: mauveP3.mauve11,
						mauve_12: mauveP3.mauve12,
						mauve_a1: mauveP3A.mauveA1,
						mauve_a2: mauveP3A.mauveA2,
						mauve_a3: mauveP3A.mauveA3,
						mauve_a4: mauveP3A.mauveA4,
						mauve_a5: mauveP3A.mauveA5,
						mauve_a6: mauveP3A.mauveA6,
						mauve_a7: mauveP3A.mauveA7,
						mauve_a8: mauveP3A.mauveA8,
						mauve_a9: mauveP3A.mauveA9,
						mauve_a10: mauveP3A.mauveA10,
						mauve_a11: mauveP3A.mauveA11,
						mauve_a12: mauveP3A.mauveA12,

						red_1: redP3.red1,
						red_2: redP3.red2,
						red_3: redP3.red3,
						red_4: redP3.red4,
						red_5: redP3.red5,
						red_6: redP3.red6,
						red_7: redP3.red7,
						red_8: redP3.red8,
						red_9: redP3.red9,
						red_10: redP3.red10,
						red_11: redP3.red11,
						red_12: redP3.red12,
						red_a1: redP3A.redA1,
						red_a2: redP3A.redA2,
						red_a3: redP3A.redA3,
						red_a4: redP3A.redA4,
						red_a5: redP3A.redA5,
						red_a6: redP3A.redA6,
						red_a7: redP3A.redA7,
						red_a8: redP3A.redA8,
						red_a9: redP3A.redA9,
						red_a10: redP3A.redA10,
						red_a11: redP3A.redA11,
						red_a12: redP3A.redA12,

						orange_1: orangeP3.orange1,
						orange_2: orangeP3.orange2,
						orange_3: orangeP3.orange3,
						orange_4: orangeP3.orange4,
						orange_5: orangeP3.orange5,
						orange_6: orangeP3.orange6,
						orange_7: orangeP3.orange7,
						orange_8: orangeP3.orange8,
						orange_9: orangeP3.orange9,
						orange_10: orangeP3.orange10,
						orange_11: orangeP3.orange11,
						orange_12: orangeP3.orange12,
						orange_a1: orangeP3A.orangeA1,
						orange_a2: orangeP3A.orangeA2,
						orange_a3: orangeP3A.orangeA3,
						orange_a4: orangeP3A.orangeA4,
						orange_a5: orangeP3A.orangeA5,
						orange_a6: orangeP3A.orangeA6,
						orange_a7: orangeP3A.orangeA7,
						orange_a8: orangeP3A.orangeA8,
						orange_a9: orangeP3A.orangeA9,
						orange_a10: orangeP3A.orangeA10,
						orange_a11: orangeP3A.orangeA11,
						orange_a12: orangeP3A.orangeA12,

						yellow_1: yellowP3.yellow1,
						yellow_2: yellowP3.yellow2,
						yellow_3: yellowP3.yellow3,
						yellow_4: yellowP3.yellow4,
						yellow_5: yellowP3.yellow5,
						yellow_6: yellowP3.yellow6,
						yellow_7: yellowP3.yellow7,
						yellow_8: yellowP3.yellow8,
						yellow_9: yellowP3.yellow9,
						yellow_10: yellowP3.yellow10,
						yellow_11: yellowP3.yellow11,
						yellow_12: yellowP3.yellow12,
						yellow_a1: yellowP3A.yellowA1,
						yellow_a2: yellowP3A.yellowA2,
						yellow_a3: yellowP3A.yellowA3,
						yellow_a4: yellowP3A.yellowA4,
						yellow_a5: yellowP3A.yellowA5,
						yellow_a6: yellowP3A.yellowA6,
						yellow_a7: yellowP3A.yellowA7,
						yellow_a8: yellowP3A.yellowA8,
						yellow_a9: yellowP3A.yellowA9,
						yellow_a10: yellowP3A.yellowA10,
						yellow_a11: yellowP3A.yellowA11,
						yellow_a12: yellowP3A.yellowA12,

						green_1: greenP3.green1,
						green_2: greenP3.green2,
						green_3: greenP3.green3,
						green_4: greenP3.green4,
						green_5: greenP3.green5,
						green_6: greenP3.green6,
						green_7: greenP3.green7,
						green_8: greenP3.green8,
						green_9: greenP3.green9,
						green_10: greenP3.green10,
						green_11: greenP3.green11,
						green_12: greenP3.green12,
						green_a1: greenP3A.greenA1,
						green_a2: greenP3A.greenA2,
						green_a3: greenP3A.greenA3,
						green_a4: greenP3A.greenA4,
						green_a5: greenP3A.greenA5,
						green_a6: greenP3A.greenA6,
						green_a7: greenP3A.greenA7,
						green_a8: greenP3A.greenA8,
						green_a9: greenP3A.greenA9,
						green_a10: greenP3A.greenA10,
						green_a11: greenP3A.greenA11,
						green_a12: greenP3A.greenA12,

						blue_1: blueP3.blue1,
						blue_2: blueP3.blue2,
						blue_3: blueP3.blue3,
						blue_4: blueP3.blue4,
						blue_5: blueP3.blue5,
						blue_6: blueP3.blue6,
						blue_7: blueP3.blue7,
						blue_8: blueP3.blue8,
						blue_9: blueP3.blue9,
						blue_10: blueP3.blue10,
						blue_11: blueP3.blue11,
						blue_12: blueP3.blue12,
						blue_a1: blueP3A.blueA1,
						blue_a2: blueP3A.blueA2,
						blue_a3: blueP3A.blueA3,
						blue_a4: blueP3A.blueA4,
						blue_a5: blueP3A.blueA5,
						blue_a6: blueP3A.blueA6,
						blue_a7: blueP3A.blueA7,
						blue_a8: blueP3A.blueA8,
						blue_a9: blueP3A.blueA9,
						blue_a10: blueP3A.blueA10,
						blue_a11: blueP3A.blueA11,
						blue_a12: blueP3A.blueA12,

						purple_1: purpleP3.purple1,
						purple_2: purpleP3.purple2,
						purple_3: purpleP3.purple3,
						purple_4: purpleP3.purple4,
						purple_5: purpleP3.purple5,
						purple_6: purpleP3.purple6,
						purple_7: purpleP3.purple7,
						purple_8: purpleP3.purple8,
						purple_9: purpleP3.purple9,
						purple_10: purpleP3.purple10,
						purple_11: purpleP3.purple11,
						purple_12: purpleP3.purple12,
						purple_a1: purpleP3A.purpleA1,
						purple_a2: purpleP3A.purpleA2,
						purple_a3: purpleP3A.purpleA3,
						purple_a4: purpleP3A.purpleA4,
						purple_a5: purpleP3A.purpleA5,
						purple_a6: purpleP3A.purpleA6,
						purple_a7: purpleP3A.purpleA7,
						purple_a8: purpleP3A.purpleA8,
						purple_a9: purpleP3A.purpleA9,
						purple_a10: purpleP3A.purpleA10,
						purple_a11: purpleP3A.purpleA11,
						purple_a12: purpleP3A.purpleA12,

						pink_1: pinkP3.pink1,
						pink_2: pinkP3.pink2,
						pink_3: pinkP3.pink3,
						pink_4: pinkP3.pink4,
						pink_5: pinkP3.pink5,
						pink_6: pinkP3.pink6,
						pink_7: pinkP3.pink7,
						pink_8: pinkP3.pink8,
						pink_9: pinkP3.pink9,
						pink_10: pinkP3.pink10,
						pink_11: pinkP3.pink11,
						pink_12: pinkP3.pink12,
						pink_a1: pinkP3A.pinkA1,
						pink_a2: pinkP3A.pinkA2,
						pink_a3: pinkP3A.pinkA3,
						pink_a4: pinkP3A.pinkA4,
						pink_a5: pinkP3A.pinkA5,
						pink_a6: pinkP3A.pinkA6,
						pink_a7: pinkP3A.pinkA7,
						pink_a8: pinkP3A.pinkA8,
						pink_a9: pinkP3A.pinkA9,
						pink_a10: pinkP3A.pinkA10,
						pink_a11: pinkP3A.pinkA11,
						pink_a12: pinkP3A.pinkA12,

						black_a1: blackP3A.blackA1,
						black_a2: blackP3A.blackA2,
						black_a3: blackP3A.blackA3,
						black_a4: blackP3A.blackA4,
						black_a5: blackP3A.blackA5,
						black_a6: blackP3A.blackA6,
						black_a7: blackP3A.blackA7,
						black_a8: blackP3A.blackA8,
						black_a9: blackP3A.blackA9,
						black_a10: blackP3A.blackA10,
						black_a11: blackP3A.blackA11,
						black_a12: blackP3A.blackA12,

						white_a1: whiteP3A.whiteA1,
						white_a2: whiteP3A.whiteA2,
						white_a3: whiteP3A.whiteA3,
						white_a4: whiteP3A.whiteA4,
						white_a5: whiteP3A.whiteA5,
						white_a6: whiteP3A.whiteA6,
						white_a7: whiteP3A.whiteA7,
						white_a8: whiteP3A.whiteA8,
						white_a9: whiteP3A.whiteA9,
						white_a10: whiteP3A.whiteA10,
						white_a11: whiteP3A.whiteA11,
						white_a12: whiteP3A.whiteA12,
					}),
				},
			},
		},
	},
});
