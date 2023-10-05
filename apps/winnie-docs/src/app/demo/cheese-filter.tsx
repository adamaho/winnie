import { Sandwich } from "lucide-react";

import { Filter, FilterProps } from "./filter";

const items = [
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
] satisfies FilterProps["items"];

export function CheeseFilter() {
	return <Filter placeholder="Cheese" items={items} />;
}
