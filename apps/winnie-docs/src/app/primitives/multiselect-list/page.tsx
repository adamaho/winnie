import { Flex } from "winnie-react/flex";
import {
	MultiSelectList,
	MultiSelectListContent,
	MultiSelectListInput,
	MultiSelectListItem,
} from "winnie-react/multiselect-list";

import "./page.css";

export default function Page() {
	return (
		<Flex align="center" className="h-full w-full" justify="center" gap="4">
			<Flex align="center" justify="center" className="background-polka">
				<div className="multiselect-list-demo-container">
					<MultiSelectList>
						<MultiSelectListInput attributes={{ placeholder: "Assignee" }} />
						<MultiSelectListContent>
							<MultiSelectListItem>Current User</MultiSelectListItem>
							<MultiSelectListItem>Adam Aho</MultiSelectListItem>
							<MultiSelectListItem>Bryanne Goad</MultiSelectListItem>
							<MultiSelectListItem>Curtis Knight</MultiSelectListItem>
							<MultiSelectListItem>Brad Dudeck</MultiSelectListItem>
						</MultiSelectListContent>
					</MultiSelectList>
				</div>
			</Flex>
		</Flex>
	);
}
