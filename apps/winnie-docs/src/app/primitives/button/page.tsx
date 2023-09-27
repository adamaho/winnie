import { Button } from "winnie-react/button";

export default function Page() {
	return (
		<div className="flex items-center gap-3 h-full w-full justify-center">
			<Button>Button</Button>
			<Button variant="soft">Button</Button>
			<Button variant="ghost">Button</Button>
		</div>
	);
}
