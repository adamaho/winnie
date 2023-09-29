"use client";

import { useState } from "react";

import { Flex } from "winnie-react/flex";
import { Text } from "winnie-react/text";

import "./choose-scale.css";

const SCALE_ATTR = "w-scale";

const scales = ["90", "95", "100", "105", "110"] as const;
type Scale = (typeof scales)[number];

export function ChooseScale() {
	const [scale, setScale] = useState<Scale>(() => {
		const body = document.querySelector("body");
		const scale = body?.getAttribute(SCALE_ATTR) as Scale;
		return scale ?? "medium";
	});

	return (
		<Flex direction="column" gap="1">
			<Text contrast="high" size="1" weight="medium">
				Scale
			</Text>
			<div className="cs-grid">
				{Array.from(scales).map((s) => {
					return (
						<label key={s} htmlFor={s} className="tc-chiclet cs-grid-item">
							<input
								type="radio"
								data-checked={scale === s}
								className="cs-grid-item-input"
								id={s}
								name="scale"
								value={s}
								onChange={(e) =>
									setScale(() => {
										const body = document.querySelector("body");
										const value = e.target.value as Scale;
										body?.setAttribute(SCALE_ATTR, value);
										return value;
									})
								}
							/>
							<Text size="1">{s}%</Text>
						</label>
					);
				})}
			</div>
		</Flex>
	);
}
