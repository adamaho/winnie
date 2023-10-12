import { Flex } from "winnie-react/flex";

import { FilterBar } from "./filter-bar/filter-bar";

export default function Page() {
	return (
		<Flex align="center" className="h-full w-full" justify="center">
			<Flex
				align="center"
				justify="center"
				gap="4"
				className="background-polka"
			>
				<FilterBar />
			</Flex>
		</Flex>
	);
}
