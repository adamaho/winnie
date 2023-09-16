"use client";

import { forwardRef } from "react";

/**
 * @typedef {import("react").ComponentPropsWithoutRef<"button">} ButtonElementAttributes
 * @typedef {import("react").ElementRef<"button">} ButtonElement
 */

/**
 * @typedef {Object} ButtonProps - Button component props
 * @property {ButtonElementAttributes} [attrs] default attributes for HTMLButton
 * @property {string} [className] component className
 * @property {"red" | "accent"} [color] modifies the color of the button
 * @property {"0" | "1" | "2" | "3" | "full"} [radius] modifies the border radius of the button
 * @property {"1" | "2" | "3"} [size] modifies the size of the button including text
 * @property {"solid" | "soft" | "ghost"} [variant] changes the overall color appearance of the button
 */

/**
 * @type {import("react").ForwardRefRenderFunction<ButtonElement, import("react").PropsWithChildren<ButtonProps>>}
 */
const _Button = (
  {
    attrs,
    children,
    className = "",
    color = "accent",
    radius = "3",
    size = "2",
    variant = "solid",
  },
  ref,
) => {
  return (
    <button
      {...attrs}
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
