import classNames from 'classnames';
import React from 'react';

import {Danger} from '../../assets';
import {InputErrorProps} from './InputError.types';

function InputError({error}: InputErrorProps) {
	if (!error) {
		return null;
	}

	const errorClasses = classNames('ui-kit-input-error');

	return (
		<div className={errorClasses}>
			<Danger aria-label="error" />
			<p>{error}</p>
		</div>
	);
}

export default InputError;
