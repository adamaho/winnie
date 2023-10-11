import { PropsWithChildren } from "react";

import { Flex } from "winnie-react/flex";

import "./subject.css";

export function Subject({ children }: PropsWithChildren) {
	return (
		<Flex align="center" gap="2" className="filter-subject">
			{children}
		</Flex>
	);
}
