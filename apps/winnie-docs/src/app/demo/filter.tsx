import { type ReactNode } from "react";

import {
	CommandMulti,
	CommandMultiCheckboxItem,
	CommandMultiEmpty,
	CommandMultiGroup,
	CommandMultiItem,
	CommandMultiList,
	CommandMultiSeparator,
	CommandMultiTextFieldInput,
} from "winnie-react/command-multi";

type FilterItem = {
	type: "item" | "checkbox-item";
	end?: ReactNode;
	start?: ReactNode;
	text: string;
	value: string;
};

type FilterGroup = {
	type: "group";
	heading?: string;
	items: FilterItem[];
};

type FilterSeparator = {
	type: "separator";
	separator: boolean;
	key: string;
};

type AvailableFilterItem = FilterItem | FilterGroup | FilterSeparator;

type FilterProps = {
	items: AvailableFilterItem[];
	label?: string;
	placeholder: string;
};

function renderItem(item: AvailableFilterItem) {
	switch (item.type) {
		case "group": {
			return (
				<CommandMultiGroup key={item.heading} heading={item.heading}>
					{item.items.map(renderItem)}
				</CommandMultiGroup>
			);
		}
		case "checkbox-item": {
			return (
				<CommandMultiCheckboxItem key={item.value} value={item.value}>
					{item.start}
					{item.text}
					{item.end}
				</CommandMultiCheckboxItem>
			);
		}
		case "item": {
			return (
				<CommandMultiItem key={item.value} value={item.value}>
					{item.start}
					{item.text}
					{item.end}
				</CommandMultiItem>
			);
		}
		case "separator": {
			return <CommandMultiSeparator key={item.key} />;
		}
	}
}

function Filter(props: FilterProps) {
	return (
		<CommandMulti label={props.label} size="1">
			<CommandMultiTextFieldInput
				attributes={{ placeholder: props.placeholder }}
			/>
			<CommandMultiList>
				<CommandMultiEmpty className="filter-command-empty">
					No results found
				</CommandMultiEmpty>
				{props.items.map(renderItem)}
			</CommandMultiList>
		</CommandMulti>
	);
}

export { Filter };
export type { FilterProps };
