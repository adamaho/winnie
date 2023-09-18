"use client";

import { forwardRef } from "react";

import {
	Command as CmdkCommand,
	CommandInput as CmdkCommandInput,
	CommandList as CmdkCommandList,
	CommandEmpty as CmdkCommandEmpty,
	CommandGroup as CmdkCommandGroup,
	CommandItem as CmdkCommandItem,
	CommandSeparator as CmdkCommandSeparator,
	CommandLoading as CmdkCommandLoading,
} from "cmdk";

/* -------------------------------------------------------------------------------------
 * Command
 * -------------------------------------------------------------------------------------*/
/**
 * @typedef {import("react").ComponentPropsWithoutRef<typeof import("cmdk").Command>} CommandComponentProps
 * @typedef {Omit<
 *  CommandComponentProps,
 *      "children" |
 *      "label" |
 *      "shouldFilter" |
 *      "filter" |
 *      "value" |
 *      "onValueChange" |
 *      "loop"
 * >} CommandElementAttributes
 * @typedef {import("react").ElementRef<typeof import("cmdk").Command>} CommandElement
 */

/**
 * @typedef {Object} CommandProps props that can be passed to Command
 * @property {CommandElementAttributes} [attributes] default html attributes for Command
 * @property {string} [className] component className
 * @property {CommandComponentProps["filter"]} [filter] customer filter function for that determines with command items match the given query
 * @property {CommandComponentProps["label"]} [label] accessible label for command. not shown visibly
 * @property {CommandComponentProps["loop"]} [loop] if true, highlighted element will loop when using arrow key navigation
 * @property {CommandComponentProps["onValueChange"]} [onValueChange] event handler that is called when the selected command item changes
 * @property {CommandComponentProps["shouldFilter"]} [shouldFilter] if true, automatic filtering and sorting will be disabled
 * @property {CommandComponentProps["value"]} [value] optionally controls the state of the selected command item
 */

/**
 * @type {import("react").ForwardRefRenderFunction<CommandElement, import("react").PropsWithChildren<CommandProps>>}
 */
const _Command = ({ attributes, className, children, ...rest }, ref) => {
	return (
		<CmdkCommand {...attributes} {...rest} className={className} ref={ref} w-command="">
			{children}
		</CmdkCommand>
	);
};

/* -------------------------------------------------------------------------------------
 * CommandInput
 * -------------------------------------------------------------------------------------*/
/**
 * @typedef {import("react").ComponentPropsWithoutRef<typeof import("cmdk").CommandInput>} CommandInputComponentProps
 * @typedef {Omit<CommandInputComponentProps, "value" | "onValueChange">} CommandInputElementAttributes
 * @typedef {import("react").ElementRef<typeof import("cmdk").CommandInput>} CommandInputElement
 */

/**
 * @typedef {Object} CommandInputProps props that can be passed to CommandInput
 * @property {CommandInputElementAttributes} [attributes] default html attributes for CommandInput
 * @property {string} [className] component className
 * @property {CommandInputComponentProps["onValueChange"]} [onValueChange] event handler that is called when the input value changes
 * @property {CommandInputComponentProps["value"]} [value] optionally controls the value of the input
 */

/**
 * @type {import("react").ForwardRefRenderFunction<CommandInputElement, CommandInputProps>}
 */
const _CommandInput = ({ attributes, className, ...rest }, ref) => {
	return (
		<CmdkCommandInput
			{...attributes}
			{...rest}
			className={className}
			ref={ref}
			w-command-input=""
		/>
	);
};

/* -------------------------------------------------------------------------------------
 * CommandList
 * -------------------------------------------------------------------------------------*/
/**
 * @typedef {import("react").ComponentPropsWithoutRef<typeof import("cmdk").CommandList>} CommandListComponentProps
 * @typedef {Omit<CommandListComponentProps, "children">} CommandListElementAttributes
 * @typedef {import("react").ElementRef<typeof import("cmdk").CommandList>} CommandListElement
 */

/**
 * @typedef {Object} CommandListProps props that can be passed toCommandList
 * @property {CommandListElementAttributes} [attributes] default html attributes forCommandList
 * @property {string} [className] component className
 */

/**
 * @type {import("react").ForwardRefRenderFunction<CommandListElement, import("react").PropsWithChildren<CommandListProps>>}
 */
const _CommandList = ({ attributes, children, className, ...rest }, ref) => {
	return (
		<CmdkCommandList {...attributes} {...rest} className={className} ref={ref} w-command-list="">
			{children}
		</CmdkCommandList>
	);
};

/* -------------------------------------------------------------------------------------
 * CommandEmpty
 * -------------------------------------------------------------------------------------*/
/**
 * @typedef {import("react").ComponentPropsWithoutRef<typeof import("cmdk").CommandEmpty>} CommandEmptyComponentProps
 * @typedef {Omit<CommandEmptyComponentProps, "children">} CommandEmptyElementAttributes
 * @typedef {import("react").ElementRef<typeof import("cmdk").CommandEmpty>} CommandEmptyElement
 */

/**
 * @typedef {Object} CommandEmptyProps props that can be passed CommandEmpty
 * @property {CommandEmptyElementAttributes} [attributes] default html attributes for CommandEmpty
 * @property {string} [className] component className
 */

/**
 * @type {import("react").ForwardRefRenderFunction<CommandEmptyElement, import("react").PropsWithChildren<CommandEmptyProps>>}
 */
const _CommandEmpty = ({ attributes, children, className, ...rest }, ref) => {
	return (
		<CmdkCommandEmpty {...attributes} {...rest} className={className} ref={ref} w-command-empty="">
			{children}
		</CmdkCommandEmpty>
	);
};

/* -------------------------------------------------------------------------------------
 * CommandGroup
 * -------------------------------------------------------------------------------------*/
/**
 * @typedef {import("react").ComponentPropsWithoutRef<typeof import("cmdk").CommandGroup>} CommandGroupComponentProps
 * @typedef {Omit<CommandGroupComponentProps, "children" | "heading" | "value">} CommandGroupElementAttributes
 * @typedef {import("react").ElementRef<typeof import("cmdk").CommandGroup>} CommandGroupElement
 */

/**
 * @typedef {Object} CommandGroupProps props that can be passed to CommandGroup
 * @property {CommandGroupElementAttributes} [attributes] default html attributes for CommandGroup
 * @property {string} [className] component className
 * @property {CommandGroupComponentProps["heading"]} [heading] optional heading for the group
 * @property {CommandGroupComponentProps["value"]} [value] if no heading is provided, define this prop to make the group unique
 */

/**
 * @type {import("react").ForwardRefRenderFunction<CommandGroupElement, import("react").PropsWithChildren<CommandGroupProps>>}
 */
const _CommandGroup = ({ attributes, children, className, ...rest }, ref) => {
	return (
		<CmdkCommandGroup {...attributes} {...rest} className={className} ref={ref} w-command-group="">
			{children}
		</CmdkCommandGroup>
	);
};

/* -------------------------------------------------------------------------------------
 * CommandItem
 * -------------------------------------------------------------------------------------*/
/**
 * @typedef {import("react").ComponentPropsWithoutRef<typeof import("cmdk").CommandItem>} CommandItemComponentProps
 * @typedef {Omit<CommandItemComponentProps, "children" | "disabled" | "onSelect" | "value">} CommandItemElementAttributes
 * @typedef {import("react").ElementRef<typeof import("cmdk").CommandItem>} CommandItemElement
 */

/**
 * @typedef {Object} CommandItemProps props that can be passed to CommandItem
 * @property {CommandItemElementAttributes} [attributes] default html attributes for CommandItem
 * @property {string} [className] component className
 * @property {CommandItemComponentProps["disabled"]} [disabled] if true, the item will not be interactible
 * @property {CommandItemComponentProps["onSelect"]} [onSelect] event handler that is called with an item is clicked or selected via keyboard
 * @property {CommandItemComponentProps["value"]} [value] a unique value for this item. if not provided, it will be inferred by the `textContent` of the item
 */

/**
 * @type {import("react").ForwardRefRenderFunction< CommandItemElement, import("react").PropsWithChildren<CommandItemProps>>}
 */
const _CommandItem = ({ attributes, children, className, ...rest }, ref) => {
	return (
		<CmdkCommandItem {...attributes} {...rest} className={className} ref={ref} w-command-item="">
			{children}
		</CmdkCommandItem>
	);
};

/* -------------------------------------------------------------------------------------
 * CommandSeparator
 * -------------------------------------------------------------------------------------*/
/**
 * @typedef {import("react").ComponentPropsWithoutRef<typeof import("cmdk").CommandSeparator>} CommandSeparatorComponentProps
 * @typedef {Omit<CommandSeparatorComponentProps, "children">} CommandSeparatorElementAttributes
 * @typedef {import("react").ElementRef<typeof import("cmdk").CommandSeparator>} CommandSeparatorElement
 */

/**
 * @typedef {Object} CommandSeparatorProps props that can be passed to CommandSeparator
 * @property {CommandSeparatorElementAttributes} [attributes] default html attributes for CommandSeparator
 * @property {string} [className] component className
 */

/**
 * @type {import("react").ForwardRefRenderFunction< CommandSeparatorElement, import("react").PropsWithChildren<CommandSeparatorProps>>}
 */
const _CommandSeparator = ({ attributes, children, className, ...rest }, ref) => {
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
};

/* -------------------------------------------------------------------------------------
 * CommandLoading
 * -------------------------------------------------------------------------------------*/
/**
 * @typedef {import("react").ComponentPropsWithoutRef<typeof import("cmdk").CommandLoading>} CommandLoadingComponentProps
 * @typedef {Omit<CommandLoadingComponentProps, "children">} CommandLoadingElementAttributes
 * @typedef {import("react").ElementRef<typeof import("cmdk").CommandLoading>} CommandLoadingElement
 */

/**
 * @typedef {Object} CommandLoadingProps props that can be passed to CommandLoading
 * @property {CommandLoadingElementAttributes} [attributes] default html attributes for CommandLoading
 */

/**
 * @type {import("react").ForwardRefRenderFunction< CommandLoadingElement, import("react").PropsWithChildren<CommandLoadingProps>>}
 */
const _CommandLoading = ({ attributes, children, ...rest }, ref) => {
	return (
		<CmdkCommandLoading {...attributes} {...rest} ref={ref} w-command-loading="">
			{children}
		</CmdkCommandLoading>
	);
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
const Command = forwardRef(_Command);

/**
 * # CommandInput
 * An html input that searches the items
 *
 * @see {@link CommandInputProps}
 */
const CommandInput = forwardRef(_CommandInput);

/**
 * # CommandList
 * A list of items
 *
 * @see {@link CommandListProps}
 */
const CommandList = forwardRef(_CommandList);

/**
 * # CommandEmpty
 * A component that is rendered when the list is empty or has no items matching the provided search query
 *
 * @see {@link CommandEmptyProps}
 */
const CommandEmpty = forwardRef(_CommandEmpty);

/**
 * # CommandGroup
 * A collection of items grouped under a heading
 *
 * @see {@link CommandGroupProps}
 */
const CommandGroup = forwardRef(_CommandGroup);

/**
 * # CommandItem
 * A list item that can be selected using the mouse or keyboard
 *
 * @see {@link CommandItemProps}
 */
const CommandItem = forwardRef(_CommandItem);

/**
 * # CommandSeparator
 * Visually separates items or groups
 *
 * @see {@link CommandSeparatorProps}
 */
const CommandSeparator = forwardRef(_CommandSeparator);

/**
 * # CommandLoading
 * Optionally displayed when items are loading
 *
 * @see {@link CommandLoadingProps}
 */
const CommandLoading = forwardRef(_CommandLoading);

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
