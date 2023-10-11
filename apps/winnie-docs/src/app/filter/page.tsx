import { Flex } from "winnie-react/flex";

import { Filter } from "./filter";

export default function Page() {
	return (
		<Flex align="center" className="h-full w-full" justify="center">
			<Flex
				align="center"
				justify="center"
				gap="4"
				className="background-polka"
			>
				<Filter />
			</Flex>
		</Flex>
	);
}
