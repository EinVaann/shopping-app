module.exports = {
	globDirectory: 'FirstApp/',
	globPatterns: [
		'**/*.{png,js,css,html}'
	],
	swDest: 'FirstApp/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};