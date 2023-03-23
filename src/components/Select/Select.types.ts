import {StylesConfig} from "react-select";

export interface SelectLocalProps {
	containerStyle?: string;
	type?: 'default' | 'creatable';
	customStyles?: StylesConfig,
	label?: string,
	value: unknown | null,
}
