import {Input as InputAntd} from 'antd';
import cx from 'classnames';
import React from 'react';

import {InputProps} from './Input.types';

function Input({styleInput = 'outlined', placeholder, label = 'E-mail'}: InputProps) {
	const classes = cx('ui-kit-input', `ui-kit-input-${styleInput}`);

	return (
		<div className={cx('ui-kit-wrapper-input')}>
			<InputAntd bordered={false} className={classes} placeholder={placeholder} />
			{label && <label className={cx('ui-kit-input-label')}>{label}</label>}
			<div>dfgdfgdfg</div>
			<div>dfgdfgdfg</div>
			<div>dfgdfgdfg</div>
			<div>dfgdfgdfg</div>
			<div>dfgdfgdfg</div>
			<div>dfgdfgdfg</div>
			<div>dfgdfgdfg</div>
		</div>
	);
}

export default Input;
