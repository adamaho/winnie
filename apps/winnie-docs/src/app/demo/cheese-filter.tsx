"use client";

import { useMemo, useState } from "react";

import { CircleSlashed, Plus, Sandwich, X } from "lucide-react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "winnie-react/dropdown-menu";
import { Flex } from "winnie-react/flex";
import { Popover, PopoverContent, PopoverTrigger } from "winnie-react/popover";
import { Text } from "winnie-react/text";

import {
	Filter,
	FilterItemCount,
	type FilterProps,
} from "../../components/filter";

export function CheeseFilter() {
	/**
	 * tracks the open state of the popover
	 */
	const [open, setOpen] = useState(false);

	/**
	 * tracks state of the filter
	 */
	const [selectedItems, setSelectedItems] = useState([
		"ricotta",
		"veganmozzarella",
	]);

	const items = useMemo(() => {
		/**
		 * handles event when an item is clicked
		 */
		function onItemClick() {
			setOpen(false);
		}

		return [
			{
				type: "checkbox-item",
				start: <Sandwich />,
				text: "Mozzarella",
				value: "mozzarella",
				onItemClick,
			},
			{
				type: "checkbox-item",
				start: <Sandwich />,
				text: "Feta",
				value: "feta",
				onItemClick,
			},
			{
				type: "checkbox-item",
				start: <Sandwich />,
				end: <FilterItemCount count={2} label="pizzas" />,
				text: "Ricotta",
				value: "ricotta",
				onItemClick,
			},
			{
				type: "checkbox-item",
				start: <Sandwich />,
				text: "Vegan Mozzarella",
				value: "veganmozzarella",
				onItemClick,
			},
		] satisfies FilterProps["items"];
	}, []);

	return (
		<Flex align="center">
			<Flex align="center">
				<Sandwich />
				<Text>Cheese</Text>
			</Flex>
			<DropdownMenu>
				<DropdownMenuTrigger>is equal to</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem>
						<Plus /> is equal to
					</DropdownMenuItem>
					<DropdownMenuItem>
						<CircleSlashed /> is not equal to
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger>{selectedItems.length} cheese</PopoverTrigger>
				<PopoverContent align="start">
					<Filter
						placeholder="Cheese"
						defaultSelectedItems={selectedItems}
						onSelectedItemsChange={setSelectedItems}
						items={items}
					/>
				</PopoverContent>
			</Popover>
			<button>
				<X />
			</button>
		</Flex>
	);
}
