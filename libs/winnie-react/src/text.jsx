"use client";

import { forwardRef } from "react";

import { Slot } from "@radix-ui/react-slot";

/**
 *
 * @typedef {import("react").ElementRef<"span"> | import("react").ElementRef<"div">} TextElement
 *
 * @typedef {import("react").ComponentPropsWithoutRef<'div'>} TextDivAttributes
 * @typedef {{ attributes: TextDivAttributes, as: "div" }} TextDivProps
 * @typedef {import("react").ComponentPropsWithoutRef<'span'>} TextSpanAttributes
 * @typedef {{ attributes: TextSpanAttributes, as: "span" }} TextSpanProps
 * @typedef {import("react").ComponentPropsWithoutRef<'p'>} TextPAttributes
 * @typedef {{ attributes: TextPAttributes, as: "p" }} TextPProps
 *
 *
 * @typedef {Object} SharedTextProps
 * @property {string} className component className
 * @property {"accent" | "red" | "orange" | "yellow" | "green" | "blue" | "purple" | "pink" | "grey"} color modifies the color of the text
 * @property {"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"} size modifies the color of the text
 *
 * @typedef {SharedTextProps & (TextDivProps | TextPProps | TextSpanProps)} TextProps
 */

/**
 * @type {import("react").ForwardRefRenderFunction<TextElement, import("react").PropsWithChildren<TextProps>>}
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
