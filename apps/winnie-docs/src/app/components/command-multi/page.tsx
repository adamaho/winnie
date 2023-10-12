import {
	CommandMulti,
	CommandMultiCheckboxItem,
	CommandMultiEmpty,
	CommandMultiList,
	CommandMultiTextField,
	CommandMultiTextFieldInput,
} from "winnie-react/command-multi";
import { Flex } from "winnie-react/flex";

import { Avatar } from "~/components";

import "./page.css";

export default function Page() {
	return (
		<Flex align="center" className="h-full w-full" justify="center" gap="4">
			<Flex align="center" justify="center" className="background-polka">
				<div className="command-multi-demo-container">
					<CommandMulti defaultSelectedItems={["brandon belt"]}>
						<CommandMultiTextField>
							<CommandMultiTextFieldInput
								attributes={{ placeholder: "Assignee" }}
							/>
						</CommandMultiTextField>
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
				</div>
			</Flex>
		</Flex>
	);
}
