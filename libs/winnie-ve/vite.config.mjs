import { resolve } from "path";

import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "vite";

export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "winnie-ve",
			fileName: "winnie-ve",
			formats: ["es"],
		},
		minify: false,
	},
	plugins: [
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
