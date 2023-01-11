const path = require('path');
const fs = require('fs');

const SVGExportList = fs.readFileSync('src/assets/index.ts', 'utf8');

function defaultIndexTemplate(filePaths) {
	const exportEntries = filePaths.map((filePath) => {
		const basename = path.basename(filePath, path.extname(filePath));

		return `export {default as ${basename}} from './${basename}'`;
	});

	return `${SVGExportList} ${exportEntries.join(';')}`;
}

module.exports = defaultIndexTemplate;
