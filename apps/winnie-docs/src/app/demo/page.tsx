import { Flex } from "winnie-react/flex";

import { CheeseFilter } from "./cheese-filter";
import { CrustFilter } from "./crust-filter";
import { MeatFilter } from "./meat-filter";
import { SauceFilter } from "./sauce-filter";
import { VegatableFilter } from "./vegatable-filter";

export default function Page() {
	return (
		<Flex align="center" className="h-full w-full" justify="center" gap="4">
			<Flex align="start" justify="center" gap="2">
				<CrustFilter />
				<SauceFilter />
				<CheeseFilter />
				<MeatFilter />
				<VegatableFilter />
			</Flex>
		</Flex>
	);
}
