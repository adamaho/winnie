"use client";

import { useMemo, useState } from "react";

import { CircleSlashed, Plus } from "lucide-react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "winnie-react";

import { useFilterContext } from "./filter-provider";

import "./predicate.css";

export function PredicateDropdown() {
	/**
	 * tracks the predicate value
	 */
	const [predicate, setPredicate] = useState<"IN" | "NIN">("IN");

	/**
	 * subscribe to filter context
	 */
	const { value } = useFilterContext();

	/**
	 * trigger text
	 */
	const text = useMemo(() => {
		if (predicate === "IN") {
			if (value.length > 1) {
				return "is any";
			}

			return "is";
		}

		if (predicate === "NIN") {
			if (value.length > 1) {
				return "is not any";
			}

			return "is not";
		}
	}, [value, predicate]);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="predicate-dropdown-trigger">
				{text}
			</DropdownMenuTrigger>
			<DropdownMenuContent align="start">
				<DropdownMenuItem onSelect={() => setPredicate("IN")}>
					<Plus /> {value.length > 1 ? "is any" : "is"}
				</DropdownMenuItem>
				<DropdownMenuItem onSelect={() => setPredicate("NIN")}>
					<CircleSlashed /> {value.length > 1 ? "is not any" : "is not"}
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
