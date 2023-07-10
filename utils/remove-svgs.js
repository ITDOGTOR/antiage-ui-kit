const fs = require('fs');
const path = require('path');

const svgFiles = fs.readdirSync('src/assets').filter((file) => path.extname(file) === '.svg');
svgFiles.forEach((file) => {
	const svgFilePath = path.join('src/assets', file);
	fs.unlinkSync(svgFilePath);
});
