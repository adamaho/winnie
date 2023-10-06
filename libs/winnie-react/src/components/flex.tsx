"use client";

import {
	forwardRef,
	type ComponentPropsWithoutRef,
	type ElementRef,
	type PropsWithChildren,
} from "react";

import { Slot } from "@radix-ui/react-slot";

type FlexElementAttributes = ComponentPropsWithoutRef<"div">;
type FlexElement = ElementRef<"div">;

type FlexProps = {
	/**
	 * items alignment within the flex container
	 *
	 * @default undefined
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/align-items | align-items}
	 */
	align?: "start" | "center" | "end" | "baseline" | "stretch";

	/**
	 * the Flex element attributes
	 *
	 * @default undefined
	 */
	attributes?: Omit<FlexElementAttributes, "className">;

	/**
	 * component className
	 *
	 * @default undefined;
	 */
	className?: string;

	/**
	 * stacking direction of the flex items
	 *
	 * @default "row"
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction | flex-direction}
	 */
	direction?: "column" | "row" | "column-reverse" | "row-reverse";

	/**
	 * specifies the elements display
	 *
	 * @default "flex"
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/display | display}
	 */
	display?: "flex" | "inline-flex" | "none";

	/**
	 * if true, the Flex will merge its props and display the child element
	 *
	 * @default false
	 */
	displayAsChild?: boolean;

	/**
	 * applies space between each item in the flex container
	 *
	 * @default "flex"
	 */
	gap?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

	/**
	 * items justified alignment within the flex container
	 *
	 * @default undefined
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content | justify-content}
	 */
	justify?: "start" | "center" | "end" | "between" | "around" | "evenly";

	/**
	 * width of the flex container
	 *
	 * @default undefined
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap | flex-wrap}
	 */
	width?: "100%" | "0";

	/**
	 * items wrapping within the flex container
	 *
	 * @default undefined
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap | flex-wrap}
	 */
	wrap?: "wrap" | "nowrap" | "wrap-reverse";
};

const Flex = forwardRef<FlexElement, PropsWithChildren<FlexProps>>(
	(
		{
			align,
			attributes,
			children,
			direction = "row",
			display = "flex",
			displayAsChild,
			gap = "0",
			justify,
			wrap,
			width,
			...rest
		},
		ref,
	) => {
		const Comp = displayAsChild ? Slot : "div";
		return (
			<Comp
				{...attributes}
				{...rest}
				w-flex=""
				w-flex-align={align}
				w-flex-direction={direction}
				w-flex-display={display}
				w-gap={gap}
				w-flex-justify={justify}
				w-flex-wrap={wrap}
				w-width={width}
				ref={ref}
			>
				{children}
			</Comp>
		);
	},
);

Flex.displayName = "Flex";

export { Flex };
export type { FlexProps };
