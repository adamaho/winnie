"use client";

import {
	forwardRef,
	type ComponentPropsWithoutRef,
	type ElementRef,
} from "react";

import {
	Checkbox as RadixCheckbox,
	CheckboxIndicator as RadixCheckboxIndicator,
} from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

type CheckboxElement = ElementRef<typeof RadixCheckbox>;
type CheckboxComponentProps = ComponentPropsWithoutRef<typeof RadixCheckbox>;

type CheckboxProps = {
	/**
	 * underlying Checkbox html element attributes
	 *
	 * @default
	 */
	attributes?: Omit<
		CheckboxComponentProps,
		| "asChild"
		| "defaultChecked"
		| "checked"
		| "onCheckedChange"
		| "disabled"
		| "required"
		| "name"
		| "value"
	>;

	/**
	 * optionally controls the checked state
	 *
	 * @default undefined
	 */
	checked?: CheckboxComponentProps["checked"];

	/**
	 * component className
	 *
	 * @default undefined
	 */
	className?: string;

	/**
	 * optionally change the color of the checkbox
	 *
	 * @default undefined
	 */
	color?: "accent" | "red" | "green" | "yellow" | "gray";

	/**
	 * if true, the Checkbox will be checked when it first mounts
	 *
	 * @default false
	 */
	defaultChecked?: CheckboxComponentProps["defaultChecked"];

	/**
	 * if true, the Checkbox will not be interactable
	 *
	 * @default false
	 */
	disabled?: CheckboxComponentProps["disabled"];

	/**
	 * if true, the Checkbox will merge its props and display the child element
	 *
	 * @default false
	 */
	displayAsChild?: boolean;

	/**
	 * event handler that is called when the checkbox state is changed
	 */
	onCheckedChange?: CheckboxComponentProps["onCheckedChange"];

	/**
	 * the underlying name of the element
	 *
	 * @default undefined
	 */
	name?: CheckboxComponentProps["name"];

	/**
	 * if true, the checkbox is required to be checked prior to form submission
	 *
	 * @default false
	 */
	required?: CheckboxComponentProps["required"];

	/**
	 * modifies the side of the checkbox
	 *
	 * @default "2"
	 */
	size?: "1" | "2";

	/**
	 * the value of the checkbox when form is submitted
	 *
	 * @default undefined
	 */
	value?: CheckboxComponentProps["value"];
};

const Checkbox = forwardRef<CheckboxElement, CheckboxProps>(
	({ attributes, className, size = "2", color, ...rest }, ref) => {
		return (
			<RadixCheckbox
				{...attributes}
				{...rest}
				className={className}
				ref={ref}
				w-accent-color={color}
				w-checkbox=""
				w-checkbox-size={size}
			>
				<RadixCheckboxIndicator asChild>
					<Check w-checkbox-indicator="" />
				</RadixCheckboxIndicator>
			</RadixCheckbox>
		);
	},
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
export type { CheckboxProps };
