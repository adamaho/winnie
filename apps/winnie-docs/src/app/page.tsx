import Link from "next/link";

export default function Page() {
	return (
		<div>
			<Link href="/button">Button</Link>
			<Link href="/command">Command</Link>
			<Link href="/popover">Popover</Link>
		</div>
	);
}
