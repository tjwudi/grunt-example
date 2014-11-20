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
          'dist/stylesheets/main.min.css': ['www/stylesheets/main.css']
        }
      }
    },
    dev_prod_switch: {
        options: {
            // Can be ran as `grunt --env=dev` or ``grunt --env=prod``
            environment: grunt.option('env') || 'dev', // 'prod' or 'dev'
            env_char: '#',
            env_block_dev: 'env:dev',
            env_block_prod: 'env:prod'
        },
        dynamic_mappings: {
            files: [{
                expand: true,
                cwd: './www',
                src: ['*.html'],
                dest: './dist'
            }]
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-dev-prod-switch');

  grunt.registerTask('build', ['dev_prod_switch', 'cssmin']);
};