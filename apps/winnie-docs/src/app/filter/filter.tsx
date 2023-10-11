import { Flex } from "winnie-react/flex";

import { FilterProvider } from "./filter-provider";
import { PredicateDropdown } from "./predicate";
import { RemoveFilterButton } from "./remove";
import { Subject } from "./subject";
import { ValueDropdown } from "./value";

import "./filter.css";

export function Filter() {
	return (
		<FilterProvider>
			<Flex align="center" gap="2" className="filter">
				<Subject />
				<PredicateDropdown />
				<ValueDropdown />
				<RemoveFilterButton />
			</Flex>
		</FilterProvider>
	);
}
