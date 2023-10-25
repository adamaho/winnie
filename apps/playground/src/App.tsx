import { createSignal } from "solid-js";

import "winnie-ve/styles.css";

function App() {
	const [count, setCount] = createSignal(0);

	return (
		<>
			<h1>Hello world</h1>
		</>
	);
}

export default App;
