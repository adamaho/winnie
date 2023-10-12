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
	type ValueItem,
} from "./value";

import "./filter.css";

type FilterProps = {
	items: ValueItem[];
	onRemoveClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

/**
 * Filter
 * FilterSubject
 * FilterPredicate
 * FilterValue
 * FilterValueTrigger
 * FilterValueContent
 * FilterValueList
 * FilterValueItem
 * FilterRemove
 */

export function Filter(props: FilterProps) {
	return (
		<FilterProvider>
			<Flex align="center" gap="2" className="filter">
				<Subject />
				<PredicateDropdown />
				<ValueDropdown defaultOpen items={props.items}>
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