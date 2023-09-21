import { Text } from "winnie-react/text";

import "./page.css";

export default function Page() {
	return (
		<div className="stack">
			<Text weight="light">The quick brown fox jumps over the lazy dog</Text>
			<Text weight="normal" align="center">
				The quick brown fox jumps over the lazy dog
			</Text>
			<Text weight="medium" align="right">
				The quick brown fox jumps over the lazy dog
			</Text>
			<Text weight="bold">The quick brown fox jumps over the lazy dog</Text>
			<Text weight="extra-bold">
				The quick brown fox jumps over the lazy dog
			</Text>
		</div>
	);
}
