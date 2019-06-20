module.exports = function (grunt) {

	const sass = require('node-sass');
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		//watches for the specified files and executes the task associated to be performed
		watch: {
			refresh: {
				options: {
					livereload: '<%= connect.options.livereload %>',
				},
				tasks: ['sass'],
				files: ['js/**/*.js', '*.scss', '*.html'] //give the list of all files that you want to watch for and reload
			}
		},
		// https://www.npmjs.com/package/grunt-sass
		sass: {
			options: {
				implementation: sass,
				sourceMap: true
			},
			dist: {
				files: {
					'style.css': 'style.scss'				}
			}
		},
		//serves the application under this configuration
		connect: {
			options: {
				port: 9000,
				// Change this to '0.0.0.0' to access the server from outside.
				hostname: 'localhost',
				livereload: 35729
			},
			livereload: {
				options: {
					open: true,
				}
			}
		},
		// https://github.com/gruntjs/grunt-contrib-copy
		copy: {
			main: {
				files: [
					// includes files within path
					// { expand: true, src: ['path/*'], dest: 'dest/', filter: 'isFile' },

					// includes files within path and its sub-directories
					// { expand: true, src: ['path/**'], dest: 'dest/' },

					// makes all src relative to cwd
					{ expand: true, cwd: 'node_modules/bootstrap', src: ['**'], dest: 'libs/bootstrap/' },
					{ expand: true, cwd: 'node_modules/jquery', src: ['**'], dest: 'libs/jquery/' },

					// flattens results to a single level
					// { expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile' },
				],
			},
		},

	});

	//register tasks to be run
	grunt.registerTask('serve', ['sass', 'connect:livereload', 'watch']);

	//register default tasks to be run
	grunt.registerTask('default', ['sass', 'connect:livereload', 'watch']);

}
