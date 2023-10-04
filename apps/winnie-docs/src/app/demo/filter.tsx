"use client";

import { useState, type Dispatch, type SetStateAction } from "react";

import { Focus, ListFilter, Timer, UserCircle2 } from "lucide-react";

import { Button } from "winnie-react/button";
import {
	Command,
	CommandEmpty,
	CommandItem,
	CommandList,
	CommandTextFieldInput,
} from "winnie-react/command";
import {
	CommandMulti,
	CommandMultiCheckboxItem,
	CommandMultiEmpty,
	CommandMultiList,
	CommandMultiTextFieldInput,
} from "winnie-react/command-multi";
import { Popover, PopoverContent, PopoverTrigger } from "winnie-react/popover";

import "./filter.css";

/**
 * I wonder what the proposed filter types should be
 *
 *
 * type: array, date, string, number, which is the type of the value via typeof
 * key: "customer", "assignee", "delivered date"
 * predicate: is any of, is not, is after date, is before date
 * value: [], string, date, etc.
 *
 * - There should be a context that keeps track of all of the active filters
 * - Filters should also denote how much data is matching for each of the provided things
 *
 */

// type FilterItem = {
// 	start: ReactNode;
// 	text: string;
// 	value: string;
// };

// type FilterItemSeparator = boolean;

// type FilterStartPageProps = {
// 	items: (FilterItem | FilterItemSeparator)[];
// };

type FilterPageProps = {
	setPage: Dispatch<SetStateAction<keyof typeof pages>>;
};

function FilterHomePage(props: FilterPageProps) {
	return (
		<Command label="filter" size="1">
			<CommandTextFieldInput attributes={{ placeholder: "Filters..." }} />
			<CommandList>
				<CommandEmpty className="filter-command-empty">
					No results found
				</CommandEmpty>
				<CommandItem
					value="customer"
					onSelect={(value) => props.setPage(value as keyof typeof pages)}
				>
					<UserCircle2 />
					Customer
				</CommandItem>
				<CommandItem
					value="focus"
					onSelect={(value) => props.setPage(value as keyof typeof pages)}
				>
					<Focus />
					Focus
				</CommandItem>
				<CommandItem
					value="meeting_cadence"
					onSelect={(value) => props.setPage(value as keyof typeof pages)}
				>
					<Timer />
					Meeting Cadence
				</CommandItem>
			</CommandList>
		</Command>
	);
}

function FilterCustomerPage() {
	return (
		<CommandMulti
			label="customer"
			size="1"
			className="filter-customers-command"
		>
			<CommandMultiTextFieldInput attributes={{ placeholder: "Customer" }} />
			<CommandMultiList>
				<CommandMultiEmpty className="filter-command-empty">
					No results found
				</CommandMultiEmpty>
				{[
					["Toronto Blue Jays", "toronto_blue_jays_tb"],
					["Minnesota Twins", "minnesota_twins_mt"],
					["New York Yankees", "new_york_yankees_nyy"],
					["Boston Red Sox", "boston_red_sox_bsr"],
					["Texas Rangers", "texas_rangers_tr"],
				].map((t) => {
					return (
						<CommandMultiCheckboxItem key={t[1]} value={t[1]}>
							<UserCircle2 />
							{t[0]}
						</CommandMultiCheckboxItem>
					);
				})}
			</CommandMultiList>
		</CommandMulti>
	);
}

function FilterFocusPage() {
	return (
		<CommandMulti label="focus" size="1" className="filter-focus-command">
			<CommandMultiTextFieldInput attributes={{ placeholder: "Focus" }} />
			<CommandMultiList>
				<CommandMultiEmpty className="filter-command-empty">
					No results found
				</CommandMultiEmpty>
				{[
					["George Springer", "george springer"],
					["Bo Bichette", "bo bichette"],
					["Valdimir Guererro Jr.", "vladimir guererror jr"],
					["Brandon Belt", "brandon belt"],
					["Dalton Varsho", "dalton varsho"],
				].map((t) => {
					return (
						<CommandMultiCheckboxItem key={t[1]} value={t[1]}>
							<Focus />
							{t[0]}
						</CommandMultiCheckboxItem>
					);
				})}
			</CommandMultiList>
		</CommandMulti>
	);
}

function FilterCadencePage() {
	return (
		<CommandMulti
			label="meeting cadence"
			size="1"
			className="filter-cadence-command"
		>
			<CommandMultiTextFieldInput
				attributes={{ placeholder: "Meeting Cadence" }}
			/>
			<CommandMultiList>
				<CommandMultiEmpty className="filter-command-empty">
					No results found
				</CommandMultiEmpty>
				{[
					["Weekly", "weekly"],
					["Bi-weekly", "bi-weekly"],
					["Monthly", "monthly"],
					["Quarterly", "quarterly"],
					["Yearly", "yearly"],
				].map((t) => {
					return (
						<CommandMultiCheckboxItem key={t[1]} value={t[1]}>
							<Timer />
							{t[0]}
						</CommandMultiCheckboxItem>
					);
				})}
			</CommandMultiList>
		</CommandMulti>
	);
}

const pages = {
	home: FilterHomePage,
	customer: FilterCustomerPage,
	focus: FilterFocusPage,
	meeting_cadence: FilterCadencePage,
} as const;

export function Filter() {
	/**
	 * tracks the open state of the popover
	 */
	const [open, setOpen] = useState(false);

	/**
	 * Tracks the current filter page
	 */
	const [page, setPage] = useState<keyof typeof pages>("home");

	/**
	 * Determines which page to render
	 */
	const Page = pages[page];

	/**
	 * handle popover close after animation
	 */
	function handleCloseAfterAnimation() {
		if (!open) {
			setPage("home");
		}
	}

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger displayAsChild>
				<Button color="gray" variant="dotted" size="2">
					<ListFilter />
					Filter
				</Button>
			</PopoverTrigger>
			<PopoverContent
				align="start"
				attributes={{ onAnimationEndCapture: handleCloseAfterAnimation }}
			>
				<Page setPage={setPage} />
			</PopoverContent>
		</Popover>
	);
}
