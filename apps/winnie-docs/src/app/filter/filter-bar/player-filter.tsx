"use client";

import { useMemo, useRef } from "react";

import { Award } from "lucide-react";

import { Flex } from "winnie-react/flex";

import { FilterProps } from "../common-types";
import { FilterProvider, useFilterContext } from "../filter-provider";
import { PredicateDropdown } from "../predicate";
import { RemoveFilterButton } from "../remove";
import { Subject } from "../subject";

import "./filter.css";

import {
	FilterArrayValue,
	FilterArrayValueCheckboxItem,
	FilterArrayValueContent,
	FilterArrayValueList,
	FilterArrayValueTrigger,
} from "../filter-array-value";

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

function PlayerValue() {
	/**
	 * subscribe to filter context
	 */
	const { value } = useFilterContext();

	/**
	 * fetch data here and format items
	 *
	 * note: this is a simple example
	 */
	const items = useRef([
		{ text: "Auston Matthews", value: "auston matthews" },
		{ text: "John Tavares", value: "john tavares" },
		{ text: "Max Domi", value: "max domi" },
		{ text: "Mitch Marner", value: "mitch marner" },
		{ text: "William Nylander", value: "william nylander" },
	]);

	/**
	 * computes the trigger text
	 */
	const triggerText = useMemo(() => {
		if (value.length > 1 && value.length < 3) {
			return value
				.map((v) => items.current.find((i) => i.value === v)?.text)
				.join(", ");
		}

		if (value.length >= 3) {
			return `${value.length} Players`;
		}

		if (value.length === 0) {
			return "Select Player";
		}

		return (
			items.current.find((i) => i.value === value[0])?.text ?? "Select Player"
		);
	}, [value, items]);

	return (
		<FilterArrayValue defaultOpen>
			<FilterArrayValueTrigger>{triggerText}</FilterArrayValueTrigger>
			<FilterArrayValueContent>
				<FilterArrayValueList placeholder="Player">
					{items.current.map((item) => {
						return (
							<FilterArrayValueCheckboxItem key={item.value} value={item.value}>
								{item.text}
							</FilterArrayValueCheckboxItem>
						);
					})}
				</FilterArrayValueList>
			</FilterArrayValueContent>
		</FilterArrayValue>
	);
}

export function PlayerFilter(props: FilterProps) {
	return (
		<FilterProvider>
			<Flex align="center" gap="2" className="filter">
				<Subject>
					<Award />
					Player
				</Subject>
				<PredicateDropdown />
				<PlayerValue />
				<RemoveFilterButton onClick={props.onRemoveClick} />
			</Flex>
		</FilterProvider>
	);
}
