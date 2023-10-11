"use client";

import {
	createContext,
	PropsWithChildren,
	useContext,
	useState,
	type Dispatch,
	type SetStateAction,
} from "react";

type FilterContextProps = {
	value: string[];
	setValue: Dispatch<SetStateAction<string[]>>;
};

const FilterContext = createContext<FilterContextProps>({
	value: [],
	setValue: () => {
		return;
	},
});

function useFilterContext() {
	return useContext(FilterContext);
}

function FilterProvider({ children }: PropsWithChildren) {
	/**
	 * tracks the value of the filter
	 */
	const [value, setValue] = useState<string[]>([]);

	return (
		<FilterContext.Provider value={{ value, setValue }}>
			{children}
		</FilterContext.Provider>
	);
}

export { useFilterContext, FilterProvider };
