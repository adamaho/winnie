import { Beef } from "lucide-react";

import { Filter, FilterProps } from "./filter";

const items = [
	{
		type: "checkbox-item",
		start: <Beef />,
		text: "Pepperoni",
		value: "pepperoni",
	},
	{
		type: "checkbox-item",
		start: <Beef />,
		text: "Bacon",
		value: "bacon",
	},
	{
		type: "checkbox-item",
		start: <Beef />,
		text: "Ham",
		value: "ham",
	},
	{
		type: "checkbox-item",
		start: <Beef />,
		text: "Chicken",
		value: "chicken",
	},
	{
		type: "checkbox-item",
		start: <Beef />,
		text: "Sausage",
		value: "sausage",
	},
] satisfies FilterProps["items"];

export function MeatFilter() {
	return <Filter placeholder="Meat" items={items} />;
}
