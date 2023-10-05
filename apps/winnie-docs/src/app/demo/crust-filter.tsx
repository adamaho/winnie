import { Wheat } from "lucide-react";

import { Filter, FilterProps } from "./filter";

const items = [
	{
		type: "checkbox-item",
		start: <Wheat />,
		text: "Cracker",
		value: "cracker",
	},
	{
		type: "checkbox-item",
		start: <Wheat />,
		text: "Thin",
		value: "thin",
	},
	{
		type: "checkbox-item",
		start: <Wheat />,
		text: "Deep Dish",
		value: "deep dish",
	},
	{
		type: "checkbox-item",
		start: <Wheat />,
		text: "Neopolitan",
		value: "neopolitan",
	},
	{
		type: "checkbox-item",
		start: <Wheat />,
		text: "Cheese Stuffed",
		value: "cheesestuffed",
	},
] satisfies FilterProps["items"];

export function CrustFilter() {
	return <Filter placeholder="Crust" items={items} />;
}
