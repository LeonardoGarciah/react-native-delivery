module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'es6': true,
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	'overrides': [
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module',
		'project': './tsconfig.json',
	},
	'plugins': [
		'react',
		'react-hooks',
		'@typescript-eslint'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		"space-in-brackets": [
			'error', 'always'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		]
	}
};
