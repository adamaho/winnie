import { Checkbox } from "winnie-react/checkbox";
import { Heading } from "winnie-react/heading";
import { Text } from "winnie-react/text";

export function CheckboxSink() {
	return (
		<>
			<Heading displayAs="h2" className="mt-5">
				Checkbox
			</Heading>
			<table className="kitchen-sink-table">
				<thead>
					<tr>
						<th />
						<th>
							<Text>Accent</Text>
						</th>
						<th>
							<Text>Red</Text>
						</th>
						<th>
							<Text>Yellow</Text>
						</th>
						<th>
							<Text>Green</Text>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<Text>Size 1</Text>
						</td>
						<td>
							<Checkbox defaultChecked size="1" />
						</td>
						<td>
							<Checkbox defaultChecked color="red" size="1" />
						</td>
						<td>
							<Checkbox defaultChecked color="yellow" size="1" />
						</td>
						<td>
							<Checkbox defaultChecked color="green" size="1" />
						</td>
					</tr>
					<tr>
						<td>
							<Text>Size 2</Text>
						</td>
						<td>
							<Checkbox defaultChecked size="2" />
						</td>
						<td>
							<Checkbox defaultChecked color="red" size="2" />
						</td>
						<td>
							<Checkbox defaultChecked color="yellow" size="2" />
						</td>
						<td>
							<Checkbox defaultChecked color="green" size="2" />
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
}
