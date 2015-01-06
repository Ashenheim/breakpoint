module.exports = {
	compile: {
		options: {
			pretty: true,
			data: {}
		},
		files: [{
			expand: true,
			cwd: '<%= settings.dir_src %>/jade',
			src: [ '**/*.jade' ],
			dest: '<%= settings.dir_build %>',
			ext: '.html'
		}]
	}
}