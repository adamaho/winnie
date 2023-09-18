export type CommandComponentProps = import("react").ComponentPropsWithoutRef<typeof import("cmdk").Command>;
export type CommandElementAttributes = Omit<CommandComponentProps, "children" | "label" | "shouldFilter" | "filter" | "value" | "onValueChange" | "loop">;
export type CommandElement = import("react").ElementRef<typeof import("cmdk").Command>;
/**
 * props that can be passed to Command
 */
export type CommandProps = {
    /**
     * default html attributes for Command
     */
    attributes?: CommandElementAttributes | undefined;
    /**
     * component className
     */
    className?: string | undefined;
    /**
     * customer filter function for that determines with command items match the given query
     */
    filter?: CommandComponentProps["filter"];
    /**
     * accessible label for command. not shown visibly
     */
    label?: CommandComponentProps["label"];
    /**
     * if true, highlighted element will loop when using arrow key navigation
     */
    loop?: CommandComponentProps["loop"];
    /**
     * event handler that is called when the selected command item changes
     */
    onValueChange?: CommandComponentProps["onValueChange"];
    /**
     * if true, automatic filtering and sorting will be disabled
     */
    shouldFilter?: CommandComponentProps["shouldFilter"];
    /**
     * modifies the overall size of the command including spacing and font sizes
     */
    size?: "small" | "medium" | undefined;
    /**
     * optionally controls the state of the selected command item
     */
    value?: CommandComponentProps["value"];
};
export type CommandInputComponentProps = import("react").ComponentPropsWithoutRef<typeof import("cmdk").CommandInput>;
export type CommandInputElementAttributes = Omit<CommandInputComponentProps, "value" | "onValueChange">;
export type CommandInputElement = import("react").ElementRef<typeof import("cmdk").CommandInput>;
/**
 * props that can be passed to CommandInput
 */
export type CommandInputProps = {
    /**
     * default html attributes for CommandInput
     */
    attributes?: CommandInputElementAttributes | undefined;
    /**
     * component className
     */
    className?: string | undefined;
    /**
     * event handler that is called when the input value changes
     */
    onValueChange?: CommandInputComponentProps["onValueChange"];
    /**
     * optionally controls the value of the input
     */
    value?: CommandInputComponentProps["value"];
};
export type CommandListComponentProps = import("react").ComponentPropsWithoutRef<typeof import("cmdk").CommandList>;
export type CommandListElementAttributes = Omit<CommandListComponentProps, "children">;
export type CommandListElement = import("react").ElementRef<typeof import("cmdk").CommandList>;
/**
 * props that can be passed toCommandList
 */
export type CommandListProps = {
    /**
     * default html attributes forCommandList
     */
    attributes?: CommandListElementAttributes | undefined;
    /**
     * component className
     */
    className?: string | undefined;
};
export type CommandEmptyComponentProps = import("react").ComponentPropsWithoutRef<typeof import("cmdk").CommandEmpty>;
export type CommandEmptyElementAttributes = Omit<CommandEmptyComponentProps, "children">;
export type CommandEmptyElement = import("react").ElementRef<typeof import("cmdk").CommandEmpty>;
/**
 * props that can be passed CommandEmpty
 */
export type CommandEmptyProps = {
    /**
     * default html attributes for CommandEmpty
     */
    attributes?: CommandEmptyElementAttributes | undefined;
    /**
     * component className
     */
    className?: string | undefined;
};
export type CommandGroupComponentProps = import("react").ComponentPropsWithoutRef<typeof import("cmdk").CommandGroup>;
export type CommandGroupElementAttributes = Omit<CommandGroupComponentProps, "children" | "heading" | "value">;
export type CommandGroupElement = import("react").ElementRef<typeof import("cmdk").CommandGroup>;
/**
 * props that can be passed to CommandGroup
 */
export type CommandGroupProps = {
    /**
     * default html attributes for CommandGroup
     */
    attributes?: CommandGroupElementAttributes | undefined;
    /**
     * component className
     */
    className?: string | undefined;
    /**
     * optional heading for the group
     */
    heading?: CommandGroupComponentProps["heading"];
    /**
     * if no heading is provided, define this prop to make the group unique
     */
    value?: CommandGroupComponentProps["value"];
};
export type CommandItemComponentProps = import("react").ComponentPropsWithoutRef<typeof import("cmdk").CommandItem>;
export type CommandItemElementAttributes = Omit<CommandItemComponentProps, "children" | "disabled" | "onSelect" | "value">;
export type CommandItemElement = import("react").ElementRef<typeof import("cmdk").CommandItem>;
/**
 * props that can be passed to CommandItem
 */
export type CommandItemProps = {
    /**
     * default html attributes for CommandItem
     */
    attributes?: CommandItemElementAttributes | undefined;
    /**
     * component className
     */
    className?: string | undefined;
    /**
     * if true, the item will not be interactible
     */
    disabled?: CommandItemComponentProps["disabled"];
    /**
     * event handler that is called with an item is clicked or selected via keyboard
     */
    onSelect?: CommandItemComponentProps["onSelect"];
    /**
     * a unique value for this item. if not provided, it will be inferred by the `textContent` of the item
     */
    value?: CommandItemComponentProps["value"];
};
export type CommandSeparatorComponentProps = import("react").ComponentPropsWithoutRef<typeof import("cmdk").CommandSeparator>;
export type CommandSeparatorElementAttributes = Omit<CommandSeparatorComponentProps, "children">;
export type CommandSeparatorElement = import("react").ElementRef<typeof import("cmdk").CommandSeparator>;
/**
 * props that can be passed to CommandSeparator
 */
export type CommandSeparatorProps = {
    /**
     * default html attributes for CommandSeparator
     */
    attributes?: CommandSeparatorElementAttributes | undefined;
    /**
     * component className
     */
    className?: string | undefined;
};
export type CommandLoadingComponentProps = import("react").ComponentPropsWithoutRef<typeof import("cmdk").CommandLoading>;
export type CommandLoadingElementAttributes = Omit<CommandLoadingComponentProps, "children">;
export type CommandLoadingElement = import("react").ElementRef<typeof import("cmdk").CommandLoading>;
/**
 * props that can be passed to CommandLoading
 */
export type CommandLoadingProps = {
    /**
     * default html attributes for CommandLoading
     */
    attributes?: CommandLoadingElementAttributes | undefined;
};
/**
 * # Command
 * Search and navigate a list of items
 *
 * ## Usage
 *
 * ```jsx
 * <Command>
 *  <CommandInput />
 *  <CommandList>
 *    <CommandEmpty />
 *    <CommandGroup heading="letters">
 *      <CommandItem>A</CommandItem>
 *      <CommandItem>B</CommandItem>
 *      <CommandSeparator />
 *      <CommandItem>C</CommandItem>
 *    </CommandGroup>
 *
 *    <CommandItem>Apple</CommandItem>
 *  </CommandList>
 * </Command>
 * ```
 *
 * @see {@link CommandProps}
 * @see {@link http://github.com Documentation}
 */
export const Command: import("react").ForwardRefExoticComponent<CommandProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDivElement>>;
/**
 * # CommandInput
 * An html input that searches the items
 *
 * @see {@link CommandInputProps}
 */
export const CommandInput: import("react").ForwardRefExoticComponent<CommandInputProps & import("react").RefAttributes<HTMLInputElement>>;
/**
 * # CommandList
 * A list of items
 *
 * @see {@link CommandListProps}
 */
export const CommandList: import("react").ForwardRefExoticComponent<CommandListProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDivElement>>;
/**
 * # CommandEmpty
 * A component that is rendered when the list is empty or has no items matching the provided search query
 *
 * @see {@link CommandEmptyProps}
 */
export const CommandEmpty: import("react").ForwardRefExoticComponent<CommandEmptyProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDivElement>>;
/**
 * # CommandGroup
 * A collection of items grouped under a heading
 *
 * @see {@link CommandGroupProps}
 */
export const CommandGroup: import("react").ForwardRefExoticComponent<CommandGroupProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDivElement>>;
/**
 * # CommandItem
 * A list item that can be selected using the mouse or keyboard
 *
 * @see {@link CommandItemProps}
 */
export const CommandItem: import("react").ForwardRefExoticComponent<CommandItemProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDivElement>>;
/**
 * # CommandSeparator
 * Visually separates items or groups
 *
 * @see {@link CommandSeparatorProps}
 */
export const CommandSeparator: import("react").ForwardRefExoticComponent<CommandSeparatorProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDivElement>>;
/**
 * # CommandLoading
 * Optionally displayed when items are loading
 *
 * @see {@link CommandLoadingProps}
 */
export const CommandLoading: import("react").ForwardRefExoticComponent<CommandLoadingProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDivElement>>;
