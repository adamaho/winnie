"use client";

import { BarChart } from "lucide-react";

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

import { FilterProps } from "./common-types";

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

export function PriorityFilter(props: FilterProps) {
	return (
		<FilterProvider>
			<Flex align="center" gap="2" className="filter">
				<Subject>
					<BarChart />
					Priority
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
