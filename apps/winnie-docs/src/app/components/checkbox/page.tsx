import { Checkbox } from "winnie-react/checkbox";
import { Flex } from "winnie-react/flex";
import { Text } from "winnie-react/text";

export default function Page() {
	return (
		<Flex align="center" className="h-full w-full" justify="center" gap="4">
			<Flex
				align="center"
				justify="center"
				gap="2"
				className="background-polka"
			>
				<Checkbox attributes={{ id: "terms" }} />
				<Text displayAs="label" attributes={{ htmlFor: "terms" }}>
					This is some text
				</Text>
			</Flex>
		</Flex>
	);
}
