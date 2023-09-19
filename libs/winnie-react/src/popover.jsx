"use client";

import { forwardRef, Fragment } from "react";

import {
	Popover as RadixPopover,
	PopoverTrigger as RadixPopoverTrigger,
	PopoverAnchor as RadixPopoverAnchor,
	PopoverPortal as RadixPopoverPortal,
	PopoverContent as RadixPopoverContent,
	PopoverArrow as RadixPopoverArrow,
	PopoverClose as RadixPopoverClose,
} from "@radix-ui/react-popover";

/* -------------------------------------------------------------------------------------
 * Popover
 * -------------------------------------------------------------------------------------*/
/**
 * @typedef {import("react").ComponentPropsWithoutRef<typeof import("@radix-ui/react-popover").Popover>} PopoverComponentProps
 */

/**
 * @typedef {Object} PopoverProps props that can be passed to Popover
 * @property {PopoverComponentProps["defaultOpen"]} [defaultOpen] if true, the PopoverContent will be open when the component mounts
 * @property {PopoverComponentProps["modal"]} [modal] if true interaction with outside elements will be disabled and only popover content will be visible to screen readers
 * @property {PopoverComponentProps["open"]} [open] optionally controls the state of the Popover. if true, the PopoverContent will be open
 * @property {PopoverComponentProps["onOpenChange"]} [onOpenChange] event handler that is called when the open state changes
 */

/**
 * @type {import("react").FunctionComponent<import("react").PropsWithChildren<PopoverProps>>}
 */
const _Popover = ({ children, ...rest }) => {
	return (
		<RadixPopover {...rest} w-popover="">
			{children}
		</RadixPopover>
	);
};

/* -------------------------------------------------------------------------------------
 * PopoverTrigger
 * -------------------------------------------------------------------------------------*/
/**
 * @typedef {import("react").ComponentPropsWithoutRef<typeof import("@radix-ui/react-popover").PopoverTrigger>} PopoverTriggerComponentProps
 * @typedef {Omit<PopoverTriggerComponentProps, "children" | "asChild">} PopoverTriggerElementAttributes
 * @typedef {import("react").ElementRef<typeof import("@radix-ui/react-popover").PopoverTrigger>} PopoverTriggerElement
 */

/**
 * @typedef {Object} PopoverTriggerProps props that can be passed to PopoverTrigger
 * @property {PopoverTriggerElementAttributes} [attributes] default html attributes for PopoverTrigger
 * @property {boolean} [displayAsChild] if true, the PopoverTrigger will merge its props and display the child element
 */

/**
 * @type {import("react").ForwardRefRenderFunction<PopoverTriggerElement, import("react").PropsWithChildren<PopoverTriggerProps>>}
 */
const _PopoverTrigger = ({ attributes, children, displayAsChild, ...rest }, ref) => {
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
};

/* -------------------------------------------------------------------------------------
 * PopoverAnchor
 * -------------------------------------------------------------------------------------*/
/**
 * @typedef {import("react").ComponentPropsWithoutRef<typeof import("@radix-ui/react-popover").PopoverAnchor>} PopoverAnchorComponentProps
 * @typedef {Omit<PopoverAnchorComponentProps, "children" | "asChild">} PopoverAnchorElementAttributes
 * @typedef {import("react").ElementRef<typeof import("@radix-ui/react-popover").PopoverAnchor>} PopoverAnchorElement
 */

/**
 * @typedef {Object} PopoverAnchorProps props that can be passed to PopoverAnchor
 * @property {PopoverAnchorElementAttributes} [attributes] default html attributes for PopoverAnchor
 * @property {boolean} [displayAsChild] if true, the PopoverAnchor will merge its props and display the child element
 */

/**
 * @type {import("react").ForwardRefRenderFunction<PopoverAnchorElement, import("react").PropsWithChildren<PopoverAnchorProps>>}
 */
const _PopoverAnchor = ({ attributes, children, displayAsChild, ...rest }, ref) => {
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
};

/* -------------------------------------------------------------------------------------
 * PopoverContent
 * -------------------------------------------------------------------------------------*/
/**
 * @typedef {import("react").ComponentPropsWithoutRef<typeof import("@radix-ui/react-popover").PopoverPortal>} PopoverPortalProps
 */
/**
 * @typedef {import("react").ComponentPropsWithoutRef<typeof import("@radix-ui/react-popover").PopoverContent>} PopoverContentComponentProps
 * @typedef {Omit<PopoverContentComponentProps,
 *      "asChild" |
 *      "children" |
 *      "onOpenAutoFocus" |
 *      "onCloseAutoFocus" |
 *      "onEscapeKeydown" |
 *      "onPointerDownOutside" |
 *      "onFocusOutside" |
 *      "onInteractOutside" |
 *      "forceMount" |
 *      "side" |
 *      "sideOffset" |
 *      "align" |
 *      "alignOffset" |
 *      "avoidCollisions" |
 *      "collisionBoundary" |
 *      "collisionPadding" |
 *      "arrowPadding" |
 *      "sticky" |
 *      "hideWhenDetached"
 * >} PopoverContentElementAttributes
 * @typedef {import("react").ElementRef<typeof import("@radix-ui/react-popover").PopoverAnchor>} PopoverContentElement
 */

/**
 * @typedef {Object} PopoverContentProps props that can be passed to PopoverContent
 * @property {PopoverContentElementAttributes} [attributes] default html attributes for PopoverContent
 * @property {PopoverContentComponentProps["align"]} [align] preferred alignment against the anchor
 * @property {PopoverContentComponentProps["alignOffset"]} [alignOffset] An offset in pixels from the "start" or "end" alignment options
 * @property {PopoverContentComponentProps["arrowPadding"]} [arrowPadding] padding between the arrow and the edges of the content
 * @property {PopoverContentComponentProps["collisionBoundary"]} [collisionBoundary] element used as the collision boundary. By default this is the viewport
 * @property {PopoverContentComponentProps["collisionPadding"]} [collisionPadding] distance in pixels from the boundary edges where collision detection should occur
 * @property {PopoverPortalProps["container"]} [container] specify the container element to portal the content to
 * @property {boolean} [displayAsChild] if true, the PopoverContent will merge its props and display the child element
 * @property {PopoverContentComponentProps["forceMount"]} [forceMount] if true, the component will be mounted in the dom but not visible
 * @property {PopoverContentComponentProps["hideWhenDetached"]} [hideWhenDetached] if true, the content will be closed when the trigger is occluded
 * @property {PopoverContentComponentProps["onCloseAutoFocus"]} [onCloseAutoFocus] event handler called when focus moves to the trigger after closing. It can be prevented by calling event.preventDefault
 * @property {PopoverContentComponentProps["onOpenAutoFocus"]} [onOpenAutoFocus] event handler called when focus moves into the component after opening. It can be prevented by calling event.preventDefault
 * @property {PopoverContentComponentProps["onEscapeKeyDown"]} [onEscapeKeyDown] event handler called when the escape key is down. It can be prevented by calling event.preventDefault
 * @property {PopoverContentComponentProps["onFocusOutside"]} [onFocusOutside] event handler called when focus moves outside the bounds of the component. It can be prevented by calling event.preventDefault
 * @property {PopoverContentComponentProps["onInteractOutside"]} [onInteractOutside] event handler called when an interaction (pointer or focus event) happens outside the bounds of the component. It can be prevented by calling event.preventDefault
 * @property {boolean} [portalled] if true, the content will be portalled to the container
 * @property {PopoverContentComponentProps["side"]} [side] preferred side of the anchor to render against when open
 * @property {PopoverContentComponentProps["sideOffset"]} [sideOffset] distance in pixels from the anchor
 * @property {PopoverContentComponentProps["sticky"]} [sticky] sticky behavior on the align axis
 */

/**
 * @type {import("react").ForwardRefRenderFunction<PopoverAnchorElement, import("react").PropsWithChildren<PopoverContentProps>>}
 */
const _PopoverContent = (
	{ attributes, children, displayAsChild, portalled = true, sideOffset = 8, ...rest },
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
			>
				{children}
			</RadixPopoverContent>
		</Comp>
	);
};

/* -------------------------------------------------------------------------------------
 * PopoverArrow
 * -------------------------------------------------------------------------------------*/
/**
 * @typedef {import("react").ComponentPropsWithoutRef<typeof import("@radix-ui/react-popover").PopoverArrow>} PopoverArrowComponentProps
 * @typedef {Omit<PopoverArrowComponentProps, "children" | "asChild" | "width" | "height">} PopoverArrowElementAttributes
 * @typedef {import("react").ElementRef<typeof import("@radix-ui/react-popover").PopoverArrow>} PopoverArrowElement
 */

/**
 * @typedef {Object} PopoverArrowProps props that can be passed toPopoverArrow
 * @property {PopoverArrowElementAttributes} [attributes] default html attributes forPopoverArrow
 * @property {string} [className] if true, the PopoverArrow will merge its props and display the child element
 * @property {boolean} [displayAsChild] if true, the PopoverArrow will merge its props and display the child element
 * @property {PopoverArrowComponentProps["height"]} [height] height of the arrow
 * @property {PopoverArrowComponentProps["width"]} [width] width of the arrow
 */

/**
 * @type {import("react").ForwardRefRenderFunction<PopoverArrowElement, import("react").PropsWithChildren<PopoverArrowProps>>}
 */
const _PopoverArrow = ({ attributes, children, displayAsChild, ...rest }, ref) => {
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
};

/* -------------------------------------------------------------------------------------
 * PopoverClose
 * -------------------------------------------------------------------------------------*/
/**
 * @typedef {import("react").ComponentPropsWithoutRef<typeof import("@radix-ui/react-popover").PopoverClose>} PopoverCloseComponentProps
 * @typedef {Omit<PopoverCloseComponentProps, "children" | "asChild">} PopoverCloseElementAttributes
 * @typedef {import("react").ElementRef<typeof import("@radix-ui/react-popover").PopoverClose>} PopoverCloseElement
 */

/**
 * @typedef {Object} PopoverCloseProps props that can be passed to PopoverClose
 * @property {PopoverCloseElementAttributes} [attributes] default html attributes for PopoverClose
 * @property {string} [className] if true, the PopoverClose will merge its props and display the child element
 * @property {boolean} [displayAsChild] if true, the PopoverClose will merge its props and display the child element
 */

/**
 * @type {import("react").ForwardRefRenderFunction<PopoverCloseElement, import("react").PropsWithChildren<PopoverCloseProps>>}
 */
const _PopoverClose = ({ attributes, children, displayAsChild, ...rest }, ref) => {
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
};

const Popover = _Popover;
const PopoverTrigger = forwardRef(_PopoverTrigger);
const PopoverAnchor = forwardRef(_PopoverAnchor);
const PopoverContent = forwardRef(_PopoverContent);
const PopoverArrow = forwardRef(_PopoverArrow);
const PopoverClose = forwardRef(_PopoverClose);

export { Popover, PopoverTrigger, PopoverAnchor, PopoverContent, PopoverArrow, PopoverClose };
