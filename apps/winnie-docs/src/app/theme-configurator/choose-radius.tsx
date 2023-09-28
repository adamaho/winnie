"use client";

import { useState } from "react";

import { Flex } from "winnie-react/flex";
import { Text } from "winnie-react/text";

import "./choose-radius.css";

const RADIUS_ATTR = "w-radius-scale";

const radii = ["none", "small", "medium", "large", "round"] as const;
type Radius = (typeof radii)[number];

export function ChooseRadius() {
	const [radius, setRadius] = useState<Radius>(() => {
		const body = document.querySelector("body");
		const radius = body?.getAttribute(RADIUS_ATTR) as Radius;
		return radius ?? "medium";
	});

	return (
		<Flex direction="column" gap="2">
			<Text contrast="high" size="1" weight="medium">
				Corner Radius
			</Text>
			<div className="cr-grid">
				{Array.from(radii).map((r) => {
					return (
						<label key={r} htmlFor={r} className="tc-chiclet cr-grid-item">
							<input
								type="radio"
								data-checked={radius === r}
								className="cr-grid-item-input"
								id={r}
								name="radius"
								value={r}
								onChange={(e) =>
									setRadius(() => {
										const body = document.querySelector("body");
										const value = e.target.value as Radius;
										body?.setAttribute(RADIUS_ATTR, value);
										return value;
									})
								}
							/>
							<div data-border-radius={r} className="cr-grid-item-preview" />
							<Text size="1">{r}</Text>
						</label>
					);
				})}
			</div>
		</Flex>
	);
}
