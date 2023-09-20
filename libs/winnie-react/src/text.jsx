"use client";

import { forwardRef } from "react";

import { Slot } from "@radix-ui/react-slot";

/**
 * @typedef {import("react").ElementRef<"span"> | import("react").ElementRef<"div">} TextElement
 *
 * @typedef {Omit<import("react").ComponentPropsWithoutRef<'div'>, "className" | "align" | "children">} TextDivAttributes
 * @typedef {{ attributes: TextDivAttributes, as: "div", children: string }} TextDivProps
 * @typedef {Omit<import("react").ComponentPropsWithoutRef<'span'>, "className" | "align" | "children">} TextSpanAttributes
 * @typedef {{ attributes: TextSpanAttributes, as: "span" }} TextSpanProps
 * @typedef {Omit<import("react").ComponentPropsWithoutRef<'p'>, "className" | "align" | "children">} TextPAttributes
 * @typedef {{ attributes: TextPAttributes, as: "p" }} TextPProps
 *
 *
 * @typedef {Object} SharedTextProps
 * @property {"left" | "center" | "right"} [align] changes how the text aligns in its container
 * @property {string} [className] component className
 * @property {import("react").ReactNode} [children] children
 * @property {"accent" | "red" | "orange" | "yellow" | "green" | "blue" | "purple" | "pink" | "grey"} [color] modifies the color of the text
 * @property {"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"} [size] modifies the color of the text
 * @property {"light" | "normal" | "medium" | "bold" | "extra-bold"} [weight] modifies the weight of the text
 *
 * @typedef {SharedTextProps & (TextDivProps | TextPProps | TextSpanProps) & { children: string }} TextProps
 */

/**
 * @type {import("react").ForwardRefRenderFunction<TextElement, TextProps & { children: string }>}
 */
const _Text = (
	{ attributes, as: Comp = "span", children, className, color = "grey", size = "2", ...rest },
	ref,
) => {
	return (
		<Slot {...attributes} {...rest} className={className} ref={ref} w-text="" w-text-color={color}>
			<Comp>{children}</Comp>
		</Slot>
	);
};

const Text = forwardRef(_Text);
export { Text };
