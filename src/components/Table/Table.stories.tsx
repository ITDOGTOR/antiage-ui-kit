import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Table from './Table';
import {UITable} from './ui/Table/Table.types';

const columns = [
	{
		title: 'Name',
	},
	{
		title: 'Age',
	},
	{
		title: 'Address',
	},
	{
		title: 'Tags',
	},
	{
		title: 'Action',
	},
	{
		title: 'Action2',
	},
	{
		title: 'Action3',
	},
	{
		title: 'Action4',
	},
];

const data = [
	{
		key: '1',
		name: 'John Brown',
		age: 32,
		address: 'New York No. 1 Lake Park',
		tags: 'nice',
		action: 'Action',
		action2: 'Action2',
		action3: 'Action3',
		action4: 'Action4',
	},
	{
		key: '2',
		name: 'Jim Green',
		age: 42,
		address: 'London No. 1 Lake Park',
		tags: 'loser',
		action: 'Action',
		action2: 'Action2',
		action3: 'Action3',
		action4: 'Action4',
	},
];

export default {
	title: 'Table',
	component: Table,
	argTypes: {},
} as ComponentMeta<typeof Table.TableUI.Table>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Table.TableUI.Table> = (args: UITable) => {
	return (
		<Router>
			<Table.TableUi.SortingProvider>
				<Table.TableUi.Table {...args}>
					{data.map((el) => (
						<tr>
							<td>{el.name}</td>
							<td>{el.age}</td>
							<td>{el.address}</td>
							<td>{el.tags}</td>
							<td>{el.action}</td>
							<td>{el.action2}</td>
							<td>{el.action3}</td>
							<td>{el.action4}</td>
						</tr>
					))}
				</Table.TableUi.Table>
			</Table.TableUi.SortingProvider>
		</Router>
	);
};

export const Sandbox = Template.bind({});
Sandbox.args = {columns};
