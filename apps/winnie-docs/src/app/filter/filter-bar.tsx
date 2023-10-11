"use client";

import { useState } from "react";

import { Focus, ListFilter, UserCircle } from "lucide-react";

import { Button } from "winnie-react/button";
import {
	Command,
	CommandItem,
	CommandList,
	CommandTextFieldInput,
} from "winnie-react/command";
import { Flex } from "winnie-react/flex";
import { Popover, PopoverContent, PopoverTrigger } from "winnie-react/popover";

import { AssigneeFilter } from "./assignee-filter";
import { FilterProps } from "./common-types";
import { FocusFilter } from "./focus-filter";

/* -------------------------------------------------------------------------------------
 * Constants
 * -------------------------------------------------------------------------------------*/
const items = new Array(5).fill(0).map((_, i) => {
	return {
		value: `item-${i + 1}`,
		text: `Item ${i + 1}`,
	};
});

const FILTER_MAP: Record<
	"assignee" | "focus",
	(props: FilterProps) => JSX.Element
> = {
	assignee: AssigneeFilter,
	focus: FocusFilter,
};

/* -------------------------------------------------------------------------------------
 * FilterBar
 * -------------------------------------------------------------------------------------*/
export function FilterBar() {
	/**
	 * tracks the number of filters that have been added
	 */
	const [filters, setFilters] = useState<string[]>([]);

	/**
	 * tracks the open state of the add filter popover
	 */
	const [open, setOpen] = useState(false);

	return (
		<Flex align="center" gap="4">
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger displayAsChild>
					<Button variant="dotted" color="gray">
						<ListFilter />
						Add Filter
					</Button>
				</PopoverTrigger>
				<PopoverContent align="start">
					<Command>
						<CommandTextFieldInput attributes={{ placeholder: "Filter" }} />
						<CommandList>
							<CommandItem
								onSelect={() => {
									setFilters((v) => [...v, `focus-${crypto.randomUUID()}`]);
									setOpen(false);
								}}
							>
								<Focus /> Focus
							</CommandItem>
							<CommandItem
								onSelect={() => {
									setFilters((v) => [...v, `assignee-${crypto.randomUUID()}`]);
									setOpen(false);
								}}
							>
								<UserCircle /> Assignee
							</CommandItem>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
			{filters.map((f) => {
				const [filterType] = f.split("-");
				const Filter = FILTER_MAP[filterType as keyof typeof FILTER_MAP];
				return (
					<Filter
						key={f}
						items={items}
						onRemoveClick={() =>
							setFilters((curr) => [...curr].filter((filter) => filter !== f))
						}
					/>
				);
			})}
		</Flex>
	);
}
