export const colors = [
	"red",
	"orange",
	"yellow",
	"green",
	"blue",
	"purple",
	"pink",
	"gray",
] as const;
export type Color = (typeof colors)[number];
