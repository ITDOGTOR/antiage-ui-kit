// eslint-disable-next-line
module.exports = (componentName) => ({
	content: `import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

import ${componentName} from './${componentName}';
import {${componentName}Props} from './${componentName}.types';

export default {
\ttitle: '${componentName}',
\tcomponent: ${componentName},
} as ComponentMeta<typeof ${componentName}>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof ${componentName}> = (args: ${componentName}Props) => {
\treturn <${componentName} {...args} />;
};

export const FirstStory = Template.bind({});
FirstStory.args = {};`,
	extension: `.stories.tsx`,
});
