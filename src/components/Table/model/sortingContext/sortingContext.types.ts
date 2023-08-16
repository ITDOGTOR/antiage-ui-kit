export interface UISortingContext {
	sorting: string[];
	setSorting: (value: string) => void;
	sortingString: string;
}

export interface UIUseSorting {
	keyName?: string;
	setHistory?: (...arg: any) => void;
}
