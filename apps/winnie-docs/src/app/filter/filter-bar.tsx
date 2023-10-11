"use client";

import { useState } from "react";

import { Focus, ListFilter } from "lucide-react";

import { Button } from "winnie-react/button";
import {
	Command,
	CommandItem,
	CommandList,
	CommandTextFieldInput,
} from "winnie-react/command";
import { Flex } from "winnie-react/flex";
import { Popover, PopoverContent, PopoverTrigger } from "winnie-react/popover";

import { Filter } from "./filter";

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
									setFilters((v) => [...v, `filter-${crypto.randomUUID()}`]);
									setOpen(false);
								}}
							>
								<Focus /> Focus
							</CommandItem>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
			{filters.map((f) => {
				return (
					<Filter
						key={f}
						onRemoveClick={() =>
							setFilters((curr) => [...curr].filter((filter) => filter !== f))
						}
					/>
				);
			})}
		</Flex>
	);
}
