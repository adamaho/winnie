import { Button } from "winnie-react/button";
import { Flex } from "winnie-react/flex";

export default function Page() {
	return (
		<Flex align="center" className="h-full w-full" justify="center">
			<Flex
				align="center"
				justify="center"
				gap="4"
				className="background-polka"
			>
				<Button>Button</Button>
				<Button variant="soft">Button</Button>
				<Button variant="ghost">Button</Button>
			</Flex>
		</Flex>
	);
}
