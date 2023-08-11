export const setStylesToPinedColumn = ({
	parent,
	pinnedColumn,
}: {
	parent: HTMLCollection;
	pinnedColumn: {left: number[]; right: number[]};
}) => {
	for (let i = 0; i < parent.length; i += 1) {
		if (pinnedColumn.left.includes(i)) {
			let left = 0;
			for (let j = 1; j <= i; j += 1) {
				left += parent[j - 1].clientWidth;
			}

			const element = parent[i] as HTMLElement;
			element.style.position = 'sticky';
			element.style.left = `${left}px`;
			element.style.zIndex = `${parent.length - i}`;
		}
		if (pinnedColumn.right.includes(i)) {
			let right = 0;
			for (let j = i + 1; j < parent.length; j += 1) {
				right += parent[j].clientWidth;
			}
			const element = parent[i] as HTMLElement;
			element.style.position = 'sticky';
			element.style.right = `${right}px`;
			element.style.zIndex = `${parent.length - i}`;
		}
	}
};
