"use client";

import { type ComponentPropsWithoutRef } from "react";

import { X } from "lucide-react";

import "./remove.css";

type RemoveFilterButtonProps = ComponentPropsWithoutRef<"button">;

export function RemoveFilterButton(props: RemoveFilterButtonProps) {
	return (
		<button {...props} className="remove-filter-button">
			<X />
		</button>
	);
}
