"use client";

import { useState } from "react";

import { Focus, ListFilter } from "lucide-react";

import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "winnie-react";
import { Flex } from "winnie-react/flex";

import { Filter } from "./filter";

export function FilterBar() {
	const [filters, setFilters] = useState<string[]>([]);

	return (
		<Flex align="center" gap="4">
			<DropdownMenu>
				<DropdownMenuTrigger displayAsChild>
					<Button variant="dotted" color="gray">
						<ListFilter />
						Add Filter
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent
					align="start"
					onCloseAutoFocus={(e) => e.preventDefault()}
				>
					<DropdownMenuItem
						onSelect={() =>
							setFilters((v) => [...v, `filter-${crypto.randomUUID()}`])
						}
					>
						<Focus /> Focus
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
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
