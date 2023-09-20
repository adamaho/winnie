export type TextElement = import("react").ElementRef<"span"> | import("react").ElementRef<"div">;
export type TextDivAttributes = Omit<import("react").ComponentPropsWithoutRef<'div'>, "className" | "align" | "children">;
export type TextDivProps = {
    attributes: TextDivAttributes;
    as: "div";
    children: string;
};
export type TextSpanAttributes = Omit<import("react").ComponentPropsWithoutRef<'span'>, "className" | "align" | "children">;
export type TextSpanProps = {
    attributes: TextSpanAttributes;
    as: "span";
};
export type TextPAttributes = Omit<import("react").ComponentPropsWithoutRef<'p'>, "className" | "align" | "children">;
export type TextPProps = {
    attributes: TextPAttributes;
    as: "p";
};
export type SharedTextProps = {
    /**
     * changes how the text aligns in its container
     */
    align?: "center" | "right" | "left" | undefined;
    /**
     * component className
     */
    className?: string | undefined;
    /**
     * children
     */
    children?: import("react").ReactNode;
    /**
     * modifies the color of the text
     */
    color?: "accent" | "grey" | "red" | "orange" | "yellow" | "green" | "blue" | "purple" | "pink" | undefined;
    /**
     * modifies the color of the text
     */
    size?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | undefined;
    /**
     * modifies the weight of the text
     */
    weight?: "medium" | "bold" | "light" | "normal" | "extra-bold" | undefined;
};
export type TextProps = SharedTextProps & (TextDivProps | TextPProps | TextSpanProps) & {
    children: string;
};
export const Text: import("react").ForwardRefExoticComponent<(TextProps & {
    children: string;
}) & import("react").RefAttributes<TextElement>>;
