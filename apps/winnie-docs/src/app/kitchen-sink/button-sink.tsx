import { ListFilter } from "lucide-react";

import { Button } from "winnie-react/button";
import { Heading } from "winnie-react/heading";
import { Text } from "winnie-react/text";

import "./button-sink.css";

export function ButtonSink() {
	return (
		<>
			<Heading displayAs="h2">Button</Heading>
			<Heading size="4" displayAs="h3">
				Theme Colors
			</Heading>
			<table className="button-sink-table" w-theme="" w-radius-scale="medium">
				<thead>
					<tr>
						<th />
						<th>
							<Text>Accent</Text>
						</th>
						<th>
							<Text>Gray</Text>
						</th>
						<th>
							<Text>Disabled</Text>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<Text>Solid</Text>
						</td>
						<td>
							<Button>
								<ListFilter />
								Filter
							</Button>
						</td>
						<td>
							<Button color="gray">
								<ListFilter />
								Filter
							</Button>
						</td>
						<td>
							<Button attributes={{ "aria-disabled": true }}>
								<ListFilter />
								Filter
							</Button>
						</td>
					</tr>
					<tr>
						<td>
							<Text>Soft</Text>
						</td>
						<td>
							<Button variant="soft">
								<ListFilter />
								Filter
							</Button>
						</td>
						<td>
							<Button color="gray" variant="soft">
								<ListFilter />
								Filter
							</Button>
						</td>
						<td>
							<Button attributes={{ "aria-disabled": true }} variant="soft">
								<ListFilter />
								Filter
							</Button>
						</td>
					</tr>
					<tr>
						<td>
							<Text>Dotted</Text>
						</td>
						<td>
							<Button variant="dotted">
								<ListFilter />
								Filter
							</Button>
						</td>
						<td>
							<Button color="gray" variant="dotted">
								<ListFilter />
								Filter
							</Button>
						</td>
						<td>
							<Button attributes={{ "aria-disabled": true }} variant="dotted">
								<ListFilter />
								Filter
							</Button>
						</td>
					</tr>
					<tr>
						<td>
							<Text>Ghost</Text>
						</td>
						<td>
							<Button variant="ghost">
								<ListFilter />
								Filter
							</Button>
						</td>
						<td>
							<Button color="gray" variant="ghost">
								<ListFilter />
								Filter
							</Button>
						</td>
						<td>
							<Button attributes={{ "aria-disabled": true }} variant="ghost">
								<ListFilter />
								Filter
							</Button>
						</td>
					</tr>
				</tbody>
			</table>
			<Heading size="4" displayAs="h3">
				Size and Radius
			</Heading>
			<table className="button-sink-table" w-theme="" w-radius-scale="medium">
				<thead>
					<tr>
						<th />
						<th>
							<Text>No Radius</Text>
						</th>
						<th>
							<Text>Small</Text>
						</th>
						<th>
							<Text>Medium</Text>
						</th>
						<th>
							<Text>Large</Text>
						</th>
						<th>
							<Text>Round</Text>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<Text>Size 1</Text>
						</td>
						<td>
							<Button radius="none" size="1">
								<ListFilter />
								Filter
							</Button>
						</td>
						<td>
							<Button radius="small" size="1">
								<ListFilter />
								Filter
							</Button>
						</td>
						<td>
							<Button radius="medium" size="1">
								<ListFilter />
								Filter
							</Button>
						</td>
						<td>
							<Button radius="large" size="1">
								<ListFilter />
								Filter
							</Button>
						</td>
						<td>
							<Button radius="round" size="1">
								<ListFilter />
								Filter
							</Button>
						</td>
					</tr>
					<tr>
						<td>
							<Text>Size 2</Text>
						</td>
						<td>
							<Button radius="none" size="2">
								<ListFilter />
								Filter
							</Button>
						</td>
						<td>
							<Button radius="small" size="2">
								<ListFilter />
								Filter
							</Button>
						</td>
						<td>
							<Button radius="medium" size="2">
								<ListFilter />
								Filter
							</Button>
						</td>
						<td>
							<Button radius="large" size="2">
								<ListFilter />
								Filter
							</Button>
						</td>
						<td>
							<Button radius="round" size="2">
								<ListFilter />
								Filter
							</Button>
						</td>
					</tr>
					<tr>
						<td>
							<Text>Size 3</Text>
						</td>
						<td>
							<Button radius="none" size="3">
								<ListFilter />
								Filter
							</Button>
						</td>
						<td>
							<Button radius="small" size="3">
								<ListFilter />
								Filter
							</Button>
						</td>
						<td>
							<Button radius="medium" size="3">
								<ListFilter />
								Filter
							</Button>
						</td>
						<td>
							<Button radius="large" size="3">
								<ListFilter />
								Filter
							</Button>
						</td>
						<td>
							<Button radius="round" size="3">
								<ListFilter />
								Filter
							</Button>
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
}
