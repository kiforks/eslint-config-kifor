module.exports = {
	env: { jasmine: true },
	plugins: ['jasmine'],
	extends: ['plugin:jasmine/recommended'],
	rules: {
		'jasmine/new-line-before-expect': 'off',
	},
};
