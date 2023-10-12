/**
 * FilterMultiValue
 * FilterMultiValueTrigger
 * FilterMultiValueContent
 * FilterMultiValueList
 * FilterMultiValueItem
 */

import { type PropsWithChildren } from "react";

import {
	CommandMulti,
	CommandMultiCheckboxItem,
	CommandMultiCheckboxItemProps,
	CommandMultiList,
	CommandMultiProps,
	CommandMultiTextField,
	CommandMultiTextFieldInput,
} from "winnie-react/command-multi";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
	type PopoverContentProps,
	type PopoverProps,
	type PopoverTriggerProps,
} from "winnie-react/popover";

import { useFilterContext } from "./filter-provider";

import "./filter-array-value.css";

/* -------------------------------------------------------------------------------------
 * FilterArrayValue
 * -------------------------------------------------------------------------------------*/
type FilterArrayValueProps = PopoverProps;
function FilterArrayValue({
	children,
	...rest
}: PropsWithChildren<FilterArrayValueProps>) {
	return <Popover {...rest}>{children}</Popover>;
}

/* -------------------------------------------------------------------------------------
 * FilterArrayValueTrigger
 * -------------------------------------------------------------------------------------*/
type FilterArrayValueTriggerProps = PopoverTriggerProps;
function FilterArrayValueTrigger({
	children,
	...rest
}: PropsWithChildren<FilterArrayValueTriggerProps>) {
	/**
	 * Subscribe to filter context
	 */
	const { value } = useFilterContext();

	return (
		<PopoverTrigger
			{...rest}
			className="filter-array-value-trigger"
			data-empty={value.length === 0}
		>
			{children}
		</PopoverTrigger>
	);
}

/* -------------------------------------------------------------------------------------
 * FilterArrayValueContent
 * -------------------------------------------------------------------------------------*/
type FilterArrayValueContentProps = Omit<PopoverContentProps, "align">;
function FilterArrayValueContent({
	children,
	...rest
}: PropsWithChildren<FilterArrayValueContentProps>) {
	return (
		<PopoverContent align="start" {...rest}>
			{children}
		</PopoverContent>
	);
}

/* -------------------------------------------------------------------------------------
 * FilterArrayValueList
 * -------------------------------------------------------------------------------------*/
type FilterArrayValueListProps = Omit<
	CommandMultiProps,
	"defaultSelectedItems" | "onSelectedItemsChange"
> & {
	/**
	 * placeholder for the textfield in the list
	 *
	 * @default undefined;
	 */
	placeholder?: string;
};

function FilterArrayValueList({
	children,
	placeholder,
	...rest
}: PropsWithChildren<FilterArrayValueListProps>) {
	/**
	 * subscribe to filter context
	 */
	const { value, setValue } = useFilterContext();

	return (
		<CommandMulti
			{...rest}
			defaultSelectedItems={value}
			onSelectedItemsChange={(value) => setValue(value)}
		>
			<CommandMultiTextField>
				<CommandMultiTextFieldInput attributes={{ placeholder }} />
			</CommandMultiTextField>
			<CommandMultiList>{children}</CommandMultiList>
		</CommandMulti>
	);
}

/* -------------------------------------------------------------------------------------
 * FilterArrayValueCheckboxItem
 * -------------------------------------------------------------------------------------*/
type FilterArrayValueCheckboxItemProps = CommandMultiCheckboxItemProps;
function FilterArrayValueCheckboxItem({
	children,
	...rest
}: PropsWithChildren<FilterArrayValueCheckboxItemProps>) {
	return (
		<CommandMultiCheckboxItem {...rest}>{children}</CommandMultiCheckboxItem>
	);
}

export {
	FilterArrayValue,
	FilterArrayValueTrigger,
	FilterArrayValueContent,
	FilterArrayValueList,
	FilterArrayValueCheckboxItem,
};

export {
	type FilterArrayValueProps,
	type FilterArrayValueTriggerProps,
	type FilterArrayValueContentProps,
	type FilterArrayValueListProps,
	type FilterArrayValueCheckboxItemProps,
};
