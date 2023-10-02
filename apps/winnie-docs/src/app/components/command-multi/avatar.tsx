"use client";

import { Flex } from "winnie-react/flex";

/* -------------------------------------------------------------------------------------
 * Avatar
 * -------------------------------------------------------------------------------------*/
type AvatarProps = {
	color: string;
	name: string;
};

export function Avatar(props: AvatarProps) {
	return (
		<Flex
			align="center"
			justify="center"
			w-theme=""
			w-radius-scale="round"
			w-accent-color={props.color}
			className="avatar"
		>
			{props.name.slice(0, 2)}
		</Flex>
	);
}
