"use client";

import {
	createContext,
	PropsWithChildren,
	useContext,
	useMemo,
	useState,
	type ReactNode,
} from "react";

import {
	CommandMulti,
	CommandMultiCheckboxItem,
	CommandMultiList,
	CommandMultiSeparator,
	CommandMultiTextFieldInput,
} from "winnie-react";
import {
	Popover,
	PopoverContent,
	PopoverProps,
	PopoverTrigger,
	PopoverTriggerProps,
} from "winnie-react/popover";

import { useFilterContext } from "./filter-provider";

import "./value.css";

export type ValueItem = {
	value: string;
	text: string;
};

/* -------------------------------------------------------------------------------------
 * ValueDropdownContext
 * -------------------------------------------------------------------------------------*/
type ValueDropdownContextProps = {
	items: ValueItem[];
};

const ValueDropdownContext = createContext<ValueDropdownContextProps>({
	items: [],
});

function useValueDropdownContext() {
	return useContext(ValueDropdownContext);
}

function ValueDropdownProvider({
	children,
	items,
}: PropsWithChildren<ValueDropdownContextProps>) {
	return (
		<ValueDropdownContext.Provider value={{ items }}>
			{children}
		</ValueDropdownContext.Provider>
	);
}

/* -------------------------------------------------------------------------------------
 * ValueDropdown
 * -------------------------------------------------------------------------------------*/
type ValueDropdownProps = PopoverProps & ValueDropdownContextProps;
function ValueDropdown({
	children,
	items,
	...rest
}: PropsWithChildren<ValueDropdownProps>) {
	return (
		<ValueDropdownProvider items={items}>
			<Popover {...rest}>{children}</Popover>
		</ValueDropdownProvider>
	);
}

/* -------------------------------------------------------------------------------------
 * ValueDropdownTrigger
 * -------------------------------------------------------------------------------------*/
type ValueDropdownTriggerRenderProp = {
	value: string[];
	text: string;
	count: number;
};

type ValueDropdownTriggerCommonProps = {
	attributes?: PopoverTriggerProps["attributes"];
	className?: string;
};

type ValueDropdownTriggerProps =
	| {
			children?: (args: ValueDropdownTriggerRenderProp) => ReactNode;
			displayAsChild?: false;
	  }
	| {
			children?: ReactNode;
			displayAsChild?: boolean;
	  };

function ValueDropdownTrigger({
	attributes,
	children,
	displayAsChild,
	...rest
}: ValueDropdownTriggerProps & ValueDropdownTriggerCommonProps) {
	/**
	 * Subscribe to filter context
	 */
	const { value } = useFilterContext();

	/**
	 * Subscribe to value dropdown context
	 */
	const { items } = useValueDropdownContext();

	/**
	 * trigger text
	 */
	const text = useMemo(() => {
		if (value.length > 1) {
			return `${value.length} items`;
		}

		if (value.length === 0) {
			return "Select Focus";
		}

		return items.find((i) => i.value === value[0])?.text ?? "Select Focus";
	}, [value, items]);

	return (
		<PopoverTrigger
			{...attributes}
			{...rest}
			data-empty={value.length === 0}
			displayAsChild={displayAsChild}
		>
			{typeof children === "function"
				? children({ value, text, count: value.length })
				: children}
		</PopoverTrigger>
	);
}

/* -------------------------------------------------------------------------------------
 * ValueDropdownContent
 * -------------------------------------------------------------------------------------*/
function ValueDropdownContent({ children }: PropsWithChildren) {
	return <PopoverContent align="start">{children}</PopoverContent>;
}

/* -------------------------------------------------------------------------------------
 * ValueDropdownList
 * -------------------------------------------------------------------------------------*/
function ValueDropdownList() {
	/**
	 * subscribe to filter context
	 */
	const { value, setValue } = useFilterContext();

	/**
	 * subscribe to value dropdown context
	 */
	const { items } = useValueDropdownContext();

	/**
	 * sorts the items when the component first mounts
	 */
	const [sortedItems] = useState(() => {
		const checked: ValueItem[] = [];
		const unchecked: ValueItem[] = [];

		for (const item of items) {
			if (value.includes(item.value)) {
				checked.push(item);
			} else {
				unchecked.push(item);
			}
		}

		return {
			checked,
			unchecked,
		};
	});

	return (
		<CommandMulti
			defaultSelectedItems={value}
			onSelectedItemsChange={(value) => setValue(value)}
		>
			<CommandMultiTextFieldInput attributes={{ placeholder: "Item" }} />
			<CommandMultiList>
				{sortedItems?.checked.map((i) => {
					return (
						<CommandMultiCheckboxItem key={i.value} value={i.value}>
							{i.text}
						</CommandMultiCheckboxItem>
					);
				})}
				{sortedItems.checked.length > 0 &&
					sortedItems.checked.length < items.length && (
						<CommandMultiSeparator />
					)}
				{sortedItems?.unchecked.map((i) => {
					return (
						<CommandMultiCheckboxItem key={i.value} value={i.value}>
							{i.text}
						</CommandMultiCheckboxItem>
					);
				})}
			</CommandMultiList>
		</CommandMulti>
	);
}

export {
	ValueDropdown,
	ValueDropdownTrigger,
	ValueDropdownContent,
	ValueDropdownList,
};
