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
		<MultiSelectList size="small">
			<MultiSelectListInput attributes={{ placeholder: "Assignee" }} />
			<MultiSelectListContent>
				<MultiSelectListEmpty>No Assignees found</MultiSelectListEmpty>
				{[
					["George Springer", "purple"],
					["Bo Bichette", "yellow"],
					["Valdimir Guererro Jr.", "green"],
					["Brandon Belt", "blue"],
					["Dalton Varsho", "pink"],
				].map((n) => {
					return (
						<MultiSelectListItem value={n[0].toLocaleLowerCase()} key={n[0]}>
							<Avatar name={n[0]} color={n[1]} />
							{n[0]}
						</MultiSelectListItem>
					);
				})}
			</MultiSelectListContent>
		</MultiSelectList>
	);
}
