const template = (variables, {tpl}) => {
	const componentName = variables.componentName.replace('Svg', '');

	return tpl`
import React, {SVGProps} from 'react';

function ${componentName}(${variables.props}) {
	return (
		${variables.jsx}
	)
}

export default ${componentName};`;
};

module.exports = template;
