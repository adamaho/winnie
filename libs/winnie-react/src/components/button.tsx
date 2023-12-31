"use client";

import {
	forwardRef,
	type ComponentPropsWithoutRef,
	type ElementRef,
	type PropsWithChildren,
} from "react";

import { Slot } from "@radix-ui/react-slot";

type ButtonElementAttributes = ComponentPropsWithoutRef<"button">;
type ButtonElement = ElementRef<"button">;

type ButtonProps = {
	/**
	 *
	 * underlying Button html element attributes
	 *
	 * @default undefined
	 */
	attributes?: ButtonElementAttributes;

	/**
	 * className to pass to Button for additional styling
	 *
	 * @default undefined;
	 */
	className?: string;

	/**
	 * modifies the color of the Button
	 *
	 * @default "accent"
	 */
	color?: "accent" | "red" | "gray";

	/**
	 * if true, the Button will merge its props and display the child element
	 *
	 * @default false
	 */
	displayAsChild?: boolean;

	/**
	 * modifes the radius of the Button
	 *
	 * @default "medium"
	 */
	radius?: "none" | "small" | "medium" | "large" | "round";

	/**
	 * modifies the size of the button including text
	 *
	 * @default "2"
	 */
	size?: "1" | "2" | "3";

	/**
	 * modifies the appearance of the button
	 *
	 * @default "solid"
	 */
	variant?: "solid" | "soft" | "ghost" | "dotted";
};

const Button = forwardRef<ButtonElement, PropsWithChildren<ButtonProps>>(
	(
		{
			attributes,
			className,
			children,
			color,
			displayAsChild,
			radius = "medium",
			size = "2",
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
				w-accent-color={color === "accent" ? "" : color}
				w-button-radius={radius}
				w-button-size={size}
				w-button-variant={variant}
			>
				{children}
			</Comp>
		);
	},
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
