"use client";

import { useEffect, useState } from "react";

import { Text } from "winnie-react/text";

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
		<div w-display="flex" w-flex-direction="column" w-gap="1">
			<Text contrast="high" size="1" weight="medium">
				Accent Color
			</Text>
			<div className="tc-grid">
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
						<label htmlFor={c} className="tc-grid-item" key={c}>
							<Text size="1">{c}</Text>
							<input
								type="radio"
								id={c}
								name="accent-color"
								value={c}
								checked={c === color}
								onChange={(e) => setColor(e.target.value)}
							/>
						</label>
					);
				})}
			</div>
		</div>
	);
}
