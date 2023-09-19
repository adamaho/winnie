import { Button } from "winnie-react/button";
import { Popover, PopoverTrigger, PopoverContent, PopoverClose } from "winnie-react/popover";

import "./page.css";

export default function Page() {
	return (
		<div className="center">
			<Popover>
				<PopoverTrigger displayAsChild>
					<Button variant="ghost">Open</Button>
				</PopoverTrigger>
				<PopoverContent align="start">TODO: add some sort of example here</PopoverContent>
			</Popover>
		</div>
	);
}
