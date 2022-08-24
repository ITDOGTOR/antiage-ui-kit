import './fonts.css';
import '../src/ui-kit.css';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';

export const parameters = {
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
				name: 'Desktop',
				styles: {
					width: '1024px',
					height: '768px',
				},
				type: 'desktop',
			},
			largeDesktop: {
				name: 'Large desktop',
				styles: {
					width: '1536px',
					height: '864px',
				},
				type: 'desktop',
			},
			veryLargeDesktop: {
				name: 'Very large desktop',
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
		default: 'ghostwhite',
		values: [
			{
				name: 'ghostwhite',
				value: '#f2f5f7',
			},
			{
				name: 'white',
				value: '#ffffff',
			},
		],
	},
};
