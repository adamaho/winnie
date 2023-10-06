"use client";

import {
	createContext,
	forwardRef,
	useCallback,
	useContext,
	useEffect,
	useState,
	type ElementRef,
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
	const { selectedItems, addItem, removeItem } = useCommandMultiContext();

	/**
	 * determines if the item is selected
	 */
	const checked = selectedItems.includes(value);

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
				attributes={{ onClick: (e) => e.stopPropagation(), tabIndex: -1 }}
			/>
			{children}
		</CommandItem>
	);
});

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
