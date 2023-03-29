export declare type UseAutoSizeTextArea = {
	textAreaRef: HTMLTextAreaElement | null;
	value: string | number | readonly string[] | undefined;
	autoSize: boolean | {minRows: number; maxRows: number};
	rows: number;
};
