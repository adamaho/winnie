"use client";

import { useEffect, useState } from "react";

import { Text } from "winnie-react/text";

import "./choose-accent-color.css";

const ACCENT_COLOR_ATTR = "w-accent-color";

export function ChooseAccentColor() {
	const [color, setColor] = useState(() => {
		const body = document.querySelector("body");
		return body?.getAttribute(ACCENT_COLOR_ATTR) || "purple";
	});

	useEffect(() => {
		const body = document.querySelector("body");
		body?.setAttribute(ACCENT_COLOR_ATTR, color);
	}, [color]);

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
							className="cas-grid-item"
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
								onChange={(e) => setColor(e.target.value)}
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
