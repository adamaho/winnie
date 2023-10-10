import { Button } from "winnie-react/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "winnie-react/dropdown-menu";

export function DropdownMenuDemo() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger displayAsChild>
				<Button>Options</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent size="2">
				<DropdownMenuItem>Item 1</DropdownMenuItem>
				<DropdownMenuItem>Item 2</DropdownMenuItem>
				<DropdownMenuItem>Item 3</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Item 4</DropdownMenuItem>
				<DropdownMenuItem>Item 5</DropdownMenuItem>
				<DropdownMenuItem>Item 6</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
