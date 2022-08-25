module.exports = (componentName) => ({
	content: `export interface ${componentName}Props {
\tfoo: string;
}`,
	extension: `.types.ts`,
});
