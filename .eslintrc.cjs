module.exports = {
	root: true,
	extends: ['eslint:recommended','plugin:svelte/recommended', 'prettier'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	rules: {
		'no-unused-vars': 'off',
		'noImplicitAny': 'off'
    },
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
