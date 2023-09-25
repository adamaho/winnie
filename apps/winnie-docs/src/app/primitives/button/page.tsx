import { Button } from "winnie-react/button";

export default function Page() {
	return (
		<div w-display="flex" w-align-items="center" w-gap="3">
			<Button radius="large">Button</Button>
			<Button variant="soft">Button</Button>
			<Button variant="ghost">Button</Button>
		</div>
	);
}
