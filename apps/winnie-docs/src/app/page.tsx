import { Button } from "winnie-react/button";

import "./page.css";

export default function Home() {
	return (
		<div className="center">
			<div className="row">
				<Button>Button</Button>
				<Button variant="soft">Button</Button>
				<Button variant="ghost">Button</Button>
			</div>
		</div>
	);
}
