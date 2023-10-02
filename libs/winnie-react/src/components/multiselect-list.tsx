"use client";

import {
	Dispatch,
	forwardRef,
	SetStateAction,
	type ElementRef,
	type PropsWithChildren,
} from "react";

import { createContext } from "@radix-ui/react-context";
import { useControllableState } from "@radix-ui/react-use-controllable-state";

import { commandScore } from "../utils";
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

const MULTISELECT_LIST_CONTEXT = "MultiSelectList";

/* -------------------------------------------------------------------------------------
 * MultiSelectListContext
 * -------------------------------------------------------------------------------------*/
type MultiSelectListContextProps = {
	open?: boolean;
	setOpen?: Dispatch<SetStateAction<boolean | undefined>>;
	setValue?: Dispatch<SetStateAction<string[] | undefined>>;
	value?: string[];
};

const [MultiSelectListProvider] = createContext<MultiSelectListContextProps>(
	MULTISELECT_LIST_CONTEXT,
);

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
			<Command
				{...rest}
				ref={ref}
				filter={(value, search) => {
					if (value.includes("checked")) {
						return 1;
					}

					return commandScore(value, search);
				}}
			>
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

type MultiSelectListItemProps = CommandItemProps & {
	/**
	 * event handler that is called when the checkbox is selected
	 *
	 * @default undefined
	 */
	onCheckboxSelect?: (value: string, checked: boolean) => void;
};
type MultiSelectListItemElement = ElementRef<typeof CommandItem>;

const MultiSelectListItem = forwardRef<
	MultiSelectListItemElement,
	PropsWithChildren<MultiSelectListItemProps>
>(({ children, value, onSelect, ...rest }, ref) => {
	return (
		<CommandItem {...rest} value={value} onSelect={onSelect} ref={ref}>
			<Checkbox />
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
