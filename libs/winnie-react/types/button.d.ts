export type ButtonElementAttributes = import("react").ComponentPropsWithoutRef<"button">;
export type ButtonElement = import("react").ElementRef<"button">;
/**
 * - Button component props
 */
export type ButtonProps = {
    /**
     * default attributes for HTMLButton
     */
    attrs?: Omit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> | undefined;
    /**
     * component className
     */
    className?: string | undefined;
    /**
     * modifies the color of the button
     */
    color?: "red" | "accent" | undefined;
    /**
     * modifies the border radius of the button
     */
    radius?: "0" | "1" | "2" | "3" | "full" | undefined;
    /**
     * modifies the size of the button including text
     */
    size?: "1" | "2" | "3" | undefined;
    /**
     * changes the overall color appearance of the button
     */
    variant?: "solid" | "soft" | "ghost" | undefined;
};
/**
 * # Button
 *
 * A clickable element
 *
 * Some more stuff to do with the button
 */
export const Button: import("react").ForwardRefExoticComponent<ButtonProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLButtonElement>>;
