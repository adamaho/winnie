"use client";

import {
	createContext,
	forwardRef,
	useCallback,
	useContext,
	useEffect,
	useState,
	type ElementRef,
	type MouseEvent,
	type PropsWithChildren,
} from "react";

import { Checkbox } from "./checkbox";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandSeparatorProps,
	CommandTextFieldInput,
	type CommandEmptyProps,
	type CommandGroupProps,
	type CommandItemProps,
	type CommandListProps,
	type CommandProps,
	type CommandTextFieldInputProps,
} from "./command";

/* -------------------------------------------------------------------------------------
 * CommandMultiContext
 * -------------------------------------------------------------------------------------*/
type CommandMultiContextProps = {
	addItem: (value: string) => void;
	removeItem: (value: string) => void;
	selectedItems: string[];
};

const CommandMultiContext = createContext<CommandMultiContextProps>({
	addItem: () => {
		return;
	},
	removeItem: () => {
		return;
	},
	selectedItems: [],
});

const CommandMultiProvider = (
	props: PropsWithChildren<CommandMultiContextProps>,
) => {
	return (
		<CommandMultiContext.Provider value={props}>
			{props.children}
		</CommandMultiContext.Provider>
	);
};

const useCommandMultiContext = () => {
	return useContext(CommandMultiContext);
};

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
	defaultSelectedItems?: string[];

	/**
	 * event handler that is called when the selected command item has changed
	 *
	 * @default undefined
	 */
	onSelectedItemsChange?: (value: string[]) => void;
};

const CommandMulti = forwardRef<
	CommandMultiElement,
	PropsWithChildren<CommandMultiProps>
>(
	(
		{ children, defaultSelectedItems = [], onSelectedItemsChange, ...rest },
		ref,
	) => {
		/**
		 * Tracks the selected items
		 */
		const [selectedItems, setSelectedItems] = useState(defaultSelectedItems);

		/**
		 * adds an item to the value array
		 *
		 * @param item the value of the item
		 */
		const addItem = useCallback((item: string) => {
			setSelectedItems((v) => {
				return [...v, item];
			});
		}, []);

		/**
		 * removes an item from the value array
		 *
		 * @param item the value of the item
		 */
		function removeItem(item: string) {
			setSelectedItems((v) => {
				return [...v].filter((i) => i !== item);
			});
		}

		/**
		 * Call onSelectedItemsChange when the items change
		 */
		useEffect(() => {
			onSelectedItemsChange?.(selectedItems);
		}, [selectedItems, onSelectedItemsChange]);

		return (
			<Command {...rest} ref={ref}>
				<CommandMultiProvider
					selectedItems={selectedItems ?? []}
					addItem={addItem}
					removeItem={removeItem}
				>
					{children}
				</CommandMultiProvider>
			</Command>
		);
	},
);

CommandMulti.displayName = "CommandMulti";

/* -------------------------------------------------------------------------------------
 * CommandMultiTextFieldInput
 * -------------------------------------------------------------------------------------*/
type CommandMultiTextFieldInputProps = CommandTextFieldInputProps;

const CommandMultiTextFieldInput = CommandTextFieldInput;
CommandMultiTextFieldInput.displayName = "CommandMultiTextFieldInput";

/* -------------------------------------------------------------------------------------
 * CommandMultiList
 * -------------------------------------------------------------------------------------*/
type CommandMultiListProps = CommandListProps;

const CommandMultiList = CommandList;
CommandMultiList.displayName = "CommandMultiList";

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
type CommandMultiSeparatorProps = CommandSeparatorProps;

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
	 * event handler that is called when the checkbox is clicked
	 *
	 * @param e mouse event for the html button element
	 * @returns void
	 */
	onCheckboxClick?: () => void;

	/**
	 * value of the item
	 */
	value: string;
};

const CommandMultiCheckboxItem = forwardRef<
	CommandMultiCheckboxItemElement,
	PropsWithChildren<CommandMultiCheckboxItemProps>
>(
	(
		{ children, value, onCheckedChange, onCheckboxClick, onSelect, ...rest },
		ref,
	) => {
		/**
		 * subscribe to multiselect-list context
		 */
		const { selectedItems, addItem, removeItem } = useCommandMultiContext();

		/**
		 * determines if the item is selected
		 */
		const checked = selectedItems.includes(value);

		/**
		 * handles the onSelect and onCheckboxSelect events
		 */
		function handleItemSelect(value: string) {
			if (checked) {
				removeItem(value);
				return;
			}

			addItem(value);
		}

		/**
		 * handles the onSelect event
		 */
		function _onSelect(value: string) {
			onSelect?.(value);
			handleItemSelect(value);
		}

		/**
		 * handles the onCheckboxSelect event
		 */
		function _onCheckboxChange(checked: boolean) {
			onCheckedChange?.(value, checked);
		}

		/**
		 * handles checkbox click
		 */
		function _onCheckboxClick(e: MouseEvent<HTMLButtonElement>) {
			e.stopPropagation();
			handleItemSelect(value);
			onCheckboxClick?.();
		}

		return (
			<CommandItem
				{...rest}
				value={value}
				onSelect={_onSelect}
				ref={ref}
				data-checked={checked}
			>
				<Checkbox
					checked={checked}
					onCheckedChange={_onCheckboxChange}
					attributes={{ onClick: _onCheckboxClick, tabIndex: -1 }}
				/>
				{children}
			</CommandItem>
		);
	},
);

CommandMultiCheckboxItem.displayName = "CommandMultiCheckboxItem";

export {
	CommandMulti,
	CommandMultiTextFieldInput,
	CommandMultiList,
	CommandMultiEmpty,
	CommandMultiGroup,
	CommandMultiSeparator,
	CommandMultiItem,
	CommandMultiCheckboxItem,
};

export type {
	CommandMultiProps,
	CommandMultiTextFieldInputProps,
	CommandMultiListProps,
	CommandMultiEmptyProps,
	CommandMultiGroupProps,
	CommandMultiSeparatorProps,
	CommandMultiItemProps,
	CommandMultiCheckboxItemProps,
};
