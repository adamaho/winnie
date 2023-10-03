"use client";

import {
	forwardRef,
	type ComponentPropsWithoutRef,
	type ElementRef,
	type PropsWithChildren,
} from "react";

type KbdElementAttributes = ComponentPropsWithoutRef<"kbd">;
type KbdElement = ElementRef<"kbd">;

type KbdProps = {
	/**
	 *
	 * underlying Kbd html element attributes
	 *
	 * @default undefined
	 */
	attributes?: KbdElementAttributes;

	/**
	 * className to pass to Kbd for additional styling
	 *
	 * @default undefined;
	 */
	className?: string;

	/**
	 * modifies the size of the button including text
	 *
	 * @default "medium"
	 */
	size?: "small" | "medium" | "large";
};

const Kbd = forwardRef<KbdElement, PropsWithChildren<KbdProps>>(
	({ attributes, className, children, size = "medium", ...rest }, ref) => {
		return (
			<kbd
				{...attributes}
				{...rest}
				className={className}
				ref={ref}
				// eslint-disable-next-line react/no-unknown-property
				w-kbd=""
				// eslint-disable-next-line react/no-unknown-property
				w-kbd-size={size}
			>
				{children}
			</kbd>
		);
	},
);

Kbd.displayName = "Kbd";

export { Kbd };
export type { KbdProps };
