import classNames from 'classnames';
import React, {ChangeEvent, FocusEvent, useEffect, useRef, useState} from 'react';

import InputError from '../InputError';
import {TextAreaProps} from './TextArea.types';
import useAutosizeTextArea from './utils/useAutoSizeTextArea';

function TextArea({
	className = '',
	wrapperClassName = '',
	labelClassName = '',
	placeholderClassName = '',
	theme = 'white',
	placeholder = '',
	label = '',
	error = '',
	innerRef,
	rows = 2,
	autoSize = false,
	...props
}: TextAreaProps) {
	const [isFocused, setFocused] = useState(false);
	const [localValue, setLocalValue] = useState<string | number | readonly string[] | undefined>('');

	const id = useRef({id: String(Math.random())});
	const ref = useRef<HTMLTextAreaElement>(null);

	const {disabled, onChange, value} = props;

	useAutosizeTextArea({
		textAreaRef: innerRef ? innerRef.current : ref.current,
		value: localValue,
		enabled: autoSize,
	});

	const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		if (onChange) {
			onChange(event);
		}
		setLocalValue(event.target.value);
	};

	useEffect(() => {
		setLocalValue(value);
	}, [value]);

	const onBlur = (e: FocusEvent<HTMLTextAreaElement>) => {
		if (props.onBlur) {
			props.onBlur(e);
		}
		setFocused(false);
	};

	const onFocus = (e: FocusEvent<HTMLTextAreaElement>) => {
		if (props.onFocus) {
			props.onFocus(e);
		}
		setFocused(true);
	};

	const wrapperClasses = classNames(
		'ui-kit-textarea-wrapper',
		theme,
		{focused: isFocused},
		{disabled},
		{error},
		wrapperClassName,
	);
	const classes = classNames('ui-kit-textarea', theme, {autoSize}, {withLabel: label}, {error}, className);
	const labelClasses = classNames(
		'ui-kit-textarea-label-common',
		isFocused || localValue ? 'ui-kit-textarea-label' : 'ui-kit-textarea-placeholder',
		theme,
		{error},
		labelClassName,
	);
	const placeholderClasses = classNames(
		'ui-kit-textarea-label-common',
		'ui-kit-textarea-placeholder',
		theme,
		placeholderClassName,
	);

	const commonProps = {
		id: id.current.id,
		className: classes,
		...props,
		onBlur,
		onFocus,
		onChange: handleChange,
		ref: innerRef || ref,
		rows,
	};

	return (
		<div>
			<div className={wrapperClasses}>
				{label && (
					<label className={labelClasses} htmlFor={props.id || id.current.id}>
						{label}
					</label>
				)}
				{placeholder && !localValue && (
					<label className={placeholderClasses} htmlFor={props.id || id.current.id}>
						{placeholder}
					</label>
				)}
				<textarea {...commonProps} />
			</div>
			<InputError error={error} />
		</div>
	);
}

export default TextArea;
