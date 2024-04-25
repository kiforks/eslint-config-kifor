module.exports = {
	rules: {
		/* General */
		'max-nested-callbacks': 'off', // Avoid this rule in tests because "describe" and "it" are also counted as callbacks
		'max-params-no-constructor/max-params-no-constructor': 'off', // this is not really useful in tests and would error the "inject" function

		/* Typescript */
		'@typescript-eslint/no-non-null-assertion': 'off',

		/* Angular */
		'@angular-eslint/prefer-on-push-component-change-detection': 'off',

		'max-lines': 'off',
	},
};
