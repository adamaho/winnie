import { Text } from "winnie-react";
import { Button } from "winnie-react/button";
import { Popover, PopoverContent, PopoverTrigger } from "winnie-react/popover";

import { ChooseAccentColor } from "./choose-accent-color";
import { ChooseAppearance } from "./choose-appearance";
import { ChooseRadius } from "./choose-radius";

import "./theme-configurator.css";

/* -------------------------------------------------------------------------------------
 * AccentColor
 * -------------------------------------------------------------------------------------*/
export function ThemeConfigurator() {
	return (
		<Popover>
			<PopoverTrigger displayAsChild>
				<Button variant="soft">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" />
						<path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" />
						<path d="M14.5 17.5 4.5 15" />
					</svg>
					Customize
				</Button>
			</PopoverTrigger>
			<PopoverContent
				align="end"
				w-theme=""
				w-radius-scale="medium"
				className="tc-content"
				w-display="flex"
				w-flex-direction="column"
				w-gap="5"
				w-p="4"
			>
				<div w-display="flex" w-flex-direction="column" w-gap="1">
					<Text contrast="high" size="2" weight="medium">
						Customize Theme
					</Text>
					<Text size="1">Modify the look and feel of your application</Text>
				</div>
				<ChooseAccentColor />
				<ChooseAppearance />
				<ChooseRadius />
				<div w-display="flex" w-flex-direction="column" w-gap="1">
					<Text contrast="high" size="1" weight="medium">
						Scale
					</Text>
					<div className="tc-grid">
						{[1, 2, 3, 4, 5].map((i) => {
							return <div className="tc-grid-item" key={i} />;
						})}
					</div>
				</div>
			</PopoverContent>
		</Popover>
	);
}
