module.exports = (componentName) => ({
	content: `import {render, screen} from '@testing-library/react';
import React from 'react';

import Paper from './Paper';

describe('${componentName}', () => {
\ttest('', () => {});
});`,
	extension: `.test.tsx`,
});
