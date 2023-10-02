"use client";

import {
	MultiSelectList,
	MultiSelectListContent,
	MultiSelectListEmpty,
	MultiSelectListInput,
	MultiSelectListItem,
} from "winnie-react/multiselect-list";

import { Avatar } from "./avatar";

export function Demo() {
	return (
		<MultiSelectList size="small" onValueChange={(v) => console.log(v)}>
			<MultiSelectListInput attributes={{ placeholder: "Assignee" }} />
			<MultiSelectListContent>
				<MultiSelectListEmpty>No Assignees found</MultiSelectListEmpty>
				{[
					"George Springer",
					"Bo Bichette",
					"Valdimir Guererro Jr.",
					"Brandon Belt",
					"Dalton Varsho",
				].map((n) => {
					return (
						<MultiSelectListItem value={n.toLocaleLowerCase()} key={n}>
							<Avatar name={n} />
							{n}
						</MultiSelectListItem>
					);
				})}
			</MultiSelectListContent>
		</MultiSelectList>
	);
}
