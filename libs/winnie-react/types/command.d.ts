import { type ComponentPropsWithoutRef } from "react";
import { Command as CmdkCommand, CommandInput as CmdkCommandInput, CommandList as CmdkCommandList, CommandEmpty as CmdkCommandEmpty, CommandGroup as CmdkCommandGroup, CommandItem as CmdkCommandItem, CommandLoading as CmdkCommandLoading } from "cmdk";
type CommandComponentProps = ComponentPropsWithoutRef<typeof CmdkCommand>;
type CommandElementAttributes = Omit<CommandComponentProps, "children" | "label" | "shouldFilter" | "filter" | "value" | "onValueChange" | "loop">;
type CommandProps = {
    /**
     * underlying Button html element attributes
     *
     * @default undefined
     */
    attributes?: CommandElementAttributes;
    /**
     * component className
     *
     * @default undefined
     */
    className?: string;
    /**
     * custom filter function that determines which command items match the given search query
     *
     * @default undefined
     */
    filter?: CommandComponentProps["filter"];
    /**
     * accessible label for command. not shown visibly
     *
     * @default undefined
     */
    label?: CommandComponentProps["label"];
    /**
     * if true, highlighted element will loop when using arrow key navigation
     *
     * @default false
     */
    loop?: CommandComponentProps["loop"];
    /**
     * event handler that is called when the selected command item has changed
     */
    onValueChange?: CommandComponentProps["onValueChange"];
    /**
     * modifes the overall size of command including spacing and font sizes
     *
     * @default "medium"
     */
    size?: "small" | "medium";
    /**
     * optionally controls the state of the selected command item
     *
     * @default undefined
     */
    value?: CommandComponentProps["value"];
};
declare const Command: import("react").ForwardRefExoticComponent<CommandProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDivElement>>;
type CommandInputComponentProps = ComponentPropsWithoutRef<typeof CmdkCommandInput>;
type CommandInputElementAttributes = Omit<CommandInputComponentProps, "value" | "onValueChange">;
type CommandInputProps = {
    /**
     * default html attributes for CommandInput
     *
     * @default undefined
     */
    attributes?: CommandInputElementAttributes;
    /**
     * component className
     *
     * @default undefined
     */
    className?: string;
    /**
     * event handler that is called when the input value changes
     *
     * @default undefined
     */
    onValueChange?: CommandInputComponentProps["onValueChange"];
    /**
     * optionally controls the value of the input
     *
     * @default undefined
     */
    value?: CommandInputComponentProps["value"];
};
declare const CommandInput: import("react").ForwardRefExoticComponent<CommandInputProps & import("react").RefAttributes<HTMLInputElement>>;
type CommandListComponentProps = ComponentPropsWithoutRef<typeof CmdkCommandList>;
type CommandListElementAttributes = Omit<CommandListComponentProps, "children">;
type CommandListProps = {
    /**
     * default html attributes for CommandList
     *
     * @default undefined
     */
    attributes?: CommandListElementAttributes;
    /**
     * component className
     *
     * @default undefined
     */
    className?: string;
};
declare const CommandList: import("react").ForwardRefExoticComponent<CommandListProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDivElement>>;
type CommandEmptyComponentProps = ComponentPropsWithoutRef<typeof CmdkCommandEmpty>;
type CommandEmptyElementAttributes = Omit<CommandEmptyComponentProps, "children">;
type CommandEmptyProps = {
    /**
     * default html attributes for CommandEmpty
     *
     * @default undefined
     */
    attributes?: CommandEmptyElementAttributes;
    /**
     * component className
     *
     * @default undefined
     */
    className?: string;
};
declare const CommandEmpty: import("react").ForwardRefExoticComponent<CommandEmptyProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDivElement>>;
type CommandGroupComponentProps = ComponentPropsWithoutRef<typeof CmdkCommandGroup>;
type CommandGroupElementAttributes = Omit<CommandGroupComponentProps, "children" | "heading" | "value">;
type CommandGroupProps = {
    /**
     * default html attributes for CommandGroup
     *
     * @default undefined
     */
    attributes?: CommandGroupElementAttributes;
    /**
     * component className
     *
     * @default undefined
     */
    className?: string;
    /**
     * optional heading for the group
     *
     * @default undefined
     */
    heading: CommandGroupComponentProps["heading"];
    /**
     * if no heading is provided, define this prop to make the group unique
     *
     * @default undefined
     */
    value: CommandGroupComponentProps["value"];
};
declare const CommandGroup: import("react").ForwardRefExoticComponent<CommandGroupProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDivElement>>;
type CommandItemComponentProps = ComponentPropsWithoutRef<typeof CmdkCommandItem>;
type CommandItemElementAttributes = Omit<CommandItemComponentProps, "children" | "disabled" | "onSelect" | "value">;
type CommandItemProps = {
    /**
     * default html attributes for CommandItem
     *
     * @default undefined
     */
    attributes?: CommandItemElementAttributes;
    /**
     * component className
     *
     * @default undefined
     */
    className?: string;
    /**
     * if true, the item will not be interacible
     *
     * @default false
     */
    disabled?: CommandItemComponentProps["disabled"];
    /**
     * event handler that is caled when an item is clicked or selected via keyboard
     *
     * @default undefined
     */
    onSelect?: CommandItemComponentProps["onSelect"];
    /**
     * a unique value for this item. if not provided, it will be inferred by the `textContent` of the item
     *
     * @default undefined
     */
    value?: CommandItemComponentProps["value"];
};
declare const CommandItem: import("react").ForwardRefExoticComponent<CommandItemProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDivElement>>;
type CommandSeparatorComponentProps = ComponentPropsWithoutRef<typeof CmdkCommandEmpty>;
type CommandSeparatorElementAttributes = Omit<CommandSeparatorComponentProps, "children">;
type CommandSeparatorProps = {
    /**
     * default html attributes for CommandSeparator
     *
     * @default undefined
     */
    attributes?: CommandSeparatorElementAttributes;
    /**
     * component className
     *
     * @default undefined
     */
    className?: string;
};
declare const CommandSeparator: import("react").ForwardRefExoticComponent<CommandSeparatorProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDivElement>>;
type CommandLoadingComponentProps = ComponentPropsWithoutRef<typeof CmdkCommandLoading>;
type CommandLoadingElementAttributes = Omit<CommandLoadingComponentProps, "children">;
type CommandLoadingProps = {
    /**
     * default html attributes for CommandLoading
     *
     * @default undefined
     */
    attributes?: CommandLoadingElementAttributes;
};
declare const CommandLoading: import("react").ForwardRefExoticComponent<CommandLoadingProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDivElement>>;
export { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator, CommandLoading, };
