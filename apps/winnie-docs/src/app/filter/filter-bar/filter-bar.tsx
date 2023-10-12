"use client";

import { useEffect, useState } from "react";

import { Award, Focus, ListFilter } from "lucide-react";

import { Button } from "winnie-react/button";
import {
	Command,
	CommandEmpty,
	CommandItem,
	CommandList,
	CommandTextField,
	CommandTextFieldInput,
} from "winnie-react/command";
import { Flex } from "winnie-react/flex";
import { Kbd } from "winnie-react/kbd";
import { Popover, PopoverContent, PopoverTrigger } from "winnie-react/popover";

import { PlayerFilter } from "./player-filter";
import { PositionFilter } from "./position-filter";

/* -------------------------------------------------------------------------------------
 * Constants
 * -------------------------------------------------------------------------------------*/
const items = new Array(5).fill(0).map((_, i) => {
	return {
		value: `item-${i + 1}`,
		text: `Item ${i + 1}`,
	};
});

const FILTER_MAP = {
	player: PlayerFilter,
	position: PositionFilter,
} as const;

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

	/**
	 * attach a keyboard event handler to open the filter
	 */
	useEffect(() => {
		function handleKeyDown(e: KeyboardEvent) {
			if (e.key === "f") {
				e.preventDefault();
				setOpen(true);
			}
		}

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);

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
						<CommandTextField>
							<CommandTextFieldInput attributes={{ placeholder: "Filter" }} />
							<Kbd>F</Kbd>
						</CommandTextField>
						<CommandList>
							<CommandEmpty className="p-2">
								<Flex justify="center">No filters found</Flex>
							</CommandEmpty>
							<CommandItem
								onSelect={() => {
									setFilters((v) => [...v, `player-${crypto.randomUUID()}`]);
									setOpen(false);
								}}
							>
								<Award /> Player
							</CommandItem>
							<CommandItem
								onSelect={() => {
									setFilters((v) => [...v, `position-${crypto.randomUUID()}`]);
									setOpen(false);
								}}
							>
								<Focus /> Position
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
