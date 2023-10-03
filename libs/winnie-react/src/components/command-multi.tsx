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
import { CommandSeparator } from "cmdk";

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
const COMMAND_MULTI = "MultiSelectList";

/* -------------------------------------------------------------------------------------
 * utilities
 * -------------------------------------------------------------------------------------*/
function parseItemValue(value: string): [string, boolean] {
	const regex = new RegExp(/__checked/);
	const splitValue = value.split(regex);
	return [splitValue[0], splitValue?.[1] === "__checked"];
}

/* -------------------------------------------------------------------------------------
 * CommandMultiContext
 * -------------------------------------------------------------------------------------*/
type CommandMultiContextProps = {
	setValue: Dispatch<SetStateAction<string[] | undefined>>;
	value?: string[];
};

const [CommandMultiProvider, useCommandMultiContext] =
	createContext<CommandMultiContextProps>(COMMAND_MULTI);

/* -------------------------------------------------------------------------------------
 * CommandMulti
 * -------------------------------------------------------------------------------------*/
type CommandMultiComponentProps = CommandProps;

type CommandMultiElement = ElementRef<typeof Command>;
type CommandMultiProps = Omit<
	CommandMultiComponentProps,
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

const CommandMulti = forwardRef<
	CommandMultiElement,
	PropsWithChildren<CommandMultiProps>
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
		<CommandMultiProvider value={_value} setValue={_setValue}>
			<Command {...rest} ref={ref}>
				{children}
			</Command>
		</CommandMultiProvider>
	);
});

CommandMulti.displayName = "CommandMulti";

/* -------------------------------------------------------------------------------------
 * CommandMultiInput
 * -------------------------------------------------------------------------------------*/
type CommandMultiInputProps = CommandInputProps;

const CommandMultiInput = CommandInput;
CommandMultiInput.displayName = "CommandMultiInput";

/* -------------------------------------------------------------------------------------
 * CommandMultiContent
 * -------------------------------------------------------------------------------------*/
type CommandMultiContentProps = CommandListProps;

const CommandMultiContent = CommandList;
CommandMultiContent.displayName = "CommandMultiContent";

/* -------------------------------------------------------------------------------------
 * CommandMultiEmpty
 * -------------------------------------------------------------------------------------*/
type CommandMultiEmptyProps = CommandEmptyProps;

const CommandMultiEmpty = CommandEmpty;
CommandMultiEmpty.displayName = "CommandMultiEmpty";

/* -------------------------------------------------------------------------------------
 * CommandMultiGroup
 * -------------------------------------------------------------------------------------*/
type CommandMultiGroupProps = CommandGroupProps;

const CommandMultiGroup = CommandGroup;
CommandMultiGroup.displayName = "CommandMultiGroup";

/* -------------------------------------------------------------------------------------
 * CommandMultiSeparator
 * -------------------------------------------------------------------------------------*/
type CommandMultiSeparatorProps = CommandGroupProps;

const CommandMultiSeparator = CommandSeparator;
CommandMultiSeparator.displayName = " CommandMultiSeparator";

/* -------------------------------------------------------------------------------------
 * CommandMultiItem
 * -------------------------------------------------------------------------------------*/
type CommandMultiItemProps = CommandItemProps;

const CommandMultiItem = CommandItem;
CommandMultiItem.displayName = "CommandMultiItem";

/* -------------------------------------------------------------------------------------
 * CommandMultiCheckboxItem
 * -------------------------------------------------------------------------------------*/
type CommandMultiCheckboxItemElement = ElementRef<typeof CommandItem>;
type CommandMultiCheckboxItemProps = Omit<CommandItemProps, "value"> & {
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

const CommandMultiCheckboxItem = forwardRef<
	CommandMultiCheckboxItemElement,
	PropsWithChildren<CommandMultiCheckboxItemProps>
>(({ children, value, onCheckedChange, onSelect, ...rest }, ref) => {
	/**
	 * subscribe to multiselect-list context
	 */
	const { value: contextValue, setValue } =
		useCommandMultiContext(COMMAND_MULTI);

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

CommandMultiCheckboxItem.displayName = "CommandMultiCheckboxItem";

export {
	CommandMulti,
	CommandMultiInput,
	CommandMultiContent,
	CommandMultiEmpty,
	CommandMultiGroup,
	CommandMultiSeparator,
	CommandMultiItem,
	CommandMultiCheckboxItem,
};

export type {
	CommandMultiProps,
	CommandMultiInputProps,
	CommandMultiContentProps,
	CommandMultiEmptyProps,
	CommandMultiGroupProps,
	CommandMultiSeparatorProps,
	CommandMultiItemProps,
	CommandMultiCheckboxItemProps,
};
