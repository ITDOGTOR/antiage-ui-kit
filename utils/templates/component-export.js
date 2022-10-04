module.exports = (componentName) => ({
	export: true,
	extension: '.ts',
	content: `export {default} from './${componentName}';
`,
});
