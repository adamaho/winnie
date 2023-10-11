"use client";

import { Focus } from "lucide-react";

import { Flex } from "winnie-react/flex";

import { type FilterProps } from "./common-types";
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

export function FocusFilter(props: FilterProps) {
	return (
		<FilterProvider>
			<Flex align="center" gap="2" className="filter">
				<Subject>
					<Focus />
					Focus
				</Subject>
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
