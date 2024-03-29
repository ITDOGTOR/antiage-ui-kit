function getIsFlexDirectionReversed({wrapper}: {wrapper: HTMLDivElement}) {
	const isFlexDirectionReversed =
		wrapper.classList.contains('ui-kit-navTabs-boxShadow__wrapper--rotate-bottom') ||
		wrapper.classList.contains('ui-kit-navTabs-boxShadow__wrapper--rotate-left');

	return {isFlexDirectionReversed};
}

export default getIsFlexDirectionReversed;
