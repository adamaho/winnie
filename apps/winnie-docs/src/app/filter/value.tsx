"use client";

import { useMemo, useState } from "react";

import {
	CommandMulti,
	CommandMultiCheckboxItem,
	CommandMultiList,
	CommandMultiSeparator,
	CommandMultiTextFieldInput,
} from "winnie-react";
import { Popover, PopoverContent, PopoverTrigger } from "winnie-react/popover";

import { useFilterContext } from "./filter-provider";

import "./value.css";

type Item = {
	value: string;
	text: string;
};

const items = new Array(5).fill(0).map((_, i) => {
	return {
		value: `item-${i + 1}`,
		text: `Item ${i + 1}`,
	};
}) satisfies Item[];

function ValueDropdownContent() {
	/**
	 * subscribe to filter context
	 */
	const { value, setValue } = useFilterContext();

	/**
	 * sorts the items when the component first mounts
	 */
	const [sortedItems] = useState(() => {
		const checked: Item[] = [];
		const unchecked: Item[] = [];

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

export function ValueDropdown() {
	/**
	 * subscribe to filter context
	 */
	const { value } = useFilterContext();

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

		return items.find((i) => i.value === value[0])?.text;
	}, [value]);

	return (
		<Popover>
			<PopoverTrigger
				className="value-dropdown-trigger"
				data-empty={value.length === 0}
			>
				{text}
			</PopoverTrigger>
			<PopoverContent align="start">
				<ValueDropdownContent />
			</PopoverContent>
		</Popover>
	);
}
