import { ButtonSink } from "./button-sink";
import { CheckboxSink } from "./checkbox-sink";

import "./page.css";

export default function Page() {
	return (
		<main className="ks-main">
			<ButtonSink />
			<CheckboxSink />
		</main>
	);
}
