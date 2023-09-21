"use client";

import {
	forwardRef,
	Fragment,
	type ComponentPropsWithoutRef,
	type ElementRef,
	type PropsWithChildren,
} from "react";

import {
	Popover as RadixPopover,
	PopoverAnchor as RadixPopoverAnchor,
	PopoverArrow as RadixPopoverArrow,
	PopoverClose as RadixPopoverClose,
	PopoverContent as RadixPopoverContent,
	PopoverPortal as RadixPopoverPortal,
	PopoverTrigger as RadixPopoverTrigger,
} from "@radix-ui/react-popover";

/* -------------------------------------------------------------------------------------
 * Popover
 * -------------------------------------------------------------------------------------*/
type PopoverComponentProps = ComponentPropsWithoutRef<typeof RadixPopover>;

type PopoverProps = {
	/**
	 * if true, the PopoverContent will be open when the component mounts
	 *
	 * @default undefined
	 */
	defaultOpen?: PopoverComponentProps["defaultOpen"];

	/**
	 * if true interaction with outside elements will be disabled and only popover content will be visible to screen readers
	 *
	 * @default undefined
	 */
	modal?: PopoverComponentProps["modal"];

	/**
	 * optionally controls the state of the Popover. if true, the PopoverContent will be open
	 *
	 * @default undefined
	 */
	open?: PopoverComponentProps["open"];

	/**
	 * event handler that is called when the open state changes
	 *
	 * @default undefined
	 */
	onOpenChange?: PopoverComponentProps["onOpenChange"];
};

const Popover = ({ children, ...rest }: PropsWithChildren<PopoverProps>) => {
	return (
		<RadixPopover {...rest} w-popover="">
			{children}
		</RadixPopover>
	);
};

/* -------------------------------------------------------------------------------------
 * PopoverTrigger
 * -------------------------------------------------------------------------------------*/
type PopoverTriggerComponentProps = ComponentPropsWithoutRef<
	typeof RadixPopoverTrigger
>;
type PopoverTriggerElementAttributes = Omit<
	PopoverTriggerComponentProps,
	"children" | "asChild"
>;
type PopoverTriggerElement = ElementRef<typeof RadixPopoverTrigger>;

type PopoverTriggerProps = {
	/**
	 * default html attributes for PopoverTrigger
	 *
	 * @default undefined
	 */
	attributes?: PopoverTriggerElementAttributes;

	/**
	 * if true, the PopoverTrigger will merge its props and display the child element
	 *
	 * @default false
	 */
	displayAsChild?: boolean;
};

const PopoverTrigger = forwardRef<
	PopoverTriggerElement,
	PropsWithChildren<PopoverTriggerProps>
>(({ attributes, children, displayAsChild, ...rest }, ref) => {
	return (
		<RadixPopoverTrigger
			{...attributes}
			{...rest}
			asChild={displayAsChild}
			ref={ref}
			w-popover-trigger=""
		>
			{children}
		</RadixPopoverTrigger>
	);
});

/* -------------------------------------------------------------------------------------
 * PopoverAnchor
 * -------------------------------------------------------------------------------------*/
type PopoverAnchorComponentProps = ComponentPropsWithoutRef<
	typeof RadixPopoverAnchor
>;
type PopoverAnchorElementAttributes = Omit<
	PopoverAnchorComponentProps,
	"children" | "asChild"
>;
type PopoverAnchorElement = ElementRef<typeof RadixPopoverAnchor>;

type PopoverAnchorProps = {
	/**
	 * default html attributes for PopoverAnchor
	 *
	 * @default undefined
	 */
	attributes?: PopoverAnchorElementAttributes;

	/**
	 * if true, the PopoverAnchor will merge its props and display the child element
	 *
	 * @default false
	 */
	displayAsChild?: boolean;
};

const PopoverAnchor = forwardRef<
	PopoverAnchorElement,
	PropsWithChildren<PopoverAnchorProps>
>(({ attributes, children, displayAsChild, ...rest }, ref) => {
	return (
		<RadixPopoverAnchor
			{...attributes}
			{...rest}
			asChild={displayAsChild}
			ref={ref}
			w-popover-anchor=""
		>
			{children}
		</RadixPopoverAnchor>
	);
});

/* -------------------------------------------------------------------------------------
 * PopoverContent
 * -------------------------------------------------------------------------------------*/
type PopoverPortalProps = ComponentPropsWithoutRef<typeof RadixPopoverPortal>;
type PopoverContentComponentProps = ComponentPropsWithoutRef<
	typeof RadixPopoverContent
>;
type PopoverContentElementAttributes = Omit<
	PopoverContentComponentProps,
	| "asChild"
	| "children"
	| "onOpenAutoClose"
	| "onCloseAutoFocus"
	| "onEscapeKeyDown"
	| "onPointerDownOutside"
	| "onFocusOutside"
	| "onInteractOutside"
	| "forceMount"
	| "side"
	| "sideOffset"
	| "align"
	| "alignOffset"
	| "avoidCollisions"
	| "collisionBoundary"
	| "collisionPadding"
	| "sticky"
	| "hideWhenDetatched"
>;

type PopoverContentElement = ElementRef<typeof RadixPopoverContent>;

type PopoverContentProps = {
	/**
	 * default html attributes for PopoverContent
	 *
	 * @default undefined
	 */
	attributes?: PopoverContentElementAttributes;

	/**
	 * preferred alignment against the anchor
	 *
	 * @default "align"
	 */
	align?: PopoverContentComponentProps["align"];

	/**
	 * An offset in pixels from the "start" or "end" alignment options
	 *
	 * @default 0
	 */
	alignOffset?: PopoverContentComponentProps["alignOffset"];

	/**
	 * padding between the arrow and the edges of the content
	 *
	 * @default 0
	 */
	arrowPadding?: PopoverContentComponentProps["arrowPadding"];

	/**
	 * element used as the collision boundary. By default this is the viewport
	 *
	 * @default undefined
	 */
	collisionBoundary?: PopoverContentComponentProps["collisionBoundary"];

	/**
	 * distance in pixels from the boundary edges where collision detection should occur
	 *
	 * @default undefined
	 */
	collisionPadding?: PopoverContentComponentProps["collisionPadding"];

	/**
	 * specify the container element to portal the content to
	 *
	 * @default undefined
	 */
	container?: PopoverPortalProps["container"];

	/**
	 * if true, the PopoverContent will merge its props and display the child element
	 *
	 * @default false
	 */
	displayAsChild?: boolean;

	/**
	 * if true, the component will be mounted in the dom but not visible
	 *
	 * @default false
	 */
	forceMount?: PopoverContentComponentProps["forceMount"];

	/**
	 * if true, the content will be closed when the trigger is occluded
	 *
	 * @default undefined
	 */
	hideWhenDetached?: PopoverContentComponentProps["hideWhenDetached"];

	/**
	 * event handler called when focus moves to the trigger after closing. It can be prevented by calling event.preventDefault
	 *
	 * @default undefined
	 */
	onCloseAutoFocus?: PopoverContentComponentProps["onCloseAutoFocus"];

	/**
	 * event handler called when focus moves into the component after opening. It can be prevented by calling event.preventDefault
	 *
	 * @default undefined
	 */
	onOpenAutoFocus?: PopoverContentComponentProps["onOpenAutoFocus"];

	/**
	 * event handler called when the escape key is down. It can be prevented by calling event.preventDefault
	 *
	 * @default undefined
	 */
	onEscapeKeyDown?: PopoverContentComponentProps["onEscapeKeyDown"];

	/**
	 * event handler called when focus moves outside the bounds of the component. It can be prevented by calling event.preventDefault
	 *
	 * @default undefined
	 */
	onFocusOutside?: PopoverContentComponentProps["onFocusOutside"];

	/**
	 * event handler called when an interaction (pointer or focus event) happens outside the bounds of the component. It can be prevented by calling event.preventDefault
	 *
	 * @default undefined
	 */
	onInteractOutside?: PopoverContentComponentProps["onInteractOutside"];

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
	side?: PopoverContentComponentProps["side"];

	/**
	 * distance in pixels from the anchor
	 *
	 * @default 8
	 */
	sideOffset?: PopoverContentComponentProps["sideOffset"];

	/**
	 * sticky behavior on the align axis
	 *
	 * @default undefined
	 */
	sticky?: PopoverContentComponentProps["sticky"];
};

const PopoverContent = forwardRef<
	PopoverContentElement,
	PropsWithChildren<PopoverContentProps>
>(
	(
		{
			attributes,
			children,
			displayAsChild,
			portalled = true,
			sideOffset = 8,
			...rest
		},
		ref,
	) => {
		const Comp = portalled ? RadixPopoverPortal : Fragment;

		return (
			<Comp>
				<RadixPopoverContent
					{...attributes}
					{...rest}
					asChild={displayAsChild}
					ref={ref}
					sideOffset={sideOffset}
					w-popover-content=""
					w-popper-content=""
				>
					{children}
				</RadixPopoverContent>
			</Comp>
		);
	},
);

/* -------------------------------------------------------------------------------------
 * PopoverArrow
 * -------------------------------------------------------------------------------------*/
type PopoverArrowComponentProps = ComponentPropsWithoutRef<
	typeof RadixPopoverArrow
>;
type PopoverArrowElementAttributes = Omit<
	PopoverArrowComponentProps,
	"children" | "asChild" | "width" | "height"
>;
type PopoverArrowElement = ElementRef<typeof RadixPopoverArrow>;

type PopoverArrowProps = {
	/**
	 * default html attributes for PopoverArrow
	 *
	 * @default
	 */
	attributes?: PopoverArrowElementAttributes;

	/**
	 * component className
	 */
	className?: string;

	/**
	 * if true, the PopoverArrow will merge its props and display the child element
	 *
	 * @default false
	 */
	displayAsChild?: boolean;

	/**
	 * height of the arrow
	 *
	 * @default undefined
	 */
	height?: PopoverArrowComponentProps["height"];

	/**
	 * width of the arrow
	 *
	 * @default undefined
	 */
	width?: PopoverArrowComponentProps["width"];
};

const PopoverArrow = forwardRef<
	PopoverArrowElement,
	PropsWithChildren<PopoverArrowProps>
>(({ attributes, children, displayAsChild, ...rest }, ref) => {
	return (
		<RadixPopoverArrow
			{...attributes}
			{...rest}
			asChild={displayAsChild}
			ref={ref}
			w-popover-arrow=""
		>
			{children}
		</RadixPopoverArrow>
	);
});

/* -------------------------------------------------------------------------------------
 * PopoverClose
 * -------------------------------------------------------------------------------------*/
type PopoverCloseComponentProps = ComponentPropsWithoutRef<
	typeof RadixPopoverClose
>;
type PopoverCloseElementAttributes = Omit<
	PopoverCloseComponentProps,
	"children" | "asChild"
>;
type PopoverCloseElement = ElementRef<typeof RadixPopoverClose>;

type PopoverCloseProps = {
	/**
	 * default html attributes for PopoverClose
	 *
	 * @default undefined
	 */
	attributes?: PopoverCloseElementAttributes;

	/**
	 * component className
	 *
	 * @default undefined
	 */
	className?: string;

	/**
	 * if true, the PopoverClose will merge its props and display the child element
	 *
	 * @default false
	 */
	displayAsChild?: boolean;
};

const PopoverClose = forwardRef<
	PopoverCloseElement,
	PropsWithChildren<PopoverCloseProps>
>(({ attributes, children, displayAsChild, ...rest }, ref) => {
	return (
		<RadixPopoverClose
			{...attributes}
			{...rest}
			asChild={displayAsChild}
			ref={ref}
			w-popover-close=""
		>
			{children}
		</RadixPopoverClose>
	);
});

export {
	Popover,
	PopoverTrigger,
	PopoverAnchor,
	PopoverContent,
	PopoverArrow,
	PopoverClose,
};
