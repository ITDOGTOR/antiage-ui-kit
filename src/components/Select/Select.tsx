import classNames from 'classnames';
import React, {useState} from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

import {Search} from '../../assets';
import InputError from '../InputError';
import {defaultStyles} from './config';
import {SelectLocalProps} from './Select.types';

const components = {
	creatable: CreatableSelect,
	default: Select,
};

function SelectComponent({
	containerClassname = '',
	type = 'default',
	getCustomStyles = () => ({}),
	label = '',
	error,
	theme,
	size = 'large',
	showLabelAlways = false,
	search = false,
	isDisabled = false,
	onInputChange = () => {},
	innerRef,
	...props
}: SelectLocalProps) {
	const [localSearch, setLocalSearch] = useState('');
	const {value} = props;
	const containerClasses = classNames('ui-kit-select-container', containerClassname);
	const contentClasses = classNames('ui-kit-select-content-container');
	const labelContainerClasses = classNames('ui-kit-select-label-container', {
		'ui-kit-select-label-container-active': showLabelAlways || localSearch || value,
	});
	const labelClasses = classNames('ui-kit-select-label', {'ui-kit-select-label-error': error});
	const iconClasses = classNames('ui-kit-select-icon', {error});

	const Component = components[type];

	return (
		<div className={containerClasses} data-error={error || ''} data-search={search} data-size={size} data-theme={theme}>
			<div className={contentClasses}>
				<Component
					classNamePrefix="ui-kit-select"
					isDisabled={isDisabled}
					ref={innerRef}
					styles={{
						...defaultStyles,
						...getCustomStyles(defaultStyles),
					}}
					onInputChange={(val, meta) => {
						onInputChange(val, meta);
						setLocalSearch(val);
					}}
					{...props}
				/>
				{label ? (
					<p className={labelContainerClasses}>
						<span className={labelClasses}>{label}</span>
					</p>
				) : null}
				{search ? <Search className={iconClasses} /> : null}
			</div>
			{error ? <InputError error={error} /> : null}
		</div>
	);
}

export default SelectComponent;
