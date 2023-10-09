import { createContext } from "react";

/**
 *
 */

type StringFilter = {
	type: "string";
	predicate: "EQUAL" | "NOT_EQUAL" | "PARTIAL_EQUAL";
	predicateFn: (value: string) => boolean;
	value: string;
};

function createStringFilter(): StringFilter {
	return {
		type: "string",
	};
}
