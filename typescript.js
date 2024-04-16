module.exports = {
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
	plugins: ['prettier', '@typescript-eslint', '@stylistic/js', '@stylistic/ts', 'max-params-no-constructor'],
	rules: {
		'@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-extraneous-class': ['error', { allowEmpty: true, allowStaticOnly: true }],
		'@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/prefer-destructuring': 'error',
		'@typescript-eslint/sort-type-constituents': 'error',
		'@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],

		'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
		'class-methods-use-this': ['error', { exceptMethods: ['beforeUnloadHander', 'trackBy', 'transform', 'windowRef'] }],
		'max-len': ['error', 180],
		'max-lines': ['error', 500],
		'no-param-reassign': ['error', { props: false }],
		'no-plusplus': 'off',
		'no-restricted-globals': 'off',
		'no-return-assign': 'off',
		'no-underscore-dangle': 'off',
		'object-curly-newline': [
			'error',
			{
				ExportDeclaration: { multiline: true },
				ImportDeclaration: { multiline: true },
				ObjectExpression: { minProperties: 4, multiline: true },
				ObjectPattern: { minProperties: 4, multiline: true },
			},
		],
		'padded-blocks': 'off',
		'prefer-destructuring': 'off',
		radix: ['error', 'as-needed'],

		/* General */
		'no-unused-vars': 'off',
		'require-await': ['error'],
		'no-return-await': ['error'],
		'object-shorthand': ['error', 'always'],
		'prettier/prettier': ['error'],
		'max-nested-callbacks': ['error', 2],
		'no-console': ['error', { 'allow': ['warn', 'error'] }],
		'arrow-body-style': ['error', 'as-needed'],
		'max-params-no-constructor/max-params-no-constructor': ['error', 3],

		/* Custom error */
		'no-restricted-syntax': [
			'error',

			// ban "this" in static methods
			{
				'selector': 'MethodDefinition[static = true] ThisExpression',
				'message': 'Unexpected "this" in static method. Use class name instead.',
			},
		],

		/* Stylistic */
		'@stylistic/js/padding-line-between-statements': [
			'error',
			{ blankLine: 'always', prev: '*', next: 'block-like' },
			{ blankLine: 'always', prev: 'block-like', next: '*' },
			{ blankLine: 'always', prev: '*', next: 'if' },
			{ blankLine: 'always', prev: 'if', next: '*' },
		],
		'@stylistic/ts/lines-between-class-members': [
			'error',
			{ enforce: [{ blankLine: 'always', prev: 'method', next: 'method' }] },
			{ exceptAfterOverload: true },
		],

		/* Typescript */
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/await-thenable': 'error',
		'@typescript-eslint/no-confusing-void-expression': ['error', { 'ignoreArrowShorthand': true }],
		'@typescript-eslint/array-type': ['error', { 'default': 'array-simple' }],
		'@typescript-eslint/explicit-function-return-type': ['error', { 'allowExpressions': true }],
		'@typescript-eslint/ban-ts-comment': [
			'error',
			{
				'ts-ignore': 'allow-with-description',
				'ts-expect-error': 'allow-with-description',
				'minimumDescriptionLength': 10,
			},
		],

		// Public/private modifiers
		'@typescript-eslint/explicit-member-accessibility': [
			'error',
			{ 'overrides': { 'constructors': 'no-public' } }, // constructor is an exeption
		],

		// Order
		'@typescript-eslint/member-ordering': [
			'error',
			{
				interfaces: {
					memberTypes: ['field', 'method'],
					order: 'alphabetically',
				},

				typeLiterals: {
					memberTypes: ['field', 'method'],
					order: 'alphabetically',
				},

				classes: [
					// Static fields
					'public-static-field',
					'protected-static-field',
					'private-static-field',

					// Decorated fields
					'public-decorated-field',
					['public-decorated-get', 'public-decorated-set'],

					'protected-decorated-field',
					['protected-decorated-get', 'protected-decorated-set'],

					'private-decorated-field',
					['private-decorated-get', 'private-decorated-set'],

					// Other fields
					'public-field',
					'protected-field',
					'private-field',

					'field',

					// Constructor
					'constructor',

					// Getters and setters
					['public-get', 'public-set'],
					['protected-get', 'protected-set'],
					['private-get', 'private-set'],
					['get', 'set'],

					// Methods
					'public-method',
					'public-decorated-method',

					'protected-decorated-method',
					'protected-method',

					'private-decorated-method',
					'private-method',

					'method',
					'decorated-method',

					['public-static-get', 'public-static-set'],
					['protected-static-get', 'protected-static-set'],
					['private-static-get', 'private-static-set'],

					'public-static-method',
					'protected-static-method',
					'private-static-method',
				],
			},
		],

		'@typescript-eslint/naming-convention': [
			'error',

			// All enum keys should be in PascalCase
			{ 'selector': ['enumMember'], 'format': ['PascalCase'] },
		],
	},
};
