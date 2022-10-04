import 'antd/dist/antd.css'
import './fonts.css';
import '../src/ui-kit.css';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';

export const parameters = {
	actions: {argTypesRegex: '^on.*'},
	options: {
		storySort: (a, b) =>
			a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, {numeric: true}),
	},
	controls: {sort: 'alpha'},
	viewport: {
		viewports: {
			minimalContent: {
				name: 'Minimal content',
				styles: {
					width: '865px',
					height: '520px',
				},
				type: 'tablet',
			},
			desktop: {
				name: 'HD',
				styles: {
					width: '1024px',
					height: '768px',
				},
				type: 'desktop',
			},
			largeDesktop: {
				name: 'Full HD',
				styles: {
					width: '1920px',
					height: '1080px',
				},
				type: 'desktop',
			},
			veryLargeDesktop: {
				name: 'Quadro HD',
				styles: {
					width: '2560px',
					height: '1536px',
				},
				type: 'desktop',
			},
			...INITIAL_VIEWPORTS,
		},
	},
	backgrounds: {
		default: 'white',
		values: [
			{
				name: 'gray',
				value: '#f2f4f7',
			},
			{
				name: 'white',
				value: '#ffffff',
			},
		],
	},
};
