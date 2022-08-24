module.exports = (componentName) => ({
	content: `import classNames from 'classnames/bind';
import React from 'react';

import styles from './${componentName}.module.css';
import {${componentName}Props} from './${componentName}.types';

const cx = classNames.bind(styles);

function ${componentName}({foo}: ${componentName}Props) {
\treturn <div className={cx('foo')}>${componentName} {foo}</div>;
}

export default ${componentName};`,
	extension: `.tsx`,
});
