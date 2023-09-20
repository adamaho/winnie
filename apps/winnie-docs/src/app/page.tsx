import Link from "next/link";

import { Button } from "winnie-react/button";

import "./page.css";

export default function Page() {
	return (
		<div className="row">
			<Button displayAsChild variant="ghost">
				<Link href="/primitives/button">Button</Link>
			</Button>
			<Button displayAsChild variant="ghost">
				<Link href="/primitives/command">Command</Link>
			</Button>
			<Button displayAsChild variant="ghost">
				<Link href="/primitives/popover">Popover</Link>
			</Button>
		</div>
	);
}
