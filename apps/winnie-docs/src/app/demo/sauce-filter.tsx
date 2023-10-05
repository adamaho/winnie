import { Droplet } from "lucide-react";

import { Filter, FilterProps } from "./filter";

const items = [
	{
		type: "checkbox-item",
		start: <Droplet />,
		text: "Tomato",
		value: "tomato",
	},
	{
		type: "checkbox-item",
		start: <Droplet />,
		text: "White",
		value: "white",
	},
	{
		type: "checkbox-item",
		start: <Droplet />,
		text: "Pesto",
		value: "pesto",
	},
	{
		type: "checkbox-item",
		start: <Droplet />,
		text: "BBQ",
		value: "bbq",
	},
] satisfies FilterProps["items"];

export function SauceFilter() {
	return <Filter placeholder="Sauce" items={items} />;
}
