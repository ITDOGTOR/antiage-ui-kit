import {DropdownIndicatorProps, StylesConfig} from 'react-select';

export const defaultStyles: StylesConfig = {
	control: (classes, state) => {
		const cursor = state.isDisabled ? 'not-allowed' : 'pointer';
		return {
			...classes,
			display: 'flex',
			outline: 'var(--back-faint-middle) 1px solid',
			border: 'none',
			alignItems: 'center',
			padding: '0 14px',
			borderRadius: 'var(--brad-base)',
			backgroundColor: 'var(--base-weak)',
			minHeight: '44px',
			boxShadow: 'none',
			pointerEvents: 'auto',
			cursor,
		}
	},
	input: (classes) => ({
		...classes,
		fontWeight: 500,
		fontSize: 'var(--fs-xs)',
		color: 'var(--base-strong)',
	}),
	placeholder: (classes) => ({
		...classes,
		fontWeight: 500,
		fontSize: 'var(--fs-xs)',
		color: 'var(--faint-strong)',
		paddingLeft: '0px',
		margin: '0',
	}),
	indicatorSeparator: (classes) => ({
		...classes,
		display: 'none',
	}),
	dropdownIndicator: (classes, state: DropdownIndicatorProps) => {
		const transform = state.selectProps.menuIsOpen ? 'rotate(180deg)' : '';
		const color = state.selectProps.menuIsOpen ? 'var(--accent-strong)' : 'var(--faint-strong)';
		return {
			...classes,
			padding: '0px',
			transform,
			color,
		};
	},
	valueContainer: (classes) => ({
		...classes,
		padding: '0px',
	}),
	singleValue: (classes) => {
		return {
			...classes,
			fontWeight: '500',
			fontSize: 'var(--fs-xs)',
		};
	},
	menu: (classes) => ({
		...classes,
		backgroundColor: 'white',
		boxShadow: '0px 10px 15px rgba(66, 71, 77, 0.1)',
		overflow: 'auto',
		borderRadius: 'var(--brad-base)',
	}),
	menuList: (classes) => ({
		...classes,
		padding: '0',
		width: '100%',
		fontSize: 'var(--fs-sm)',
		'::-webkit-scrollbar': {
			width: '6px',
			height: '6px',
		},
		'::-webkit-scrollbar-thumb': {
			background: '#C3D3E6',
			borderRadius: '3px',
		},
	}),
	option: (classes, {isSelected}) => ({
		...classes,
		cursor: 'pointer',
		fontWeight: '500',
		background: isSelected ? 'var(--faint-weak)' : 'white',
		color: 'var(--base-strong-lighter)',
		':hover': {
			background: 'var(--faint-weak)',
		},
	}),
};
