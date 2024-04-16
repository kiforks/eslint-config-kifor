const typescriptConfig = require('./typescript.js');

module.exports = {
	root: true,
	overrides: [
		{
			files: ['*.js'],
			parserOptions: {
				ecmaVersion: 2020,
			},
			extends: [...typescriptConfig.extends],
			rules: {
				'no-undef': 'off',
				'@typescript-eslint/no-var-requires': 'off',
			},
		},
	],
};
