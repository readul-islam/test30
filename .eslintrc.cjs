module.exports = {
	root: true,
	env: { browser: true, es2020: true ,node:true},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
		"prettier",
	],
	ignorePatterns: [
		"dist",
		".eslintrc.json",
		"vite.config.ts",
		"postcss.config.js",
		"tailwind.config.js",
	],

	parserOptions: { ecmaVersion: "latest", sourceType: "module" },
	settings: { react: { version: "18.2" } },
	plugins: ["react-refresh",'node'],
	rules: {
		"react/jsx-no-target-blank": "off",
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
	},
};
