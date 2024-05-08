module.exports = {
	env: { jasmine: true },
	plugins: ['jasmine'],
	extends: ['plugin:jasmine/recommended'],
	rules: {
		/* General */
		'max-nested-callbacks': 'off', // Avoid this rule in tests because "describe" and "it" are also counted as callbacks
		'max-params-no-constructor/max-params-no-constructor': 'off', // this is not really useful in tests and would error the "inject" function

		/* Typescript */
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/prefer-destructuring': 'off',

		/* Jasmine */
		'jasmine/new-line-before-expect': 'off',

		/* Angular */
		'@angular-eslint/prefer-on-push-component-change-detection': 'off',

		'max-lines': 'off',
	},
};
