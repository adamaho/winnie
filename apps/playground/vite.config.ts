import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
	plugins: [
		solid(),
		vanillaExtractPlugin({
			identifiers(params) {
				if (!params.debugId) {
					return params.hash;
				}

				return params.debugId;
			},
		}),
	],
});
