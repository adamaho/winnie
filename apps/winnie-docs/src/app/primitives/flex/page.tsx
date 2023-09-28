import { Flex } from "winnie-react/flex";

import "./page.css";

export default function Page() {
	return (
		<Flex align="center" justify="center" className="w-full h-full">
			<Flex
				align="center"
				justify="center"
				gap="4"
				className="flex-demo background-polka"
			>
				{[1, 2, 3, 4, 5].map((i) => {
					return <div key={i} className="flex-demo-item" />;
				})}
			</Flex>
		</Flex>
	);
}
