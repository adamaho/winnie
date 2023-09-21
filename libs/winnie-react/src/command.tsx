"use client";

import {
	forwardRef,
	type ComponentPropsWithoutRef,
	type ElementRef,
	type PropsWithChildren,
} from "react";

import {
	Command as CmdkCommand,
	CommandEmpty as CmdkCommandEmpty,
	CommandGroup as CmdkCommandGroup,
	CommandInput as CmdkCommandInput,
	CommandItem as CmdkCommandItem,
	CommandList as CmdkCommandList,
	CommandLoading as CmdkCommandLoading,
	CommandSeparator as CmdkCommandSeparator,
} from "cmdk";

/* -------------------------------------------------------------------------------------
 * Command
 * -------------------------------------------------------------------------------------*/
type CommandComponentProps = ComponentPropsWithoutRef<typeof CmdkCommand>;
type CommandElementAttributes = Omit<
	CommandComponentProps,
	| "children"
	| "label"
	| "shouldFilter"
	| "filter"
	| "value"
	| "onValueChange"
	| "loop"
>;

type CommandElement = ElementRef<typeof CmdkCommand>;
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

const Command = forwardRef<CommandElement, PropsWithChildren<CommandProps>>(
	({ attributes, className, children, size = "medium", ...rest }, ref) => {
		return (
			<CmdkCommand
				{...attributes}
				{...rest}
				className={className}
				ref={ref}
				w-command=""
				w-command-size={size}
			>
				{children}
			</CmdkCommand>
		);
	},
);

/* -------------------------------------------------------------------------------------
 * CommandInput
 * -------------------------------------------------------------------------------------*/
type CommandInputComponentProps = ComponentPropsWithoutRef<
	typeof CmdkCommandInput
>;
type CommandInputElementAttributes = Omit<
	CommandInputComponentProps,
	"value" | "onValueChange"
>;
type CommandInputElement = ElementRef<typeof CmdkCommandInput>;

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

const CommandInput = forwardRef<CommandInputElement, CommandInputProps>(
	({ attributes, className, ...rest }, ref) => {
		return (
			<CmdkCommandInput
				{...attributes}
				{...rest}
				className={className}
				ref={ref}
				w-command-input=""
			/>
		);
	},
);

/* -------------------------------------------------------------------------------------
 * CommandList
 * -------------------------------------------------------------------------------------*/
type CommandListComponentProps = ComponentPropsWithoutRef<
	typeof CmdkCommandList
>;
type CommandListElementAttributes = Omit<CommandListComponentProps, "children">;
type CommandListElement = ElementRef<typeof CmdkCommandList>;

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

const CommandList = forwardRef<
	CommandListElement,
	PropsWithChildren<CommandListProps>
>(({ attributes, children, className, ...rest }, ref) => {
	return (
		<CmdkCommandList
			{...attributes}
			{...rest}
			className={className}
			ref={ref}
			w-command-list=""
		>
			{children}
		</CmdkCommandList>
	);
});

/* -------------------------------------------------------------------------------------
 * CommandEmpty
 * -------------------------------------------------------------------------------------*/
type CommandEmptyComponentProps = ComponentPropsWithoutRef<
	typeof CmdkCommandEmpty
>;
type CommandEmptyElementAttributes = Omit<
	CommandEmptyComponentProps,
	"children"
>;
type CommandEmptyElement = ElementRef<typeof CmdkCommandEmpty>;

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

const CommandEmpty = forwardRef<
	CommandEmptyElement,
	PropsWithChildren<CommandEmptyProps>
>(({ attributes, children, className, ...rest }, ref) => {
	return (
		<CmdkCommandEmpty
			{...attributes}
			{...rest}
			className={className}
			ref={ref}
			w-command-empty=""
		>
			{children}
		</CmdkCommandEmpty>
	);
});

/* -------------------------------------------------------------------------------------
 * CommandGroup
 * -------------------------------------------------------------------------------------*/
type CommandGroupComponentProps = ComponentPropsWithoutRef<
	typeof CmdkCommandGroup
>;
type CommandGroupElementAttributes = Omit<
	CommandGroupComponentProps,
	"children" | "heading" | "value"
>;
type CommandGroupElement = ElementRef<typeof CmdkCommandGroup>;

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
	heading?: CommandGroupComponentProps["heading"];

	/**
	 * if no heading is provided, define this prop to make the group unique
	 *
	 * @default undefined
	 */
	value?: CommandGroupComponentProps["value"];
};

const CommandGroup = forwardRef<
	CommandGroupElement,
	PropsWithChildren<CommandGroupProps>
>(({ attributes, children, className, ...rest }, ref) => {
	return (
		<CmdkCommandGroup
			{...attributes}
			{...rest}
			className={className}
			ref={ref}
			w-command-group=""
		>
			{children}
		</CmdkCommandGroup>
	);
});

/* -------------------------------------------------------------------------------------
 * CommandItem
 * -------------------------------------------------------------------------------------*/
type CommandItemComponentProps = ComponentPropsWithoutRef<
	typeof CmdkCommandItem
>;
type CommandItemElementAttributes = Omit<
	CommandItemComponentProps,
	"children" | "disabled" | "onSelect" | "value"
>;
type CommandItemElement = ElementRef<typeof CmdkCommandItem>;

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

const CommandItem = forwardRef<
	CommandItemElement,
	PropsWithChildren<CommandItemProps>
>(({ attributes, children, className, ...rest }, ref) => {
	return (
		<CmdkCommandItem
			{...attributes}
			{...rest}
			className={className}
			ref={ref}
			w-command-item=""
		>
			{children}
		</CmdkCommandItem>
	);
});

/* -------------------------------------------------------------------------------------
 * CommandSeparator
 * -------------------------------------------------------------------------------------*/
type CommandSeparatorComponentProps = ComponentPropsWithoutRef<
	typeof CmdkCommandEmpty
>;
type CommandSeparatorElementAttributes = Omit<
	CommandSeparatorComponentProps,
	"children"
>;
type CommandSeparatorElement = ElementRef<typeof CmdkCommandSeparator>;

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

const CommandSeparator = forwardRef<
	CommandSeparatorElement,
	PropsWithChildren<CommandSeparatorProps>
>(({ attributes, children, className, ...rest }, ref) => {
	return (
		<CmdkCommandSeparator
			{...attributes}
			{...rest}
			className={className}
			ref={ref}
			w-command-separator=""
		>
			{children}
		</CmdkCommandSeparator>
	);
});

/* -------------------------------------------------------------------------------------
 * CommandLoading
 * -------------------------------------------------------------------------------------*/
type CommandLoadingComponentProps = ComponentPropsWithoutRef<
	typeof CmdkCommandLoading
>;
type CommandLoadingElementAttributes = Omit<
	CommandLoadingComponentProps,
	"children"
>;
type CommandLoadingElement = ElementRef<typeof CmdkCommandLoading>;

type CommandLoadingProps = {
	/**
	 * default html attributes for CommandLoading
	 *
	 * @default undefined
	 */
	attributes?: CommandLoadingElementAttributes;
};

const CommandLoading = forwardRef<
	CommandLoadingElement,
	PropsWithChildren<CommandLoadingProps>
>(({ attributes, children, ...rest }, ref) => {
	return (
		<CmdkCommandLoading
			{...attributes}
			{...rest}
			ref={ref}
			w-command-loading=""
		>
			{children}
		</CmdkCommandLoading>
	);
});

export {
	Command,
	CommandInput,
	CommandList,
	CommandEmpty,
	CommandGroup,
	CommandItem,
	CommandSeparator,
	CommandLoading,
};
