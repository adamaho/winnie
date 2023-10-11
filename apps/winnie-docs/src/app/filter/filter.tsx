"use client";

import { type MouseEvent } from "react";

import { Flex } from "winnie-react/flex";

import { FilterProvider } from "./filter-provider";
import { PredicateDropdown } from "./predicate";
import { RemoveFilterButton } from "./remove";
import { Subject } from "./subject";
import {
	ValueDropdown,
	ValueDropdownContent,
	ValueDropdownList,
	ValueDropdownTrigger,
} from "./value";

import "./filter.css";

type FilterProps = {
	onRemoveClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

export function Filter(props: FilterProps) {
	return (
		<FilterProvider>
			<Flex align="center" gap="2" className="filter">
				<Subject />
				<PredicateDropdown />
				<ValueDropdown>
					<ValueDropdownTrigger className="value-dropdown-trigger">
						{({ text }) => {
							return text;
						}}
					</ValueDropdownTrigger>
					<ValueDropdownContent>
						<ValueDropdownList />
					</ValueDropdownContent>
				</ValueDropdown>
				<RemoveFilterButton onClick={props.onRemoveClick} />
			</Flex>
		</FilterProvider>
	);
}
