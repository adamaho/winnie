"use client";

import { forwardRef } from "react";

import { Slot } from "@radix-ui/react-slot";

/**
 * @typedef {import("react").ComponentPropsWithoutRef<"button">} ButtonElementAttributes
 * @typedef {import("react").ElementRef<"button">} ButtonElement
 */

/**
 * @typedef {Object} ButtonProps props that can be passed to Button
 * @property {ButtonElementAttributes} [attributes] default html attributes for Button
 * @property {string} [className] component className
 * @property {"accent" | "grey" | "red" } [color] modifies the color of the button
 * @property {"none" | "small" | "medium" | "large" | "round"} [radius] modifies the border radius of the button
 * @property {boolean} [displayAsChild] if true, the Button will merge its props and display the child element
 * @property {"small" | "medium" | "large"} [size] modifies the size of the button including text
 * @property {"solid" | "soft" | "ghost"} [variant] changes the overall color appearance of the button
 */

/**
 * @type {import("react").ForwardRefRenderFunction<ButtonElement, import("react").PropsWithChildren<ButtonProps>>}
 */
const _Button = (
	{
		attributes,
		children,
		className = "",
		color = "accent",
		radius,
		size = "medium",
		displayAsChild = false,
		variant = "solid",
		...rest
	},
	ref,
) => {
	const Comp = displayAsChild ? Slot : "button";
	return (
		<Comp
			{...attributes}
			{...rest}
			className={className}
			ref={ref}
			w-button=""
			w-accent-color={color}
			w-button-radius={radius}
			w-button-size={size}
			w-button-variant={variant}
		>
			{children}
		</Comp>
	);
};

/**
 * # Button
 * Trigger an action or event from user interaction.
 *
 * ## Usage
 *
 * ```jsx
 * <Button>
 *   Bookmark
 * <Button>
 * ```
 *
 * @see {@link ButtonProps}
 * @see {@link http://github.com Documentation}
 */
export const Button = forwardRef(_Button);
