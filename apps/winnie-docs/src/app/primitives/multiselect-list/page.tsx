import { colors } from "~/constants";

import { Flex } from "winnie-react/flex";
import {
	MultiSelectList,
	MultiSelectListContent,
	MultiSelectListInput,
	MultiSelectListItem,
} from "winnie-react/multiselect-list";

import "./page.css";

/* -------------------------------------------------------------------------------------
 * Utils
 * -------------------------------------------------------------------------------------*/
function getRandomColorIndex() {
	return Math.ceil(Math.random() * (colors.length - 1));
}

/* -------------------------------------------------------------------------------------
 * Avatar
 * -------------------------------------------------------------------------------------*/
type AvatarProps = {
	name: string;
};

function Avatar(props: AvatarProps) {
	return (
		<Flex
			align="center"
			justify="center"
			w-theme=""
			w-radius-scale="round"
			w-scale="90"
			w-accent-color={colors[getRandomColorIndex()]}
			className="avatar"
		>
			{props.name.slice(0, 2)}
		</Flex>
	);
}

/* -------------------------------------------------------------------------------------
 * Page
 * -------------------------------------------------------------------------------------*/
export default function Page() {
	return (
		<Flex align="center" className="h-full w-full" justify="center" gap="4">
			<Flex align="center" justify="center" className="background-polka">
				<div className="multiselect-list-demo-container">
					<MultiSelectList>
						<MultiSelectListInput attributes={{ placeholder: "Assignee" }} />
						<MultiSelectListContent>
							{[
								"George Springer",
								"Bo Bichette",
								"Valdimir Guererro Jr.",
								"Brandon Belt",
								"Dalton Varsho",
							].map((n) => {
								return (
									<MultiSelectListItem value={n} key={n}>
										<Avatar name={n} />
										{n}
									</MultiSelectListItem>
								);
							})}
						</MultiSelectListContent>
					</MultiSelectList>
				</div>
			</Flex>
		</Flex>
	);
}
