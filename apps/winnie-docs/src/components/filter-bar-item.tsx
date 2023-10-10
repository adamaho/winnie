"use client";

import {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
	type Dispatch,
	type PropsWithChildren,
	type ReactNode,
	type SetStateAction,
} from "react";

import { CircleSlashed, Plus, Sandwich, X } from "lucide-react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "winnie-react/dropdown-menu";
import { Flex } from "winnie-react/flex";
import { Popover, PopoverContent, PopoverTrigger } from "winnie-react/popover";
import { Text } from "winnie-react/text";

import { Filter, type FilterProps } from "./filter";

/* -------------------------------------------------------------------------------------
 * FilterBarItemContext
 * -------------------------------------------------------------------------------------*/
type StringFilterPredicate = "NOT_EQUAL" | "EQUAL" | "IS_ANY" | "IS_NOT_ANY";
type FilterValue = {
	type: "string";
	predicate: StringFilterPredicate;
	value: string[];
};

type FilterBarItemContextProps = {
	type: "string";
	predicate: StringFilterPredicate;
	setPredicate: Dispatch<SetStateAction<StringFilterPredicate>>;
	setValue: Dispatch<SetStateAction<string[]>>;
	value: string[];
};

const FilterBarItemContext = createContext<FilterBarItemContextProps>({
	type: "string",
	predicate: "EQUAL",
	setPredicate: () => {
		return;
	},
	setValue: () => {
		return;
	},
	value: [],
});

type FilterBarItemProviderProps = {
	onFilterChange?: (value: FilterValue) => void;
};

function FilterBarItemProvider({
	children,
	onFilterChange,
}: PropsWithChildren<FilterBarItemProviderProps>) {
	/**
	 * tracks the current value of the predicate
	 */
	const [predicate, setPredicate] =
		useState<FilterBarItemContextProps["predicate"]>("EQUAL");

	/**
	 * tracks the current value of the filter
	 */
	const [value, setValue] = useState<string[]>([]);

	/**
	 * When the value or predicate changes call the callback
	 */
	useEffect(() => {
		onFilterChange?.({
			type: "string",
			value,
			predicate,
		});
	}, [value, predicate, onFilterChange]);

	return (
		<FilterBarItemContext.Provider
			value={{ type: "string", predicate, setPredicate, setValue, value }}
		>
			{children}
		</FilterBarItemContext.Provider>
	);
}

function useFilterBarItemContext() {
	return useContext(FilterBarItemContext);
}

/* -------------------------------------------------------------------------------------
 * PredicateDropdown
 * -------------------------------------------------------------------------------------*/
const PREDICATE_OPTION_MAP: Record<
	StringFilterPredicate,
	{ text: string; icon: ReactNode; predicate: StringFilterPredicate }
> = {
	EQUAL: {
		predicate: "EQUAL",
		text: "is",
		icon: <Plus />,
	},
	NOT_EQUAL: {
		predicate: "NOT_EQUAL",
		text: "is not",
		icon: <CircleSlashed />,
	},
	IS_ANY: {
		predicate: "IS_ANY",
		text: "is any",
		icon: <Plus />,
	},
	IS_NOT_ANY: {
		predicate: "IS_NOT_ANY",
		text: "is not any",
		icon: <CircleSlashed />,
	},
};

function PredicateDropdown() {
	/**
	 * Subscribe to filter bar item context
	 */
	const { predicate, setPredicate, value } = useFilterBarItemContext();

	/**
	 * compute the available options based on the value
	 */
	const options = useMemo(() => {
		switch (true) {
			case value.length > 1: {
				return [PREDICATE_OPTION_MAP.IS_ANY, PREDICATE_OPTION_MAP.IS_NOT_ANY];
			}
			default: {
				return [PREDICATE_OPTION_MAP.EQUAL, PREDICATE_OPTION_MAP.NOT_EQUAL];
			}
		}
	}, [value]);

	/**
	 * Update the predicate based on the value change
	 */
	useEffect(() => {
		switch (true) {
			case value.length > 1: {
				setPredicate("IS_ANY");
				break;
			}
			default: {
				setPredicate("EQUAL");
			}
		}
	}, [value, setPredicate]);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				{PREDICATE_OPTION_MAP[predicate].text}
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{options.map((o) => {
					return (
						<DropdownMenuItem
							key={o.text}
							onSelect={() => setPredicate(o.predicate)}
						>
							{o.icon}
							{o.text}
						</DropdownMenuItem>
					);
				})}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

/* -------------------------------------------------------------------------------------
 * MultiValueDropdown
 * -------------------------------------------------------------------------------------*/
type MultiValueDropdownProps = {
	items: FilterProps["items"];
	triggerText: string;
};

function MultiValueDropdown({ items, triggerText }: MultiValueDropdownProps) {
	/**
	 * tracks the open state of the popover
	 */
	const [open, setOpen] = useState(false);

	/**
	 * subscribe to filter bar item context
	 */
	const { value, setValue } = useFilterBarItemContext();

	/**
	 * handles event when an item is clicked
	 */
	function onItemClick() {
		setOpen(false);
	}

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger>
				{value.length} {triggerText}
			</PopoverTrigger>
			<PopoverContent align="start">
				<Filter
					placeholder="Cheese"
					defaultSelectedItems={value}
					onSelectedItemsChange={setValue}
					items={items.map((i) => {
						return {
							...i,
							onItemClick,
						};
					})}
				/>
			</PopoverContent>
		</Popover>
	);
}

/* -------------------------------------------------------------------------------------
 * FilterBarItem
 * -------------------------------------------------------------------------------------*/
type FilterBarItemProps = {
	accessor: string;
	items: FilterProps["items"];
	onFilterChange?: (value: FilterValue) => void;
};

export function FilterBarItem({
	accessor,
	items,
	onFilterChange,
}: FilterBarItemProps) {
	return (
		<FilterBarItemProvider onFilterChange={onFilterChange}>
			<Flex align="center">
				<Flex align="center">
					<Sandwich />
					<Text>{accessor}</Text>
				</Flex>
				<PredicateDropdown />
				<MultiValueDropdown triggerText={accessor} items={items} />
				<button>
					<X />
				</button>
			</Flex>
		</FilterBarItemProvider>
	);
}
