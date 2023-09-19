import Link from "next/link";

import "./page.css";

export default function Page() {
	return (
		<div className="center">
			<div className="row">
				<Link href="/primitives/button">Button</Link>
				<Link href="/primitives/command">Command</Link>
				<Link href="/primities/popover">Popover</Link>
			</div>
		</div>
	);
}
