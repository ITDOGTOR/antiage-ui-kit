module.exports = (componentName) => ({
	content: `import classNames from 'classnames';
import React from 'react';

import {${componentName}Props} from './${componentName}.types';

function ${componentName}({foo}: ${componentName}Props) {
\treturn <div className={classNames('foo')}>${componentName} {foo}</div>;
}

export default ${componentName};`,
	extension: `.tsx`,
});
