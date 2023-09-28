import { Flex } from "winnie-react/flex";
import { Text } from "winnie-react/text";

export default function Page() {
	return (
		<Flex
			align="center"
			className="h-full w-full"
			direction="column"
			justify="center"
			gap="4"
		>
			<Text weight="light">The quick brown fox jumps over the lazy dog</Text>
			<Text weight="normal" align="center">
				The quick brown fox jumps over the lazy dog
			</Text>
			<Text weight="medium" align="right">
				The quick brown fox jumps over the lazy dog
			</Text>
			<Text weight="bold">The quick brown fox jumps over the lazy dog</Text>
			<Text weight="extra-bold">
				The quick brown fox jumps over the lazy dog
			</Text>
		</Flex>
	);
}
