import { Popover, PopoverTrigger, PopoverContent, PopoverClose } from "winnie-react/popover";

import "./page.css";

export default function Page() {
	return (
		<div className="center">
			<Popover>
				<PopoverTrigger>Hello World</PopoverTrigger>
				<PopoverContent>
					Hello world
					<PopoverClose />
				</PopoverContent>
			</Popover>
		</div>
	);
}
