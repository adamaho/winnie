import Link from "next/link";
import { Button } from "winnie-react/button";
import { Popover, PopoverTrigger, PopoverContent } from "winnie-react/popover";

import "./page.css";

export default function Page() {
	return (
		<Popover>
			<PopoverTrigger displayAsChild>
				<Button variant="ghost">Open</Button>
			</PopoverTrigger>
			<PopoverContent align="start">TODO: add some sort of example here</PopoverContent>
		</Popover>
	);
}