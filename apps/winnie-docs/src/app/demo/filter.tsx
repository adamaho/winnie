import { useMemo, type ReactNode } from "react";

import { useControllableState } from "@radix-ui/react-use-controllable-state";

import {
	CommandMulti,
	CommandMultiCheckboxItem,
	CommandMultiEmpty,
	CommandMultiGroup,
	CommandMultiItem,
	CommandMultiList,
	CommandMultiProps,
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
	defaultValue?: CommandMultiProps["defaultValue"];
	items: AvailableFilterItem[];
	label?: string;
	onValueChange?: CommandMultiProps["onValueChange"];
	placeholder: string;
	value?: CommandMultiProps["value"];
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

/**
 * filters the items based on the checked item value
 */
function sortItems(
	value: FilterProps["value"] = [],
	items: FilterProps["items"],
): { checked: FilterProps["items"]; rest: FilterProps["items"] } {
	const checked: FilterProps["items"] = [];
	const rest: FilterProps["items"] = [];

	function sort(i: AvailableFilterItem) {
		switch (i.type) {
			case "group": {
				i.items.forEach(sort);
				break;
			}
			case "separator": {
				rest.push(i);
				break;
			}
			case "item": {
				rest.push(i);
				break;
			}
			case "checkbox-item": {
				if (value.includes(i.value)) {
					checked.push(i);
					break;
				}
				rest.push(i);
				break;
			}
		}
	}

	items.forEach(sort);

	return {
		checked,
		rest,
	};
}

function Filter({
	defaultValue,
	items,
	label,
	onValueChange,
	placeholder,
	value,
}: FilterProps) {
	/**
	 * handle value state
	 */
	const [_value, _setValue] = useControllableState({
		prop: value,
		defaultProp: defaultValue,
		onChange: onValueChange,
	});

	const sortedItems = useMemo(() => {
		return sortItems(_value, items);
	}, [_value, items]);

	return (
		<CommandMulti
			value={_value}
			onValueChange={_setValue}
			label={label}
			size="1"
		>
			<CommandMultiTextFieldInput attributes={{ placeholder }} />
			<CommandMultiList>
				<CommandMultiEmpty className="filter-command-empty">
					No results found
				</CommandMultiEmpty>
				{sortedItems.rest.map(renderItem)}
			</CommandMultiList>
		</CommandMulti>
	);
}

export { Filter };
export type { FilterProps };
