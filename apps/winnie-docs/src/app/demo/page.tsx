import { Sandwich } from "lucide-react";

import { Flex } from "winnie-react/flex";

import { FilterBarItem } from "~/components/filter-bar-item";

// import { CrustFilter } from "./crust-filter";
// import { MeatFilter } from "./meat-filter";
// import { SauceFilter } from "./sauce-filter";
// import { VegatableFilter } from "./vegatable-filter";

export default function Page() {
	return (
		<Flex align="center" className="h-full w-full" justify="center" gap="4">
			<Flex align="start" justify="center" gap="2" className="background-polka">
				<FilterBarItem
					accessor="cheese"
					items={[
						{
							type: "checkbox-item",
							start: <Sandwich />,
							text: "Mozzarella",
							value: "mozzarella",
						},
						{
							type: "checkbox-item",
							start: <Sandwich />,
							text: "Feta",
							value: "feta",
						},
						{
							type: "checkbox-item",
							start: <Sandwich />,
							text: "Ricotta",
							value: "ricotta",
						},
						{
							type: "checkbox-item",
							start: <Sandwich />,
							text: "Vegan Mozzarella",
							value: "veganmozzarella",
						},
					]}
				/>
			</Flex>
		</Flex>
	);
}
