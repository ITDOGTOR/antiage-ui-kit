import {PaginationProps} from 'antd';
import classNames from 'classnames';
import React from 'react';

import {ChevronHorizontal} from '../../../../assets';
import {Theme} from '../../../index.types';

const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
	if (type === 'prev') {
		return (
			<button className={classNames('ui-kit-pagination-button')} tabIndex={-1} type="button">
				<ChevronHorizontal aria-label="left" />
			</button>
		);
	}

	if (type === 'next') {
		return (
			<button className={classNames('ui-kit-pagination-button')} tabIndex={-1} type="button">
				<ChevronHorizontal aria-label="right" />
			</button>
		);
	}

	if (type.includes('jump')) {
		return (
			<button className={classNames('ui-kit-pagination-button')} tabIndex={-1} type="button">
				..{' '}
			</button>
		);
	}

	return originalElement;
};

export const getPaginationComponentLocal = ({theme}: {theme: Theme}) => {
	return {
		hideOnSinglePage: true,
		className: classNames('ui-kit-pagination', ['ui-kit-pagination', theme].join('-')),
		position: ['bottomCenter'],
		showSizeChanger: false,
		itemRender,
	};
};
