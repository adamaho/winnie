"use client";

import { useState } from "react";

import { Text } from "winnie-react/text";

import "./choose-accent-color.css";

const ACCENT_COLOR_ATTR = "w-accent-color";

export function ChooseAccentColor() {
	const [color, setColor] = useState(() => {
		const body = document.querySelector("body");
		return body?.getAttribute(ACCENT_COLOR_ATTR) || "purple";
	});

	return (
		<div w-display="flex" w-flex-direction="column" w-gap="2">
			<Text contrast="high" size="1" weight="medium">
				Accent Color
			</Text>
			<div className="cas-grid">
				{[
					"red",
					"orange",
					"yellow",
					"green",
					"blue",
					"purple",
					"pink",
					"grey",
				].map((c) => {
					return (
						<label
							htmlFor={c}
							className="tc-chiclet cas-grid-item"
							key={c}
							w-accent-color={c}
							w-align-items="center"
							w-display="flex"
							w-flex-direction="row"
							w-gap="2"
						>
							<input
								type="radio"
								data-checked={c === color}
								className="cas-grid-item-input"
								id={c}
								name="accent-color"
								value={c}
								onChange={(e) =>
									setColor(() => {
										const body = document.querySelector("body");
										const value = e.target.value;
										body?.setAttribute(ACCENT_COLOR_ATTR, value);
										return value;
									})
								}
							/>
							<Text size="1" className="cas-grid-item-text">
								{c}
							</Text>
						</label>
					);
				})}
			</div>
		</div>
	);
}
