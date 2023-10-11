import { Focus } from "lucide-react";

import { Flex } from "winnie-react/flex";
import { Text } from "winnie-react/text";

import "./subject.css";

export function Subject() {
	return (
		<Flex align="center" gap="2" className="filter-subject">
			<Focus />
			<Text size="2" contrast="high">
				Focus
			</Text>
		</Flex>
	);
}
