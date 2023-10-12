"use client";

import {
	createContext,
	forwardRef,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
	type ElementRef,
	type MouseEvent,
	type PropsWithChildren,
} from "react";

import { useComposedRefs } from "@radix-ui/react-compose-refs";

import { Checkbox } from "./checkbox";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandSeparatorProps,
	CommandTextField,
	CommandTextFieldInput,
	type CommandEmptyProps,
	type CommandGroupProps,
	type CommandItemProps,
	type CommandListProps,
	type CommandProps,
	type CommandTextFieldInputProps,
	type CommandTextFieldProps,
} from "./command";

/* -------------------------------------------------------------------------------------
 * Constants
 * -------------------------------------------------------------------------------------*/
const ITEM_CHECKBOX_SELECTOR_CHECKED = `[w-command-checkbox-item][data-checked="true"]`;
const ITEM_CHECKBOX_SELECTOR = `[w-command-checkbox-item]`;
const GROUP_CHECKED = `[w-command-group-checked]`;

/* -------------------------------------------------------------------------------------
 * CommandMultiContext
 * -------------------------------------------------------------------------------------*/
type CommandMultiContextProps = {
	addItem: (value: string) => void;
	removeItem: (value: string) => void;
	selectedItems: string[];
	sortOnMount: boolean;
};

const CommandMultiContext = createContext<CommandMultiContextProps>({
	addItem: () => {
		return;
	},
	removeItem: () => {
		return;
	},
	selectedItems: [],
	sortOnMount: true,
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

	/**
	 * if true, sorts the checked items to the top of the list in a separate group
	 * with a visual separator
	 *
	 * @default true
	 */
	sortOnMount?: boolean;
};

const CommandMulti = forwardRef<
	CommandMultiElement,
	PropsWithChildren<CommandMultiProps>
>(
	(
		{
			children,
			defaultSelectedItems = [],
			onSelectedItemsChange,
			sortOnMount = true,
			...rest
		},
		ref,
	) => {
		/**
		 * Tracks the selected items
		 */
		const [selectedItems, setSelectedItems] = useState(defaultSelectedItems);

		/**
		 * init ref for the command element
		 */
		const commandRef = useRef<HTMLDivElement>(null);

		/**
		 * merge the refs
		 */
		const composedRefs = useComposedRefs(commandRef, ref);

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

		/**
		 * Sort selected items into a group when the component mounts
		 */
		useEffect(() => {
			if (commandRef.current && sortOnMount) {
				const checkedGroup = commandRef.current.querySelector(GROUP_CHECKED);
				const checkedItems = commandRef.current.querySelectorAll(
					ITEM_CHECKBOX_SELECTOR_CHECKED,
				);

				for (const i of checkedItems) {
					checkedGroup?.appendChild(i);
				}
			}
		}, []);

		return (
			<Command {...rest} ref={composedRefs}>
				<CommandMultiProvider
					selectedItems={selectedItems ?? []}
					addItem={addItem}
					removeItem={removeItem}
					sortOnMount={sortOnMount}
				>
					{children}
				</CommandMultiProvider>
			</Command>
		);
	},
);

CommandMulti.displayName = "CommandMulti";

/* -------------------------------------------------------------------------------------
 * CommandMultiTextField
 * -------------------------------------------------------------------------------------*/
type CommandMultiTextFieldProps = CommandTextFieldProps;

const CommandMultiTextField = CommandTextField;
CommandMultiTextField.displayName = "CommandMultiTextField";

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
type CommandMultiListElement = ElementRef<typeof CommandList>;

const CommandMultiList = forwardRef<
	CommandMultiListElement,
	PropsWithChildren<CommandMultiListProps>
>(({ children, ...rest }, ref) => {
	/**
	 * tracks whether or not the separator should be visible
	 */
	const [showSeparator, setShowSeparator] = useState(false);

	/**
	 * subscribe to command multi context
	 */
	const { sortOnMount, selectedItems } = useCommandMultiContext();

	/**
	 * init ref for the list element
	 */
	const listRef = useRef<HTMLDivElement>(null);

	/**
	 * merge the refs
	 */
	const composedRefs = useComposedRefs(listRef, ref);

	/**
	 * compute if the separator should be visible
	 */
	useEffect(() => {
		if (!sortOnMount) {
			setShowSeparator(false);
			return;
		}

		if (listRef.current) {
			const allItems = listRef.current.querySelectorAll(ITEM_CHECKBOX_SELECTOR);
			setShowSeparator(
				selectedItems.length > 0 && selectedItems.length < allItems.length,
			);
			return;
		}
	}, [listRef.current]);

	return (
		<CommandList {...rest} ref={composedRefs}>
			{sortOnMount && (
				<>
					<CommandGroup w-command-group-checked="" />
					{/* {showSeparator && <CommandSeparator />} */}
				</>
			)}
			{children}
		</CommandList>
	);
});
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
				w-command-checkbox-item=""
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
	CommandMultiTextField,
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
	CommandMultiTextFieldProps,
	CommandMultiTextFieldInputProps,
	CommandMultiListProps,
	CommandMultiEmptyProps,
	CommandMultiGroupProps,
	CommandMultiSeparatorProps,
	CommandMultiItemProps,
	CommandMultiCheckboxItemProps,
};
