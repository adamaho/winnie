import { Button } from "winnie-react/button";
import { Flex } from "winnie-react/flex";
import { Popover, PopoverContent, PopoverTrigger } from "winnie-react/popover";

export default function Page() {
	return (
		<Flex align="center" className="h-full w-full" justify="center" gap="4">
			<Flex align="center" justify="center" className="background-polka">
				<Popover>
					<PopoverTrigger displayAsChild>
						<Button>Open</Button>
					</PopoverTrigger>
					<PopoverContent align="start">
						TODO: add some sort of example here
					</PopoverContent>
				</Popover>
			</Flex>
		</Flex>
	);
}
