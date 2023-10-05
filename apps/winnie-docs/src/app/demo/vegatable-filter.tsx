import { LeafyGreen } from "lucide-react";

import { Filter, FilterProps } from "./filter";

const items = [
	{
		type: "checkbox-item",
		start: <LeafyGreen />,
		text: "Green Pepper",
		value: "greenpepper",
	},
	{
		type: "checkbox-item",
		start: <LeafyGreen />,
		text: "Mushroom",
		value: "mushroom",
	},
	{
		type: "checkbox-item",
		start: <LeafyGreen />,
		text: "Onion",
		value: "onion",
	},
	{
		type: "checkbox-item",
		start: <LeafyGreen />,
		text: "Pineapple",
		value: "pineapple",
	},
	{
		type: "checkbox-item",
		start: <LeafyGreen />,
		text: "Spinach",
		value: "spinach",
	},
] satisfies FilterProps["items"];

export function VegatableFilter() {
	return <Filter placeholder="Vegatable" items={items} />;
}
