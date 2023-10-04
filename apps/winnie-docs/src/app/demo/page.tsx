import { Flex } from "winnie-react/flex";

import { Filter } from "./filter";

export default function Page() {
	return (
		<Flex align="center" className="h-full w-full" justify="center" gap="4">
			<Flex align="center" justify="center" gap="2">
				<Filter />
			</Flex>
		</Flex>
	);
}
