module.exports = {

	site: {
		files: ['*.html']
	},
	sass: {
		files: [ '<%= settings.dir_sass %>/**/*.sass',
		         '<%= settings.dir_sass %>/**/*.scss' ],
		tasks: [ 'sass:dev', 'autoprefixer' ]
	},
	scripts: {
		files: [ '<%= settings.dir_js_src %>/scripts.js',
		         '<%= settings.dir_js_src %>/**/*.js' ],
		tasks: [ 'jshint', 'concat' ]
	},
	options: {
		livereload: 4444
	}
	
};