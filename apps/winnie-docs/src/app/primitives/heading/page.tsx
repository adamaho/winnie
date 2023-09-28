import { Flex } from "winnie-react/flex";
import { Heading } from "winnie-react/heading";

export default function Page() {
	return (
		<Flex align="center" className="h-full w-full" justify="center" gap="4">
			<Flex align="center" justify="center" className="background-polka">
				<Heading>The Quick Brown Fox</Heading>
			</Flex>
		</Flex>
	);
}
