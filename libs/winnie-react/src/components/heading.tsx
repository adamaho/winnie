import {
	forwardRef,
	type ComponentPropsWithoutRef,
	type ElementRef,
	type PropsWithChildren,
} from "react";

import { Slot } from "@radix-ui/react-slot";

type HeadingComponentProps = ComponentPropsWithoutRef<"div">;
type HeadingElementAttributes = Omit<HeadingComponentProps, "children">;

type HeadingElement = ElementRef<"h1">;
type HeadingProps = {
	/**
	 * modifies the texts alignment relative to its container
	 *
	 * @default "left"
	 */
	align?: "left" | "center" | "right";

	/**
	 * changes the rendered html element
	 *
	 * @default "span"
	 */
	displayAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

	/**
	 * rendered html attributes
	 *
	 * @default undefined
	 */
	attributes?: HeadingElementAttributes;

	/**
	 * modifies the color of the heading
	 *
	 * @default "gray"
	 */
	color?:
		| "red"
		| "orange"
		| "yellow"
		| "green"
		| "blue"
		| "purple"
		| "pink"
		| "gray";

	/**
	 * modifies the contrast of the heading
	 *
	 * @default "high"
	 */
	contrast?: "low" | "medium" | "high";

	/**
	 * modifies the font-size of the heading
	 *
	 * @default "6"
	 */
	size?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

	/**
	 * modifies the font weight of the heading
	 *
	 * @default "bold"
	 */
	weight?: "light" | "normal" | "medium" | "bold" | "extra-bold";
};

const Heading = forwardRef<HeadingElement, PropsWithChildren<HeadingProps>>(
	(
		{
			align = "left",
			displayAs: Comp = "h1",
			attributes,
			children,
			color = "gray",
			contrast = "high",
			size = "7",
			weight = "bold",
			...rest
		},
		ref,
	) => {
		return (
			<Slot
				{...attributes}
				{...rest}
				w-text=""
				w-text-align={align}
				w-text-contrast={contrast}
				w-text-size={size}
				w-text-weight={weight}
				w-accent-color={color}
				ref={ref}
			>
				<Comp>{children}</Comp>
			</Slot>
		);
	},
);

Heading.displayName = "Heading";

export { Heading };
export type { HeadingProps };
