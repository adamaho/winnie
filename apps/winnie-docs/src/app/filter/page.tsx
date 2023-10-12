import { Award, CircleSlashed, Focus, Plus } from "lucide-react";

import { Button } from "winnie-react/button";
import { Checkbox } from "winnie-react/checkbox";
import {
	CommandMulti,
	CommandMultiCheckboxItem,
	CommandMultiEmpty,
	CommandMultiList,
	CommandMultiTextField,
	CommandMultiTextFieldInput,
} from "winnie-react/command-multi";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "winnie-react/dropdown-menu";
import { Flex } from "winnie-react/flex";
import { Heading } from "winnie-react/heading";
import { Text } from "winnie-react/text";

import { FilterBar } from "./filter-bar/filter-bar";

import "./page.css";

import {
	Command,
	CommandEmpty,
	CommandItem,
	CommandList,
	CommandTextField,
	CommandTextFieldInput,
} from "winnie-react/command";
import { Kbd } from "winnie-react/kbd";
import { Popover, PopoverContent, PopoverTrigger } from "winnie-react/popover";

export default function Page() {
	return (
		<div className="demo-container">
			<Heading className="mt-7">Methodology</Heading>
			<Text>Use primitive components to create dynamic interfaces.</Text>

			<Heading className="mt-7" displayAs="h2" size="6">
				Button
			</Heading>
			<Text>
				Trigger an action or event, such as submitting a form or displaying a
				dialog.
			</Text>

			<Flex justify="center" className="mt-4">
				<Flex
					align="center"
					justify="center"
					gap="4"
					className="background-polka w-full"
				>
					<Button>Button</Button>
					<Button variant="soft">Button</Button>
					<Button variant="dotted">Button</Button>
					<Button variant="ghost">Button</Button>
				</Flex>
			</Flex>

			<Heading className="mt-7" displayAs="h2" size="6">
				Checkbox
			</Heading>
			<Text>Selects a single value, typically for submission in a form.</Text>
			<Flex justify="center" className="mt-4">
				<Flex
					align="center"
					justify="center"
					gap="2"
					className="background-polka w-full"
				>
					<Checkbox attributes={{ id: "terms" }} defaultChecked />
					<Text displayAs="label" attributes={{ htmlFor: "terms" }}>
						Accept terms and conditions
					</Text>
				</Flex>
			</Flex>

			<Heading className="mt-7" displayAs="h2" size="6">
				CommandMulti
			</Heading>
			<Text>A searchable menu that allows for selecting multiple items</Text>
			<Flex justify="center" className="mt-4">
				<Flex
					align="center"
					justify="center"
					className="background-polka w-full"
				>
					<div className="command-demo-container">
						<Command>
							<CommandTextField>
								<CommandTextFieldInput attributes={{ placeholder: "Filter" }} />
							</CommandTextField>
							<CommandList>
								<CommandEmpty className="p-2">
									<Flex justify="center">No filters found</Flex>
								</CommandEmpty>
								<CommandItem>
									<Award /> Player
								</CommandItem>
								<CommandItem>
									<Focus /> Position
								</CommandItem>
							</CommandList>
						</Command>
					</div>
				</Flex>
			</Flex>

			<Heading className="mt-7" displayAs="h2" size="6">
				Command
			</Heading>
			<Text>A searchable menu that allows for selecting a single item</Text>
			<Flex justify="center" className="mt-4">
				<Flex
					align="center"
					justify="center"
					className="background-polka w-full"
				>
					<div className="command-demo-container">
						<CommandMulti>
							<CommandMultiTextField>
								<CommandMultiTextFieldInput
									attributes={{ placeholder: "Player" }}
								/>
							</CommandMultiTextField>
							<CommandMultiList>
								<CommandMultiEmpty className="p-2">
									<Flex justify="center">No players found</Flex>
								</CommandMultiEmpty>
								{[
									{ text: "Auston Matthews", value: "auston matthews" },
									{ text: "John Tavares", value: "john tavares" },
									{ text: "Max Domi", value: "max domi" },
									{ text: "Mitch Marner", value: "mitch marner" },
									{ text: "William Nylander", value: "william nylander" },
								].map((n) => {
									return (
										<CommandMultiCheckboxItem value={n.value} key={n.value}>
											{n.text}
										</CommandMultiCheckboxItem>
									);
								})}
							</CommandMultiList>
						</CommandMulti>
					</div>
				</Flex>
			</Flex>

			<Heading className="mt-7" displayAs="h2" size="6">
				DropdownMenu
			</Heading>
			<Text>Menu representing a set of actions, triggered by a button.</Text>
			<Flex justify="center" className="mt-4">
				<Flex justify="center" className="background-polka w-full">
					<DropdownMenu>
						<DropdownMenuTrigger displayAsChild>
							<Button variant="soft">Predicate</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent size="2" align="start">
							<DropdownMenuItem>
								<Plus /> is any
							</DropdownMenuItem>
							<DropdownMenuItem>
								<CircleSlashed />
								is not any
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</Flex>
			</Flex>

			<Heading className="mt-7" displayAs="h2" size="6">
				Kbd
			</Heading>
			<Text>Represents keyboard input or a hotkey.</Text>
			<Flex justify="center" className="mt-4">
				<Flex align="center" className="background-polka w-full" gap="2">
					<Kbd size="3">control</Kbd>
					<Kbd size="3">shift</Kbd>
					<Kbd size="3">A</Kbd>
				</Flex>
			</Flex>

			<Heading className="mt-7" displayAs="h2" size="6">
				Popover
			</Heading>
			<Text>
				Floating element for displaying rich content, triggered by a button.
			</Text>
			<Flex justify="center" className="mt-4">
				<Flex align="center" className="background-polka w-full" gap="2">
					<Popover>
						<PopoverTrigger displayAsChild>
							<Button variant="soft">Open</Button>
						</PopoverTrigger>
						<PopoverContent align="start" className="p-2">
							<Text>Popover Content</Text>
						</PopoverContent>
					</Popover>
				</Flex>
			</Flex>

			<Heading className="mt-7" displayAs="h2" size="6">
				Text
			</Heading>
			<Text>A foundational text primitive.</Text>
			<Flex justify="center" className="mt-4">
				<Flex
					direction="column"
					align="center"
					className="background-polka w-full"
					gap="2"
				>
					<Text weight="light">
						The quick brown fox jumps over the lazy dog
					</Text>
					<Text weight="normal" align="center">
						The quick brown fox jumps over the lazy dog
					</Text>
					<Text weight="medium" align="right">
						The quick brown fox jumps over the lazy dog
					</Text>
					<Text weight="bold">The quick brown fox jumps over the lazy dog</Text>
					<Text weight="extra-bold">
						The quick brown fox jumps over the lazy dog
					</Text>
				</Flex>
			</Flex>

			<div className="horizontal-separator" />

			<Heading className="mt-8" displayAs="h2" size="6">
				Composition
			</Heading>
			<Text>
				A composite component focused on keyboard first navigation for creating
				filters for a set of data.
			</Text>
			<Flex className="mt-4" justify="center">
				<Flex
					align="center"
					justify="center"
					gap="4"
					className="background-polka w-full"
				>
					<FilterBar />
				</Flex>
			</Flex>
		</div>
	);
}
