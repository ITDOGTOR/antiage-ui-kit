import React from 'react';

import styles from './TestComponent.module.css';
import {TestComponentProps} from './TestComponent.types';

function TestComponent({heading, content}: TestComponentProps) {
	return (
		<div className={styles.testComponent} data-testid="test-component">
			<h1 className="heading" data-testid="test-component__heading">
				{heading}
			</h1>
			<div data-testid="test-component__content">{content}</div>
		</div>
	);
}

export default TestComponent;
