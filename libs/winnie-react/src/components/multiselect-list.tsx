"use client";

import {
	Dispatch,
	forwardRef,
	useCallback,
	type ElementRef,
	type PropsWithChildren,
	type SetStateAction,
} from "react";

import { createContext } from "@radix-ui/react-context";
import { useControllableState } from "@radix-ui/react-use-controllable-state";

import { Checkbox } from "./checkbox";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	type CommandEmptyProps,
	type CommandGroupProps,
	type CommandInputProps,
	type CommandItemProps,
	type CommandListProps,
	type CommandProps,
} from "./command";

/* -------------------------------------------------------------------------------------
 * constants
 * -------------------------------------------------------------------------------------*/
const MULTISELECT_LIST_CONTEXT = "MultiSelectList";

/* -------------------------------------------------------------------------------------
 * utilities
 * -------------------------------------------------------------------------------------*/
function parseItemValue(value: string): [string, boolean] {
	const regex = new RegExp(/__checked/);
	const splitValue = value.split(regex);
	return [splitValue[0], splitValue?.[1] === "__checked"];
}

/* -------------------------------------------------------------------------------------
 * MultiSelectListContext
 * -------------------------------------------------------------------------------------*/
type MultiSelectListContextProps = {
	setValue: Dispatch<SetStateAction<string[] | undefined>>;
	value?: string[];
};

const [MultiSelectListProvider, useMultiSelectListContext] =
	createContext<MultiSelectListContextProps>(MULTISELECT_LIST_CONTEXT);

/* -------------------------------------------------------------------------------------
 *MultiSelectList
 * -------------------------------------------------------------------------------------*/
type MultiSelectListComponentProps = CommandProps;

type MultiSelectListElement = ElementRef<typeof Command>;
type MultiSelectListProps = Omit<
	MultiSelectListComponentProps,
	"value" | "onValueChange"
> & {
	/**
	 * optionally sets the default selected items
	 *
	 * @default undefined
	 */
	defaultValue?: string[];

	/**
	 * event handler that is called when the selected command item has changed
	 *
	 * @default undefined
	 */
	onValueChange?: (value: string[]) => void;

	/**
	 * optionally controls the state of the selected items
	 *
	 * @default undefined
	 */
	value?: string[];
};

const MultiSelectList = forwardRef<
	MultiSelectListElement,
	PropsWithChildren<MultiSelectListProps>
>(({ children, defaultValue, onValueChange, value, ...rest }, ref) => {
	/**
	 * tracks the controllable value
	 */
	const [_value, _setValue] = useControllableState({
		prop: value,
		defaultProp: defaultValue,
		onChange: onValueChange,
	});

	return (
		<MultiSelectListProvider value={_value} setValue={_setValue}>
			<Command {...rest} ref={ref}>
				{children}
			</Command>
		</MultiSelectListProvider>
	);
});

MultiSelectList.displayName = "MultiSelectList";

/* -------------------------------------------------------------------------------------
 * MultiSelectListInput
 * -------------------------------------------------------------------------------------*/
type MultiSelectListInputProps = CommandInputProps;

const MultiSelectListInput = CommandInput;
MultiSelectListInput.displayName = "MultiSelectListInput";

/* -------------------------------------------------------------------------------------
 * MultiSelectListContent
 * -------------------------------------------------------------------------------------*/
type MultiSelectListContentProps = CommandListProps;

const MultiSelectListContent = CommandList;
MultiSelectListContent.displayName = "MultiSelectListContent";

/* -------------------------------------------------------------------------------------
 * MultiSelectListEmpty
 * -------------------------------------------------------------------------------------*/
type MultiSelectListEmptyProps = CommandEmptyProps;

const MultiSelectListEmpty = CommandEmpty;
MultiSelectListEmpty.displayName = "MultiSelectListEmpty";

/* -------------------------------------------------------------------------------------
 * MultiSelectListGroup
 * -------------------------------------------------------------------------------------*/
type MultiSelectListGroupProps = CommandGroupProps;

const MultiSelectListGroup = CommandGroup;
MultiSelectListGroup.displayName = "MultiSelectListGroup";

/* -------------------------------------------------------------------------------------
 * MultiSelectListItem
 * -------------------------------------------------------------------------------------*/
type MultiSelectListItemElement = ElementRef<typeof CommandItem>;
type MultiSelectListItemProps = Omit<CommandItemProps, "value"> & {
	/**
	 * event handler that is called when the checkbox is selected
	 *
	 * @default undefined
	 */
	onCheckedChange?: (value: string, checked: boolean) => void;

	/**
	 * value of the item
	 */
	value: string;
};

const MultiSelectListItem = forwardRef<
	MultiSelectListItemElement,
	PropsWithChildren<MultiSelectListItemProps>
>(({ children, value, onCheckedChange, onSelect, ...rest }, ref) => {
	/**
	 * subscribe to multiselect-list context
	 */
	const { value: contextValue, setValue } = useMultiSelectListContext(
		MULTISELECT_LIST_CONTEXT,
	);

	/**
	 * determines if the item is selected
	 */
	const checked = contextValue?.includes(value);

	/**
	 * handles appending an item to the value list
	 */
	const addItem = useCallback(
		(value: string) => {
			setValue((v) => {
				return [...(v ?? []), value];
			});
		},
		[setValue],
	);

	/**
	 * handles removing an item from the value list
	 */
	const removeItem = useCallback(
		(value: string) => {
			const [v] = parseItemValue(value);
			setValue((items) => {
				return items?.filter((i) => i !== v);
			});
		},
		[setValue],
	);

	/**
	 * handles the onSelect and onCheckboxSelect events
	 */
	const handleItemSelect = useCallback(
		(value: string) => {
			if (checked) {
				removeItem(value);
				return;
			}

			addItem(value);
		},
		[checked],
	);

	/**
	 * handles the onSelect event
	 */
	const _onSelect = useCallback(
		(value: string) => {
			onSelect?.(value);
			handleItemSelect(value);
		},
		[handleItemSelect, onSelect],
	);

	/**
	 * handles the onCheckboxSelect event
	 */
	const _onCheckboxChange = useCallback(
		(checked: boolean) => {
			onCheckedChange?.(value, checked);
			handleItemSelect(value);
		},
		[handleItemSelect, onSelect],
	);

	return (
		<CommandItem {...rest} value={value} onSelect={_onSelect} ref={ref}>
			<Checkbox
				checked={checked}
				onCheckedChange={_onCheckboxChange}
				attributes={{ onClick: (e) => e.stopPropagation() }}
			/>
			{children}
		</CommandItem>
	);
});

MultiSelectListItem.displayName = "MultiSelectListItem";

export {
	MultiSelectList,
	MultiSelectListInput,
	MultiSelectListContent,
	MultiSelectListEmpty,
	MultiSelectListGroup,
	MultiSelectListItem,
};

export type {
	MultiSelectListProps,
	MultiSelectListInputProps,
	MultiSelectListContentProps,
	MultiSelectListEmptyProps,
	MultiSelectListGroupProps,
	MultiSelectListItemProps,
};
