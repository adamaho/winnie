import { Flex } from "winnie-react/flex";
import { Kbd } from "winnie-react/kbd";

export default function Page() {
	return (
		<Flex align="center" className="h-full w-full" justify="center" gap="4">
			<Flex
				align="center"
				justify="center"
				gap="2"
				className="background-polka"
			>
				<Kbd size="3">control</Kbd>
				<Kbd size="2">shift</Kbd>
				<Kbd size="1">A</Kbd>
			</Flex>
		</Flex>
	);
}
