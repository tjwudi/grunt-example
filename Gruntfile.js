module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      scripts: {
        files: ['www/**/*.*'],
        options: {
          livereload: true
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};