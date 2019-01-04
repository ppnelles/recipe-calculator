module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: false,
          yuicompress: true,
          optimization: 2,
          sourceMap: true,
          sourceMapBasepath: "./", //Sets the base path for the Less file paths in the source map.
          sourceMapFilename: './app/style.css.map',
        },
	files: {
          "./app/style.css": "./style.less"
        }
      }
    },
    watch: {
      styles: {
        files: ['./**/*.less'], // which file$
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['less', 'watch']);
};

