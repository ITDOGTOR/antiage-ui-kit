import './SvgAssets.css';

import React from 'react';

import ArrowHorizontal from './ArrowHorizontal';
import ArrowVertical from './ArrowVertical';

export default {
	title: 'SvgAssets',
	component: <div />,
};

function Template() {
	return (
		<div className="svg-wrapper">
			<div className="svg-item">
				<ArrowVertical />
				Arrow Vertical
			</div>
			<div className="svg-item">
				<ArrowHorizontal />
				Arrow Horizontal
			</div>
		</div>
	);
}

export const Sandbox = Template.bind({});
