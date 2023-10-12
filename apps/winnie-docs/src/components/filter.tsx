"use client";

import { useEffect, useState, type ReactNode } from "react";

import {
	CommandMulti,
	CommandMultiCheckboxItem,
	CommandMultiEmpty,
	CommandMultiGroup,
	CommandMultiItem,
	CommandMultiList,
	CommandMultiSeparator,
	CommandMultiTextField,
	CommandMultiTextFieldInput,
	type CommandMultiProps,
} from "winnie-react/command-multi";
import { Flex } from "winnie-react/flex";
import { Text } from "winnie-react/text";

import "./filter.css";

type FilterItemCountProps = {
	count: number;
	label: string;
};

function FilterItemCount(props: FilterItemCountProps) {
	if (props.count === 0) {
		return null;
	}

	return (
		<Text size="1">
			{props.count} {props.label}
		</Text>
	);
}

type FilterItem =
	| {
			type: "item";
			end?: ReactNode;
			onItemClick?: () => void;
			start?: ReactNode;
			text: string;
			value: string;
	  }
	| {
			type: "checkbox-item";
			end?: ReactNode;
			onItemClick?: () => void;
			onCheckboxItemClick?: () => void;
			start?: ReactNode;
			text: string;
			value: string;
	  };

type FilterGroup = {
	type: "group";
	heading?: string;
	items: FilterItem[];
};

type FilterSeparator = {
	type: "separator";
	separator: boolean;
	key: string;
};

/* -------------------------------------------------------------------------------------
 * Utilities
 * -------------------------------------------------------------------------------------*/
/**
 * takes an item config and renders the ReactNode for it
 *
 * @param item the item to render
 * @returns a ReactNode to render
 */
function renderItem(item: AvailableFilterItem) {
	switch (item.type) {
		case "group": {
			return (
				<CommandMultiGroup
					key={item.heading}
					heading={item.heading}
					w-filter-group=""
				>
					{item.items.map(renderItem)}
				</CommandMultiGroup>
			);
		}
		case "checkbox-item": {
			return (
				<CommandMultiCheckboxItem
					key={item.value}
					value={item.value}
					onSelect={item?.onItemClick}
					onCheckboxClick={item?.onCheckboxItemClick}
					w-filter-checkbox-item=""
				>
					<Flex
						align="center"
						justify="between"
						width="100%"
						className="flex-1"
					>
						<Flex align="center" gap="2">
							{item.start}
							{item.text}
						</Flex>
						{item.end}
					</Flex>
				</CommandMultiCheckboxItem>
			);
		}
		case "item": {
			return (
				<CommandMultiItem
					key={item.value}
					value={item.value}
					onSelect={item.onItemClick}
					w-filter-item=""
				>
					{item.start}
					{item.text}
					{item.end}
				</CommandMultiItem>
			);
		}
		case "separator": {
			if (item.separator) {
				return <CommandMultiSeparator key={item.key} w-filter-separator="" />;
			}

			return null;
		}
	}
}

/**
 * filters the items based on the checked item value
 */
function sortItems(
	selectedItems: string[] = [],
	items: FilterProps["items"],
): {
	checked: FilterProps["items"];
	unchecked: FilterProps["items"];
	itemsUnchecked: number;
} {
	const checked: FilterProps["items"] = [];
	const unchecked: FilterProps["items"] = [];
	let itemsUnchecked = 0;

	function sort(i: AvailableFilterItem) {
		switch (i.type) {
			case "group": {
				i.items.forEach(sort);
				break;
			}
			case "separator": {
				unchecked.push(i);
				break;
			}
			case "item": {
				unchecked.push(i);
				break;
			}
			case "checkbox-item": {
				if (selectedItems.includes(i.value)) {
					checked.push(i);
					break;
				}
				itemsUnchecked += 1;
				unchecked.push(i);
				break;
			}
		}
	}

	items.forEach(sort);

	return {
		checked,
		unchecked,
		itemsUnchecked,
	};
}

/* -------------------------------------------------------------------------------------
 * Filter
 * -------------------------------------------------------------------------------------*/
type AvailableFilterItem = FilterItem | FilterGroup | FilterSeparator;

type FilterProps = {
	defaultSelectedItems?: CommandMultiProps["defaultSelectedItems"];
	emptyText?: string;
	items: AvailableFilterItem[];
	label?: string;
	onSelectedItemsChange?: CommandMultiProps["onSelectedItemsChange"];
	placeholder: string;
};

function Filter({
	defaultSelectedItems = [],
	emptyText,
	items: itemsProp,
	label,
	onSelectedItemsChange,
	placeholder,
}: FilterProps) {
	/**
	 * tracks the currently selected items in the list
	 */
	const [selectedItems, setSelectedItems] =
		useState<string[]>(defaultSelectedItems);

	/**
	 * the items rendered in the list based on whether or not they are
	 * checked when the component first renders
	 */
	const [items] = useState(() => {
		return sortItems(selectedItems, itemsProp);
	});

	/**
	 * handles calling onSelectedItemsChange when the items change
	 */
	useEffect(() => {
		onSelectedItemsChange?.(selectedItems);
	}, [selectedItems, onSelectedItemsChange]);

	return (
		<CommandMulti
			defaultSelectedItems={selectedItems}
			onSelectedItemsChange={setSelectedItems}
			label={label}
			size="2"
			w-filter=""
		>
			<CommandMultiTextField>
				<CommandMultiTextFieldInput attributes={{ placeholder }} />
			</CommandMultiTextField>
			<CommandMultiList>
				<CommandMultiEmpty>
					<Flex justify="center" className="p-2">
						{emptyText ?? "No results found"}
					</Flex>
				</CommandMultiEmpty>
				{items.checked.length > 0 && (
					<>
						{items.checked.map(renderItem)}
						{items.itemsUnchecked > 0 && <CommandMultiSeparator />}
					</>
				)}
				{items.unchecked.map(renderItem)}
			</CommandMultiList>
		</CommandMulti>
	);
}

export { Filter, FilterItemCount };
export type { FilterProps, FilterItemCountProps };
