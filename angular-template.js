module.exports = {
	parser: '@angular-eslint/template-parser',
	extends: ['angular-strict/template', 'plugin:@angular-eslint/template/process-inline-templates'],
	rules: {
		'@angular-eslint/template/attributes-order': 'off',
	},
};
