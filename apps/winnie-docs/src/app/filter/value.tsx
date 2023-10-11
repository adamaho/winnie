"use client";

import {
	CommandMulti,
	CommandMultiCheckboxItem,
	CommandMultiList,
	CommandMultiTextFieldInput,
} from "winnie-react";
import { Popover, PopoverContent, PopoverTrigger } from "winnie-react/popover";

import "./value.css";

import { useMemo } from "react";

import { useFilterContext } from "./filter-provider";

const items = new Array(5).fill(0).map((_, i) => {
	return {
		value: `item-${i + 1}`,
		text: `Item ${i + 1}`,
	};
});

export function ValueDropdown() {
	/**
	 * subscribe to filter context
	 */
	const { value, setValue } = useFilterContext();

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
				<CommandMulti
					defaultSelectedItems={value}
					onSelectedItemsChange={(value) => setValue(value)}
				>
					<CommandMultiTextFieldInput attributes={{ placeholder: "Item" }} />
					<CommandMultiList>
						{items.map((i) => {
							return (
								<CommandMultiCheckboxItem key={i.value} value={i.value}>
									{i.text}
								</CommandMultiCheckboxItem>
							);
						})}
					</CommandMultiList>
				</CommandMulti>
			</PopoverContent>
		</Popover>
	);
}
