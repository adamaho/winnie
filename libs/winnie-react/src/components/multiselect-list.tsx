import {
	Dispatch,
	forwardRef,
	SetStateAction,
	type ComponentPropsWithoutRef,
	type ElementRef,
	type PropsWithChildren,
} from "react";

import { createContext } from "@radix-ui/react-context";
import { useControllableState } from "@radix-ui/react-use-controllable-state";

import { Command, CommandInput, type CommandInputProps } from "./command";

const MULTISELECT_LIST_CONTEXT = "MultiSelectList";

/* -------------------------------------------------------------------------------------
 * MultiSelectListContext
 * -------------------------------------------------------------------------------------*/
type MultiSelectListContextProps = {
	open?: boolean;
	setOpen?: Dispatch<SetStateAction<boolean | undefined>>;
	setValue?: Dispatch<SetStateAction<string[] | undefined>>;
	value?: string[];
};

const [MultiSelectListProvider] = createContext<MultiSelectListContextProps>(
	MULTISELECT_LIST_CONTEXT,
);

/* -------------------------------------------------------------------------------------
 *MultiSelectList
 * -------------------------------------------------------------------------------------*/
type MultiSelectListComponentProps = ComponentPropsWithoutRef<typeof Command>;

type MultiSelectListElement = ElementRef<typeof Command>;
type MultiSelectListProps = Omit<
	MultiSelectListComponentProps,
	"value" | "onValueChange"
> & {
	/**
	 * optionally sets the default selected items
	 *
	 * @default undefined
	 */
	defaultValue?: string[];

	/**
	 * event handler that is called when the selected command item has changed
	 *
	 * @default undefined
	 */
	onValueChange?: (value: string[]) => void;

	/**
	 * optionally controls the state of the selected items
	 *
	 * @default undefined
	 */
	value?: string[];
};

const MultiSelectList = forwardRef<
	MultiSelectListElement,
	PropsWithChildren<MultiSelectListProps>
>(({ children, defaultValue, onValueChange, value, ...rest }, ref) => {
	/**
	 * tracks the controllable value
	 */
	const [_value, _setValue] = useControllableState({
		prop: value,
		defaultProp: defaultValue,
		onChange: onValueChange,
	});

	return (
		<MultiSelectListProvider value={_value} setValue={_setValue}>
			<Command {...rest} ref={ref}>
				{children}
			</Command>
		</MultiSelectListProvider>
	);
});

MultiSelectList.displayName = "MultiSelectList";

/* -------------------------------------------------------------------------------------
 * MultiSelectListInput
 * -------------------------------------------------------------------------------------*/
type MultiSelectListInputProps = CommandInputProps;

const MultiSelectListInput = CommandInput;
MultiSelectListInput.displayName = "MultiSelectListInput";

export { MultiSelectList, MultiSelectListInput };
export type { MultiSelectListProps, MultiSelectListInputProps };
