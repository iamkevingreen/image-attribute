Package.describe({
	name: 'orionjs:image-attribute',
	summary: 'Image attribute for orionjs',
	version: '0.1.0',
	git: 'https://github.com/orionjs/image-attribute'
});

Package.onUse(function(api) {
	api.versionsFrom('1.0');

	api.use([
		'orionjs:core',
		'meteor-platform',
		'less',
		'aldeed:autoform@4.0.2', 
		'orionjs:filesystem', 
		]);

	api.addFiles([
		'lib/attribute.js',
		]);

	api.addFiles([
		'form/image.html',
		'form/image.js',
		'form/image.less',
		'lib/autoform.js',
		], 'client');
});

Package.onTest(function(api) {
	api.use('tinytest');
	api.use('orionjs:image-attribute');
});
