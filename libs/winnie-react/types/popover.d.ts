export type PopoverComponentProps = import("react").ComponentPropsWithoutRef<typeof import("@radix-ui/react-popover").Popover>;
/**
 * props that can be passed to Popover
 */
export type PopoverProps = {
    /**
     * if true, the PopoverContent will be open when the component mounts
     */
    defaultOpen?: PopoverComponentProps["defaultOpen"];
    /**
     * if true interaction with outside elements will be disabled and only popover content will be visible to screen readers
     */
    modal?: PopoverComponentProps["modal"];
    /**
     * optionally controls the state of the Popover. if true, the PopoverContent will be open
     */
    open?: PopoverComponentProps["open"];
    /**
     * event handler that is called when the open state changes
     */
    onOpenChange?: PopoverComponentProps["onOpenChange"];
};
export type PopoverTriggerComponentProps = import("react").ComponentPropsWithoutRef<typeof import("@radix-ui/react-popover").PopoverTrigger>;
export type PopoverTriggerElementAttributes = Omit<PopoverTriggerComponentProps, "children" | "asChild">;
export type PopoverTriggerElement = import("react").ElementRef<typeof import("@radix-ui/react-popover").PopoverTrigger>;
/**
 * props that can be passed to PopoverTrigger
 */
export type PopoverTriggerProps = {
    /**
     * default html attributes for PopoverTrigger
     */
    attributes?: PopoverTriggerElementAttributes | undefined;
    /**
     * if true, the PopoverTrigger will merge its props and display the child element
     */
    displayAsChild?: boolean | undefined;
};
export type PopoverAnchorComponentProps = import("react").ComponentPropsWithoutRef<typeof import("@radix-ui/react-popover").PopoverAnchor>;
export type PopoverAnchorElementAttributes = Omit<PopoverAnchorComponentProps, "children" | "asChild">;
export type PopoverAnchorElement = import("react").ElementRef<typeof import("@radix-ui/react-popover").PopoverAnchor>;
/**
 * props that can be passed to PopoverAnchor
 */
export type PopoverAnchorProps = {
    /**
     * default html attributes for PopoverAnchor
     */
    attributes?: PopoverAnchorElementAttributes | undefined;
    /**
     * if true, the PopoverAnchor will merge its props and display the child element
     */
    displayAsChild?: boolean | undefined;
};
export type PopoverPortalProps = import("react").ComponentPropsWithoutRef<typeof import("@radix-ui/react-popover").PopoverPortal>;
export type PopoverContentComponentProps = import("react").ComponentPropsWithoutRef<typeof import("@radix-ui/react-popover").PopoverContent>;
export type PopoverContentElementAttributes = Omit<PopoverContentComponentProps, "asChild" | "children" | "onOpenAutoFocus" | "onCloseAutoFocus" | "onEscapeKeydown" | "onPointerDownOutside" | "onFocusOutside" | "onInteractOutside" | "forceMount" | "side" | "sideOffset" | "align" | "alignOffset" | "avoidCollisions" | "collisionBoundary" | "collisionPadding" | "arrowPadding" | "sticky" | "hideWhenDetached">;
export type PopoverContentElement = import("react").ElementRef<typeof import("@radix-ui/react-popover").PopoverAnchor>;
/**
 * props that can be passed to PopoverContent
 */
export type PopoverContentProps = {
    /**
     * default html attributes for PopoverContent
     */
    attributes?: PopoverContentElementAttributes | undefined;
    /**
     * preferred alignment against the anchor
     */
    align?: PopoverContentComponentProps["align"];
    /**
     * An offset in pixels from the "start" or "end" alignment options
     */
    alignOffset?: PopoverContentComponentProps["alignOffset"];
    /**
     * padding between the arrow and the edges of the content
     */
    arrowPadding?: PopoverContentComponentProps["arrowPadding"];
    /**
     * element used as the collision boundary. By default this is the viewport
     */
    collisionBoundary?: PopoverContentComponentProps["collisionBoundary"];
    /**
     * distance in pixels from the boundary edges where collision detection should occur
     */
    collisionPadding?: PopoverContentComponentProps["collisionPadding"];
    /**
     * specify the container element to portal the content to
     */
    container?: PopoverPortalProps["container"];
    /**
     * if true, the PopoverContent will merge its props and display the child element
     */
    displayAsChild?: boolean | undefined;
    /**
     * if true, the component will be mounted in the dom but not visible
     */
    forceMount?: PopoverContentComponentProps["forceMount"];
    /**
     * if true, the content will be closed when the trigger is occluded
     */
    hideWhenDetached?: PopoverContentComponentProps["hideWhenDetached"];
    /**
     * event handler called when focus moves to the trigger after closing. It can be prevented by calling event.preventDefault
     */
    onCloseAutoFocus?: PopoverContentComponentProps["onCloseAutoFocus"];
    /**
     * event handler called when focus moves into the component after opening. It can be prevented by calling event.preventDefault
     */
    onOpenAutoFocus?: PopoverContentComponentProps["onOpenAutoFocus"];
    /**
     * event handler called when the escape key is down. It can be prevented by calling event.preventDefault
     */
    onEscapeKeyDown?: PopoverContentComponentProps["onEscapeKeyDown"];
    /**
     * event handler called when focus moves outside the bounds of the component. It can be prevented by calling event.preventDefault
     */
    onFocusOutside?: PopoverContentComponentProps["onFocusOutside"];
    /**
     * event handler called when an interaction (pointer or focus event) happens outside the bounds of the component. It can be prevented by calling event.preventDefault
     */
    onInteractOutside?: PopoverContentComponentProps["onInteractOutside"];
    /**
     * if true, the content will be portalled to the container
     */
    portalled?: boolean | undefined;
    /**
     * preferred side of the anchor to render against when open
     */
    side?: PopoverContentComponentProps["side"];
    /**
     * distance in pixels from the anchor
     */
    sideOffset?: PopoverContentComponentProps["sideOffset"];
    /**
     * sticky behavior on the align axis
     */
    sticky?: PopoverContentComponentProps["sticky"];
};
export type PopoverArrowComponentProps = import("react").ComponentPropsWithoutRef<typeof import("@radix-ui/react-popover").PopoverArrow>;
export type PopoverArrowElementAttributes = Omit<PopoverArrowComponentProps, "children" | "asChild" | "width" | "height">;
export type PopoverArrowElement = import("react").ElementRef<typeof import("@radix-ui/react-popover").PopoverArrow>;
/**
 * props that can be passed toPopoverArrow
 */
export type PopoverArrowProps = {
    /**
     * default html attributes forPopoverArrow
     */
    attributes?: PopoverArrowElementAttributes | undefined;
    /**
     * if true, the PopoverArrow will merge its props and display the child element
     */
    className?: string | undefined;
    /**
     * if true, the PopoverArrow will merge its props and display the child element
     */
    displayAsChild?: boolean | undefined;
    /**
     * height of the arrow
     */
    height?: PopoverArrowComponentProps["height"];
    /**
     * width of the arrow
     */
    width?: PopoverArrowComponentProps["width"];
};
export type PopoverCloseComponentProps = import("react").ComponentPropsWithoutRef<typeof import("@radix-ui/react-popover").PopoverClose>;
export type PopoverCloseElementAttributes = Omit<PopoverCloseComponentProps, "children" | "asChild">;
export type PopoverCloseElement = import("react").ElementRef<typeof import("@radix-ui/react-popover").PopoverClose>;
/**
 * props that can be passed to PopoverClose
 */
export type PopoverCloseProps = {
    /**
     * default html attributes for PopoverClose
     */
    attributes?: PopoverCloseElementAttributes | undefined;
    /**
     * if true, the PopoverClose will merge its props and display the child element
     */
    className?: string | undefined;
    /**
     * if true, the PopoverClose will merge its props and display the child element
     */
    displayAsChild?: boolean | undefined;
};
export const Popover: import("react").FunctionComponent<import("react").PropsWithChildren<PopoverProps>>;
export const PopoverTrigger: import("react").ForwardRefExoticComponent<PopoverTriggerProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLButtonElement>>;
export const PopoverAnchor: import("react").ForwardRefExoticComponent<PopoverAnchorProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDivElement>>;
export const PopoverContent: import("react").ForwardRefExoticComponent<PopoverContentProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDivElement>>;
export const PopoverArrow: import("react").ForwardRefExoticComponent<PopoverArrowProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<SVGSVGElement>>;
export const PopoverClose: import("react").ForwardRefExoticComponent<PopoverCloseProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLButtonElement>>;
