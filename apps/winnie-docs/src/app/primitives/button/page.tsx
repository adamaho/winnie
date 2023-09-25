import { Button } from "winnie-react/button";

export default function Page() {
	return (
		<div className="row">
			<Button radius="large">Button</Button>
			<Button variant="soft" radius="round">
				Button
			</Button>
			<Button variant="ghost">Button</Button>
		</div>
	);
}
