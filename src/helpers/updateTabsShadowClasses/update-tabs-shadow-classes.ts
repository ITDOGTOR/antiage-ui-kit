function updateTabsShadowClasses({
	wrapper,
	scrollLeft,
	clientWidth,
	scrollWidth,
	className,
	isFlexDirectionReversed,
}: {
	wrapper: HTMLDivElement;
	scrollLeft: number;
	clientWidth: number;
	scrollWidth: number;
	className: string;
	isFlexDirectionReversed: boolean;
}) {
	if (isFlexDirectionReversed) {
		wrapper.classList.toggle(`${className}--rightShadowVisible`, scrollLeft + 10 < 0);
		wrapper.classList.toggle(`${className}--leftShadowVisible`, Math.abs(scrollLeft) + 10 < scrollWidth - clientWidth);
	} else {
		wrapper.classList.toggle(`${className}--leftShadowVisible`, scrollLeft - 10 > 0);
		wrapper.classList.toggle(`${className}--rightShadowVisible`, Math.abs(scrollLeft) + 10 < scrollWidth - clientWidth);
	}
}

export default updateTabsShadowClasses;
