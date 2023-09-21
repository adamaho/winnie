import { Button } from "winnie-react/button";
import { Popover, PopoverContent, PopoverTrigger } from "winnie-react/popover";

export default function Page() {
	return (
		<Popover>
			<PopoverTrigger displayAsChild>
				<Button variant="ghost">Open</Button>
			</PopoverTrigger>
			<PopoverContent align="start">
				TODO: add some sort of example here
			</PopoverContent>
		</Popover>
	);
}
