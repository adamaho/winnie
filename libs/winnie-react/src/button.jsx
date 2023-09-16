"use client";

import { forwardRef } from "react";

/**
 * @typedef {import("react").ComponentPropsWithoutRef<"button">} ButtonElementAttributes
 * @typedef {import("react").ElementRef<"button">} ButtonElement
 */

/**
 * @typedef {Object} ButtonProps props that can be passed to Button 
 * @property {ButtonElementAttributes} [attributes] default attributes for HTMLButton
 * @property {string} [className] component className
 * @property {"accent" | "grey" | "red" } [color] modifies the color of the button
 * @property {"none" | "small" | "medium" | "large" | "round"} [radius] modifies the border radius of the button
 * @property {"small" | "medium" | "large"} [size] modifies the size of the button including text
 * @property {"solid" | "soft" | "ghost"} [variant] changes the overall color appearance of the button
 */

/**
 * @type {import("react").ForwardRefRenderFunction<ButtonElement, import("react").PropsWithChildren<ButtonProps>>}
 */
const _Button = (
  {
    attributes,
    children,
    className = "",
    color = "accent",
    radius = "medium",
    size = "medium",
    variant = "solid",
  },
  ref,
) => {
  return (
    <button
      {...attributes}
      className={className}
      ref={ref}
      w-button=""
      w-button-color={color}
      w-button-radius={radius}
      w-button-size={size}
      w-button-variant={variant}
    >
      {children}
    </button>
  );
};

/**
 * # Button
 *
 * A clickable element
 *
 * Some more stuff to do with the button
 */
const Button = forwardRef(_Button);

export { Button };
