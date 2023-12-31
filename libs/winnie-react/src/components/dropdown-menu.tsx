"use client";

import {
	forwardRef,
	Fragment,
	type ComponentPropsWithoutRef,
	type ElementRef,
	type PropsWithChildren,
} from "react";

import {
	DropdownMenu as RadixDropdownMenu,
	DropdownMenuCheckboxItem as RadixDropdownMenuCheckboxItem,
	DropdownMenuContent as RadixDropdownMenuContent,
	DropdownMenuGroup as RadixDropdownMenuGroup,
	DropdownMenuItem as RadixDropdownMenuItem,
	DropdownMenuItemIndicator as RadixDropdownMenuItemIndicator,
	DropdownMenuLabel as RadixDropdownMenuLabel,
	DropdownMenuPortal as RadixDropdownMenuPortal,
	DropdownMenuRadioGroup as RadixDropdownMenuRadioGroup,
	DropdownMenuRadioItem as RadixDropdownMenuRadioItem,
	DropdownMenuSeparator as RadixDropdownMenuSeparator,
	DropdownMenuTrigger as RadixDropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Check, Dot } from "lucide-react";

/* -------------------------------------------------------------------------------------
 * DropdownMenu
 * -------------------------------------------------------------------------------------*/
type DropdownMenuComponentProps = ComponentPropsWithoutRef<
	typeof RadixDropdownMenu
>;

type DropdownMenuProps = {
	/**
	 * open state of the dropdownmenu when it first mounts
	 *
	 * @default boolean
	 */
	defaultOpen?: DropdownMenuComponentProps["defaultOpen"];

	/**
	 * reading direction of submenus when applicable
	 *
	 * @default "ltr"
	 */
	dir?: DropdownMenuComponentProps["dir"];

	/**
	 * if true, interaction with outside elements will be disabled
	 *
	 * @default false
	 */
	modal?: DropdownMenuComponentProps["modal"];

	/**
	 * optionally control the open state of the dropdown menu
	 *
	 * @default undefined
	 */
	open?: DropdownMenuComponentProps["open"];

	/**
	 * event handler that is called when the open state changes
	 *
	 * @default undefined
	 */
	onOpenChange?: DropdownMenuComponentProps["onOpenChange"];
};

function DropdownMenu({
	children,
	...props
}: PropsWithChildren<DropdownMenuComponentProps>) {
	return <RadixDropdownMenu {...props}>{children}</RadixDropdownMenu>;
}

/* -------------------------------------------------------------------------------------
 * DropdownMenuTrigger
 * -------------------------------------------------------------------------------------*/
type DropdownMenuTriggerElementProps = ComponentPropsWithoutRef<
	typeof RadixDropdownMenuTrigger
>;
type DropdownMenuTriggerElement = ElementRef<typeof RadixDropdownMenuTrigger>;

type DropdownMenuTriggerProps = {
	/**
	 * html element props
	 *
	 * @default undefined
	 */
	attributes?: Omit<
		DropdownMenuTriggerElementProps,
		"asChild" | "children" | "className"
	>;

	/**
	 * component className
	 *
	 * @default undefined
	 */
	className?: string;

	/**
	 * if true, the DropdownMenuTrigger will merge its props and display the child element
	 *
	 * @default false
	 */
	displayAsChild?: boolean;
};

const DropdownMenuTrigger = forwardRef<
	DropdownMenuTriggerElement,
	PropsWithChildren<DropdownMenuTriggerProps>
>(({ attributes, children, displayAsChild, ...rest }, ref) => {
	return (
		<RadixDropdownMenuTrigger
			{...attributes}
			{...rest}
			asChild={displayAsChild}
			w-dropdown-menu-trigger=""
			ref={ref}
		>
			{children}
		</RadixDropdownMenuTrigger>
	);
});

DropdownMenuTrigger.displayName = "DropdownMenuTrigger";

/* -------------------------------------------------------------------------------------
 * DropdownMenuContent
 * -------------------------------------------------------------------------------------*/
type DropdownMenuContentElementProps = ComponentPropsWithoutRef<
	typeof RadixDropdownMenuContent
>;
type DropdownMenuPortalElementProps = ComponentPropsWithoutRef<
	typeof RadixDropdownMenuPortal
>;
type DropdownMenuContentElement = ElementRef<typeof RadixDropdownMenuContent>;
type DropdownMenuContentProps = {
	/**
	 * html element props
	 *
	 * @default undefined
	 */
	attributes?: Omit<
		DropdownMenuContentElementProps,
		| "asChild"
		| "className"
		| "loop"
		| "onCloseAutoFocus"
		| "onEscapeKeydown"
		| "onPointerDownOutside"
		| "onFocusOutside"
		| "forceMount"
		| "side"
		| "sideOffset"
		| "align"
		| "alignOffset"
		| "avoidCollisions"
		| "collisionBoundary"
		| "collisionPadding"
		| "arrowPadding"
		| "sticky"
		| "hideWhenDetached"
	>;

	/**
	 * preferred alignment against the anchor
	 *
	 * @default "align"
	 */
	align?: DropdownMenuContentElementProps["align"];

	/**
	 * An offset in pixels from the "start" or "end" alignment options
	 *
	 * @default 0
	 */
	alignOffset?: DropdownMenuContentElementProps["alignOffset"];

	/**
	 * padding between the arrow and the edges of the content
	 *
	 * @default 0
	 */
	arrowPadding?: DropdownMenuContentElementProps["arrowPadding"];

	/**
	 * component className
	 *
	 * @default undefined
	 */
	className?: string;

	/**
	 * element used as the collision boundary. By default this is the viewport
	 *
	 * @default undefined
	 */
	collisionBoundary?: DropdownMenuContentElementProps["collisionBoundary"];

	/**
	 * distance in pixels from the boundary edges where collision detection should occur
	 *
	 * @default undefined
	 */
	collisionPadding?: DropdownMenuContentElementProps["collisionPadding"];

	/**
	 * specify the container element to portal the content to
	 *
	 * @default undefined
	 */
	container?: DropdownMenuPortalElementProps["container"];

	/**
	 * if true, the DropdownMenuContent will merge its props and display the child element
	 *
	 * @default false
	 */
	displayAsChild?: boolean;

	/**
	 * if true, the component will be mounted in the dom but not visible
	 *
	 * @default false
	 */
	forceMount?: DropdownMenuContentElementProps["forceMount"];

	/**
	 * if true, the content will be closed when the trigger is occluded
	 *
	 * @default undefined
	 */
	hideWhenDetached?: DropdownMenuContentElementProps["hideWhenDetached"];

	/**
	 * event handler called when focus moves to the trigger after closing. It can be prevented by calling event.preventDefault
	 *
	 * @default undefined
	 */
	onCloseAutoFocus?: DropdownMenuContentElementProps["onCloseAutoFocus"];

	/**
	 * event handler called when the escape key is down. It can be prevented by calling event.preventDefault
	 *
	 * @default undefined
	 */
	onEscapeKeyDown?: DropdownMenuContentElementProps["onEscapeKeyDown"];

	/**
	 * event handler called when focus moves outside the bounds of the component. It can be prevented by calling event.preventDefault
	 *
	 * @default undefined
	 */
	onFocusOutside?: DropdownMenuContentElementProps["onFocusOutside"];

	/**
	 * event handler called when an interaction (pointer or focus event) happens outside the bounds of the component. It can be prevented by calling event.preventDefault
	 *
	 * @default undefined
	 */
	onInteractOutside?: DropdownMenuContentElementProps["onInteractOutside"];

	/**
	 * if true, the content will be portalled to the container
	 *
	 * @default true
	 */
	portalled?: boolean;

	/**
	 * preferred side of the anchor to render against when open
	 *
	 * @default "bottom"
	 */
	side?: DropdownMenuContentElementProps["side"];

	/**
	 * distance in pixels from the anchor
	 *
	 * @default 8
	 */
	sideOffset?: DropdownMenuContentElementProps["sideOffset"];

	/**
	 * sticky behavior on the align axis
	 *
	 * @default undefined
	 */
	sticky?: DropdownMenuContentElementProps["sticky"];

	/**
	 * modifies the size of the dropdown menu content
	 *
	 * @default "2"
	 */
	size?: "1" | "2";
};

const DropdownMenuContent = forwardRef<
	DropdownMenuContentElement,
	PropsWithChildren<DropdownMenuContentProps>
>(
	(
		{
			attributes,
			children,
			container,
			displayAsChild,
			portalled = true,
			sideOffset = 8,
			size = "2",
			...rest
		},
		ref,
	) => {
		const Comp = portalled ? RadixDropdownMenuPortal : Fragment;

		return (
			<Comp container={container}>
				<RadixDropdownMenuContent
					{...attributes}
					{...rest}
					asChild={displayAsChild}
					sideOffset={sideOffset}
					w-dropdown-menu-content=""
					w-dropdown-menu-content-size={size}
					w-popper-content=""
					ref={ref}
				>
					{children}
				</RadixDropdownMenuContent>
			</Comp>
		);
	},
);

DropdownMenuContent.displayName = "DropdownMenuContent";

/* -------------------------------------------------------------------------------------
 * DropdownMenuItem
 * -------------------------------------------------------------------------------------*/
type DropdownMenuItemElementProps = ComponentPropsWithoutRef<
	typeof RadixDropdownMenuItem
>;
type DropdownMenuItemElement = ElementRef<typeof RadixDropdownMenuItem>;

type DropdownMenuItemProps = {
	/**
	 * underlying DropdownMenuItem html element attributes
	 *
	 * @default undefined
	 */
	attributes?: Omit<
		DropdownMenuItemElementProps,
		"asChild" | "children" | "className" | "disabled" | "onSelect" | "textValue"
	>;

	/**
	 * if true, interaction with the item will be disabled
	 *
	 * @default undefined
	 */
	disabled?: DropdownMenuItemElementProps["disabled"];

	/**
	 * if true, the DropdownMenuItem will merge its props and display the child element
	 *
	 * @default false
	 */
	displayAsChild?: boolean;

	/**
	 * event handle called when the item is interacted with
	 *
	 * @default undefined
	 */
	onSelect?: DropdownMenuItemElementProps["onSelect"];

	/**
	 * optional text value of the item
	 *
	 * @default undefined
	 */
	textValue?: DropdownMenuItemElementProps["textValue"];
};

const DropdownMenuItem = forwardRef<
	DropdownMenuItemElement,
	PropsWithChildren<DropdownMenuItemProps>
>(({ attributes, children, displayAsChild, ...rest }, ref) => {
	return (
		<RadixDropdownMenuItem
			{...attributes}
			{...rest}
			asChild={displayAsChild}
			ref={ref}
			w-dropdown-menu-item=""
		>
			{children}
		</RadixDropdownMenuItem>
	);
});

DropdownMenuItem.displayName = "DropdownMenuItem";

/* -------------------------------------------------------------------------------------
 * DropdownMenuGroup
 * -------------------------------------------------------------------------------------*/
type DropdownMenuGroupElementProps = ComponentPropsWithoutRef<
	typeof RadixDropdownMenuGroup
>;
type DropdownMenuGroupElement = ElementRef<typeof RadixDropdownMenuGroup>;

type DropdownMenuGroupProps = {
	/**
	 * underlying DropdownMenuGroup html element attributes
	 *
	 * @default undefined
	 */
	attributes?: Omit<DropdownMenuGroupElementProps, "asChild" | "children">;

	/**
	 * if true, the DropdownMenuGroup will merge its props and display the child element
	 *
	 * @default false
	 */
	displayAsChild?: boolean;
};

const DropdownMenuGroup = forwardRef<
	DropdownMenuGroupElement,
	PropsWithChildren<DropdownMenuGroupProps>
>(({ attributes, children, displayAsChild, ...rest }, ref) => {
	return (
		<RadixDropdownMenuGroup
			{...attributes}
			{...rest}
			asChild={displayAsChild}
			ref={ref}
			w-dropdown-menu-group=""
		>
			{children}
		</RadixDropdownMenuGroup>
	);
});

DropdownMenuGroup.displayName = "DropdownMenuGroup";

/* -------------------------------------------------------------------------------------
 * DropdownMenuLabel
 * -------------------------------------------------------------------------------------*/
type DropdownMenuLabelElementProps = ComponentPropsWithoutRef<
	typeof RadixDropdownMenuLabel
>;
type DropdownMenuLabelElement = ElementRef<typeof RadixDropdownMenuLabel>;

type DropdownMenuLabelProps = {
	/**
	 * underlying DropdownMenuLabel html element attributes
	 *
	 * @default undefined
	 */
	attributes?: Omit<DropdownMenuLabelElementProps, "asChild" | "children">;

	/**
	 * if true, the DropdownMenuLabel will merge its props and display the child element
	 *
	 * @default false
	 */
	displayAsChild?: boolean;
};

const DropdownMenuLabel = forwardRef<
	DropdownMenuLabelElement,
	PropsWithChildren<DropdownMenuLabelProps>
>(({ attributes, children, displayAsChild, ...rest }, ref) => {
	return (
		<RadixDropdownMenuLabel
			{...attributes}
			{...rest}
			asChild={displayAsChild}
			ref={ref}
			w-dropdown-menu-label=""
		>
			{children}
		</RadixDropdownMenuLabel>
	);
});

DropdownMenuLabel.displayName = "DropdownMenuLabel";

/* -------------------------------------------------------------------------------------
 * DropdownMenuCheckboxItem
 * -------------------------------------------------------------------------------------*/
type DropdownMenuCheckboxItemElementProps = ComponentPropsWithoutRef<
	typeof RadixDropdownMenuCheckboxItem
>;
type DropdownMenuCheckboxItemElement = ElementRef<
	typeof RadixDropdownMenuCheckboxItem
>;

type DropdownMenuCheckboxItemProps = {
	/**
	 * underlying DropdownMenuCheckboxItem html element attributes
	 *
	 * @default undefined
	 */
	attributes?: Omit<
		DropdownMenuCheckboxItemElementProps,
		| "asChild"
		| "children"
		| "disabled"
		| "onCheckedChange"
		| "onSelect"
		| "textValue"
	>;

	/**
	 * optionally controls the checked state of the item
	 *
	 * @default undefined
	 */
	checked?: DropdownMenuCheckboxItemElementProps["checked"];

	/**
	 * if true, interaction with the item will be disabled
	 *
	 * @default undefined
	 */
	disabled?: DropdownMenuCheckboxItemElementProps["disabled"];

	/**
	 * if true, the DropdownMenuCheckboxItem will merge its props and display the child element
	 *
	 * @default false
	 */
	displayAsChild?: boolean;

	/**
	 * event handler called when the checked state of the item changes
	 *
	 * @default undefined
	 */
	onCheckedChange?: DropdownMenuCheckboxItemElementProps["onCheckedChange"];

	/**
	 * event handler called when the item is interacted with
	 *
	 * @default undefined
	 */
	onSelect?: DropdownMenuCheckboxItemElementProps["onSelect"];

	/**
	 * optional text value of the item
	 *
	 * @default undefined
	 */
	textValue?: DropdownMenuCheckboxItemElementProps["textValue"];
};

const DropdownMenuCheckboxItem = forwardRef<
	DropdownMenuCheckboxItemElement,
	PropsWithChildren<DropdownMenuCheckboxItemProps>
>(({ attributes, children, displayAsChild, ...rest }, ref) => {
	return (
		<RadixDropdownMenuCheckboxItem
			{...attributes}
			{...rest}
			asChild={displayAsChild}
			ref={ref}
			w-dropdown-menu-item=""
			w-dropdown-menu-checkbox-item=""
		>
			<RadixDropdownMenuItemIndicator>
				<Check />
			</RadixDropdownMenuItemIndicator>
			{children}
		</RadixDropdownMenuCheckboxItem>
	);
});

DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem";

/* -------------------------------------------------------------------------------------
 * DropdownMenuRadioGroup
 * -------------------------------------------------------------------------------------*/
type DropdownMenuRadioGroupElementProps = ComponentPropsWithoutRef<
	typeof RadixDropdownMenuRadioGroup
>;
type DropdownMenuRadioGroupElement = ElementRef<
	typeof RadixDropdownMenuRadioGroup
>;

type DropdownMenuRadioGroupProps = {
	/**
	 * underlying DropdownMenuRadioGroup html element attributes
	 *
	 * @default undefined
	 */
	attributes?: Omit<
		DropdownMenuRadioGroupElementProps,
		"asChild" | "children" | "value" | "onValueChange"
	>;

	/**
	 * if true, the DropdownMenuRadioGroup will merge its props and display the child element
	 *
	 * @default false
	 */
	displayAsChild?: boolean;

	/**
	 * optionally control the value of the radio group
	 *
	 * @default undefined
	 */
	value?: DropdownMenuRadioGroupElementProps["value"];

	/**
	 * event handler that is called when the value of the radio group changes
	 *
	 * @detault undefined
	 */
	onValueChange?: DropdownMenuRadioGroupElementProps["onValueChange"];
};

const DropdownMenuRadioGroup = forwardRef<
	DropdownMenuRadioGroupElement,
	PropsWithChildren<DropdownMenuRadioGroupProps>
>(({ attributes, children, displayAsChild, ...rest }, ref) => {
	return (
		<RadixDropdownMenuRadioGroup
			{...attributes}
			{...rest}
			ref={ref}
			asChild={displayAsChild}
			w-dropdown-menu-radio-group=""
		>
			{children}
		</RadixDropdownMenuRadioGroup>
	);
});

DropdownMenuRadioGroup.displayName = "DropdownMenuRadioGroup";

/* -------------------------------------------------------------------------------------
 * DropdownMenuRadioItem
 * -------------------------------------------------------------------------------------*/
type DropdownMenuRadioItemElementProps = ComponentPropsWithoutRef<
	typeof RadixDropdownMenuRadioItem
>;
type DropdownMenuRadioItemElement = ElementRef<
	typeof RadixDropdownMenuRadioItem
>;

type DropdownMenuRadioItemProps = {
	/**
	 * underlying DropdownMenuRadioItem html element attributes
	 *
	 * @default undefined
	 */
	attributes?: Omit<
		DropdownMenuRadioItemElementProps,
		"asChild" | "children" | "value" | "disabled" | "onSelect" | "textValue"
	>;

	/**
	 * if true, interaction with the item will be disabled
	 *
	 * @default undefined
	 */
	disabled?: DropdownMenuRadioItemElementProps["disabled"];

	/**
	 * if true, the DropdownMenuRadioItem will merge its props and display the child element
	 *
	 * @default false
	 */
	displayAsChild?: boolean;

	/**
	 * event handler called when the item is interacted with
	 *
	 * @default undefined
	 */
	onSelect?: DropdownMenuRadioItemElementProps["onSelect"];

	/**
	 * optional text value of the item
	 *
	 * @default undefined
	 */
	textValue?: DropdownMenuRadioItemElementProps["textValue"];

	/**
	 * optional unique value of the item
	 *
	 * @default undefined
	 */
	value: DropdownMenuRadioItemElementProps["value"];
};

const DropdownMenuRadioItem = forwardRef<
	DropdownMenuRadioItemElement,
	PropsWithChildren<DropdownMenuRadioItemProps>
>(({ attributes, children, displayAsChild, ...rest }, ref) => {
	return (
		<RadixDropdownMenuRadioItem
			{...attributes}
			{...rest}
			ref={ref}
			asChild={displayAsChild}
			w-dropdown-menu-item=""
			w-dropdown-menu-radio-item=""
		>
			<RadixDropdownMenuItemIndicator>
				<Dot />
			</RadixDropdownMenuItemIndicator>
			{children}
		</RadixDropdownMenuRadioItem>
	);
});

DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem";

/* -------------------------------------------------------------------------------------
 * DropdownMenuSeparator
 * -------------------------------------------------------------------------------------*/
type DropdownMenuSeparatorElementProps = ComponentPropsWithoutRef<
	typeof RadixDropdownMenuSeparator
>;
type DropdownMenuSeparatorElement = ElementRef<
	typeof RadixDropdownMenuSeparator
>;

type DropdownMenuSeparatorProps = {
	/**
	 * underlying DropdownMenuSeparator html element attributes
	 *
	 * @default undefined
	 */
	attributes?: Omit<DropdownMenuSeparatorElementProps, "asChild" | "children">;

	/**
	 * if true, the DropdownMenuSeparator will merge its props and display the child element
	 *
	 * @default false
	 */
	displayAsChild?: boolean;
};

const DropdownMenuSeparator = forwardRef<
	DropdownMenuSeparatorElement,
	DropdownMenuSeparatorProps
>(({ attributes, displayAsChild, ...rest }, ref) => {
	return (
		<RadixDropdownMenuSeparator
			{...attributes}
			{...rest}
			ref={ref}
			asChild={displayAsChild}
			w-dropdown-menu-separator=""
		/>
	);
});

DropdownMenuSeparator.displayName = "DropdownMenuSeparator";

export {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuGroup,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuCheckboxItem,
	DropdownMenuSeparator,
};
export type {
	DropdownMenuProps,
	DropdownMenuTriggerProps,
	DropdownMenuContentProps,
	DropdownMenuItemProps,
	DropdownMenuGroupProps,
	DropdownMenuLabelProps,
	DropdownMenuRadioGroupProps,
	DropdownMenuRadioItemProps,
	DropdownMenuCheckboxItemProps,
	DropdownMenuSeparatorProps,
};
