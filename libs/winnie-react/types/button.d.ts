export type ButtonElementAttributes = import("react").ComponentPropsWithoutRef<"button">;
export type ButtonElement = import("react").ElementRef<"button">;
/**
 * props that can be passed to Button
 */
export type ButtonProps = {
    /**
     * default attributes for HTMLButton
     */
    attributes?: Omit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> | undefined;
    /**
     * component className
     */
    className?: string | undefined;
    /**
     * modifies the color of the button
     */
    color?: "accent" | "grey" | "red" | undefined;
    /**
     * modifies the border radius of the button
     */
    radius?: "small" | "none" | "medium" | "large" | "round" | undefined;
    /**
     * if true, the Button will merge its props onto the immediate child including the HTMLElement
     */
    slotted?: boolean | undefined;
    /**
     * modifies the size of the button including text
     */
    size?: "small" | "medium" | "large" | undefined;
    /**
     * changes the overall color appearance of the button
     */
    variant?: "solid" | "soft" | "ghost" | undefined;
};
/**
 * # Button
 * Trigger an action or event from user interaction.
 *
 * ## Usage
 *
 * ```jsx
 * <Button>
 *   Bookmark
 * <Button>
 * ```
 *
 * @see {@link ButtonProps}
 * @see {@link http://github.com Documentation}
 */
export const Button: import("react").ForwardRefExoticComponent<ButtonProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLButtonElement>>;
