import { Flex } from "winnie-react/flex";

export default function Page() {
	return (
		<div className="flex flex-column items-center justify-center w-full h-full">
			<Flex
				align="center"
				direction="column"
				justify="center"
				gap="4"
				attributes={{
					style: { height: 300, width: 500, background: "lightpink" },
				}}
			>
				<div style={{ height: 40, width: 40, background: "red" }} />
				<div style={{ height: 40, width: 40, background: "orange" }} />
				<div style={{ height: 40, width: 40, background: "yellow" }} />
				<div style={{ height: 40, width: 40, background: "green" }} />
			</Flex>
		</div>
	);
}