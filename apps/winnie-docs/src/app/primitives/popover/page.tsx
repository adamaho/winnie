import { Button } from "winnie-react/button";
import { Popover, PopoverTrigger, PopoverContent, PopoverClose } from "winnie-react/popover";

import "./page.css";

export default function Page() {
	return (
		<div className="center">
			<Popover>
				<PopoverTrigger displayAsChild>
					<Button>Open</Button>
				</PopoverTrigger>
				<PopoverContent>
					Hello world
					<PopoverClose />
				</PopoverContent>
			</Popover>
		</div>
	);
}
