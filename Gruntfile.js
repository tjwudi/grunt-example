module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      scripts: {
        files: ['www/**/*.*'],
        options: {
          livereload: true
        }
      }
    },
    cssmin: {
      min: {
        files: {
          'www/stylesheets/main.min.css': ['www/stylesheets/main.css']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('build', ['cssmin']);
};