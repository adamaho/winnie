"use client";

import { useRef } from "react";

import { colors } from "~/constants";

import { Flex } from "winnie-react/flex";

/* -------------------------------------------------------------------------------------
 * Utils
 * -------------------------------------------------------------------------------------*/
function getRandomColorIndex() {
	return Math.ceil(Math.random() * (colors.length - 1));
}

/* -------------------------------------------------------------------------------------
 * Avatar
 * -------------------------------------------------------------------------------------*/
type AvatarProps = {
	name: string;
};

export function Avatar(props: AvatarProps) {
	const color = useRef(colors[getRandomColorIndex()]);

	return (
		<Flex
			align="center"
			justify="center"
			w-theme=""
			w-radius-scale="round"
			w-accent-color={color.current}
			className="avatar"
		>
			{props.name.slice(0, 2)}
		</Flex>
	);
}
