export const colors = [
	"red",
	"orange",
	"yellow",
	"green",
	"blue",
	"purple",
	"pink",
	"grey",
] as const;
export type Color = (typeof colors)[number];
