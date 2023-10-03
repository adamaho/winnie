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
				<Kbd>control</Kbd>
				<Kbd>shift</Kbd>
				<Kbd size="small">A</Kbd>
			</Flex>
		</Flex>
	);
}
