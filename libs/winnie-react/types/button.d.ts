import { type ComponentPropsWithoutRef } from "react";
type ButtonElementAttributes = ComponentPropsWithoutRef<"button">;
type ButtonProps = {
    /**
     *
     * underlying Button html element attributes
     *
     * @default undefined
     */
    attributes?: ButtonElementAttributes;
    /**
     * className to pass to Button for additional styling
     *
     * @default undefined;
     */
    className?: string;
    /**
     * modifies the color of the Button
     *
     * @default "accent"
     */
    color?: "accent" | "red" | "grey";
    /**
     * if true, the Button will merge its props and display the child element
     *
     * @default false
     */
    displayAsChild?: boolean;
    /**
     * modifes the radius of the Button
     *
     * @default "medium"
     */
    radius?: "none" | "small" | "medium" | "large" | "round";
    /**
     * modifies the size of the button including text
     *
     * @default "medium"
     */
    size?: "small" | "medium" | "large";
    /**
     * modifies the appearance of the button
     *
     * @default "solid"
     */
    variant?: "solid" | "soft" | "ghost";
};
declare const Button: import("react").ForwardRefExoticComponent<ButtonProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLButtonElement>>;
export { Button };
export type { ButtonProps };
