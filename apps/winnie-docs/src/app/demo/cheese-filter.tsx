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

/* -------------------------------------------------------------------------------------
 * PredicateDropdown
 * -------------------------------------------------------------------------------------*/
function PredicateDropdown() {
	const [predicate, setPredicate] = useState<"NOT_EQUAL" | "EQUAL">("EQUAL");

	const buttonText = useMemo(() => {
		switch (predicate) {
			case "EQUAL": {
				return "is";
			}
			case "NOT_EQUAL": {
				return "is not";
			}
		}
	}, [predicate]);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>{buttonText}</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem onSelect={() => setPredicate("EQUAL")}>
					<Plus /> is
				</DropdownMenuItem>
				<DropdownMenuItem onSelect={() => setPredicate("NOT_EQUAL")}>
					<CircleSlashed /> is not
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

/* -------------------------------------------------------------------------------------
 * CheeseFilter
 * -------------------------------------------------------------------------------------*/
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
			<PredicateDropdown />
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
