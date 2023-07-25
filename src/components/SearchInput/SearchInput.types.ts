import {Size, Theme} from '../index.types';

export interface SearchInputProps {
	value?: any;
	onDebounce?: ((inputValue: string) => void) | undefined;
	onChange?: ((inputValue: string) => void) | undefined;
	debounceTimer?: number;
	placeholder?: string;
	disabled?: boolean;
	containerClassName?: string;
	inputClassName?: string;
	theme?: Theme;
	size?: Size;
}
