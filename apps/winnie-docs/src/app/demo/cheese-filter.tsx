"use client";

import { useState } from "react";

import { Sandwich, X } from "lucide-react";

import { Button } from "winnie-react/button";
import { Popover, PopoverContent, PopoverTrigger } from "winnie-react/popover";

import { Filter, FilterItemCount, type FilterProps } from "./filter";

const items = [
	{
		type: "checkbox-item",
		start: <Sandwich />,
		text: "Mozzarella",
		value: "mozzarella",
	},
	{
		type: "checkbox-item",
		start: <Sandwich />,
		text: "Feta",
		value: "feta",
	},
	{
		type: "checkbox-item",
		start: <Sandwich />,
		end: <FilterItemCount count={2} label="pizzas" />,
		text: "Ricotta",
		value: "ricotta",
	},
	{
		type: "checkbox-item",
		start: <Sandwich />,
		text: "Vegan Mozzarella",
		value: "veganmozzarella",
	},
	{
		type: "separator",
		separator: true,
		key: "separator-1",
	},
	{
		type: "item",
		start: <X />,
		text: "Clear Filters",
		value: "clear filters",
	},
] satisfies FilterProps["items"];

export function CheeseFilter() {
	/**
	 * tracks state of the filter
	 */
	const [selectedItems, setSelectedItems] = useState([
		"ricotta",
		"veganmozzarella",
	]);

	return (
		<Popover>
			<PopoverTrigger displayAsChild>
				<Button color="gray" variant="dotted">
					Cheese
				</Button>
			</PopoverTrigger>
			<PopoverContent>
				<Filter
					placeholder="Cheese"
					defaultSelectedItems={selectedItems}
					onSelectedItemsChange={setSelectedItems}
					items={items}
				/>
			</PopoverContent>
		</Popover>
	);
}
