import { Flex } from "winnie-react/flex";

import { DropdownMenuDemo } from "./demo";

export default function Page() {
	return (
		<Flex align="center" className="h-full w-full" justify="center">
			<Flex
				align="center"
				justify="center"
				gap="4"
				className="background-polka"
			>
				<DropdownMenuDemo />
			</Flex>
		</Flex>
	);
}
