module.exports = function (grunt) {
  // Loads in any grunt tasks in the package.json file
  require('load-grunt-tasks')(grunt);

  var taskConfig = {
    githooks: {
      all: {
        'pre-commit': 'test',
      }
    },

    clean: {
      test: ['test/output']
    },

    libSass: {
      options: {
        includePaths: ['src/sass']
      },
      test: {
        files: [{
          expand: true,
          cwd: 'test/',
          src: ['test.scss'],
          dest: 'test/output/libsass/',
          ext: '.css'
        }]
      }
    },

    rubySass: {
      test: 'mkdir -p test/output/rubySass && sass test/test.scss test/output/rubySass/test.css --sourcemap=none --load-path src/sass'
    }
  };

  grunt.renameTask('sass', 'libSass');
  grunt.renameTask('exec', 'rubySass');
  grunt.initConfig(taskConfig);

  grunt.registerTask('test', ['githooks', 'clean:test', 'libSass:test', 'rubySass:test']);
  grunt.registerTask('default', ['test']);

};