import getIsFlexDirectionReversed from '../getIsFlexDirectionReversed/get-is-flex-direction-reversed';

function updateShadowClasses({
	wrapper,
	scrollLeft,
	clientWidth,
	scrollWidth,
}: {
	wrapper: HTMLElement;
	scrollLeft: number;
	clientWidth: number;
	scrollWidth: number;
}) {
	const {isFlexDirectionReversed} = getIsFlexDirectionReversed({wrapper});

	if (isFlexDirectionReversed) {
		wrapper.classList.toggle('ui-kit-navTabs-boxShadow__wrapper--rightShadowVisible', scrollLeft + 10 < 0);
		wrapper.classList.toggle(
			'ui-kit-navTabs-boxShadow__wrapper--leftShadowVisible',
			Math.abs(scrollLeft) + 10 < scrollWidth - clientWidth,
		);
	} else {
		wrapper.classList.toggle('ui-kit-navTabs-boxShadow__wrapper--leftShadowVisible', scrollLeft - 10 > 0);
		wrapper.classList.toggle(
			'ui-kit-navTabs-boxShadow__wrapper--rightShadowVisible',
			Math.abs(scrollLeft) + 10 < scrollWidth - clientWidth,
		);
	}
}

export default updateShadowClasses;
