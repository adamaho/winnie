import { Flex } from "winnie-react/flex";

import { Demo } from "./demo";

import "./page.css";

export default function Page() {
	return (
		<Flex align="center" className="h-full w-full" justify="center" gap="4">
			<Flex align="center" justify="center" className="background-polka">
				<div className="multiselect-list-demo-container">
					<Demo />
				</div>
			</Flex>
		</Flex>
	);
}
