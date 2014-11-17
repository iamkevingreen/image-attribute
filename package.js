Package.describe({
	name: 'orionjs:summernote',
	summary: 'Summernote editor for orionjs',
	version: '0.0.1',
	git: 'https://github.com/orionjs/summernote'
});

Package.onUse(function(api) {
	api.versionsFrom('1.0');

	api.use([
		'orionjs:core@0.0.1',
		'meteor-platform',
		'less',
		'aldeed:autoform@4.0.2', 
		'lepozepo:s3@4.1.1', 
		'nicolaslopezj:summernote@0.1.0',
		'natestrauser:font-awesome@4.2.0',
		'jquery@1.0.0'
		]);

	api.imply([
		'lepozepo:s3',
		'hckrs:summernote',
		]);

	api.addFiles([
		'lib/attribute.js',
		]);

	api.addFiles([
		'form/summernote.html',
		'form/summernote.js',
		'form/summernote.less',
		'lib/autoform.js',
		], 'client');
});

Package.onTest(function(api) {
	api.use('tinytest');
	api.use('orionjs:image-attribute');
});
