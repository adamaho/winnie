import { type MouseEvent } from "react";

import { ValueItem } from "./value";

export type FilterProps = {
	items: ValueItem[];
	onRemoveClick: (e: MouseEvent<HTMLButtonElement>) => void;
};
