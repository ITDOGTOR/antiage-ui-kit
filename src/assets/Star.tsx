import React, {SVGProps} from 'react';

function Star(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="currentColor" height={20} viewBox="0 0 21 20" width={21} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="M9.874 1.31c.336-.836 1.52-.836 1.856 0l1.941 4.836a1 1 0 0 0 .86.625l5.199.352c.9.061 1.265 1.187.573 1.765l-3.998 3.341a1 1 0 0 0-.329 1.011l1.272 5.053c.22.874-.738 1.57-1.502 1.091l-4.412-2.77a1 1 0 0 0-1.064 0l-4.413 2.77c-.763.48-1.721-.217-1.501-1.09l1.271-5.054a1 1 0 0 0-.329-1.01L1.3 8.887c-.692-.578-.326-1.704.574-1.765l5.198-.352a1 1 0 0 0 .86-.625L9.874 1.31Z" />
		</svg>
	);
}
export default Star;
