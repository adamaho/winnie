"use client";

import {
	CommandMulti,
	CommandMultiCheckboxItem,
	CommandMultiEmpty,
	CommandMultiList,
	CommandMultiTextFieldInput,
} from "winnie-react/command-multi";

import { Avatar } from "./avatar";

export function Demo() {
	return (
		<CommandMulti size="1">
			<CommandMultiTextFieldInput attributes={{ placeholder: "Assignee" }} />
			<CommandMultiList>
				<CommandMultiEmpty className="command-multi-demo-empty">
					No Assignees found
				</CommandMultiEmpty>
				{[
					["George Springer", "purple"],
					["Bo Bichette", "yellow"],
					["Valdimir Guererro Jr.", "green"],
					["Brandon Belt", "blue"],
					["Dalton Varsho", "pink"],
				].map((n) => {
					return (
						<CommandMultiCheckboxItem
							value={n[0].toLocaleLowerCase()}
							key={n[0]}
						>
							<Avatar name={n[0]} color={n[1]} />
							{n[0]}
						</CommandMultiCheckboxItem>
					);
				})}
			</CommandMultiList>
		</CommandMulti>
	);
}
