'use strict';
module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-electron-app-builder');

  grunt.initConfig({
    babel: {
      dist: {
        files: {
          //compile to: compile from
          //there's no need for babel right now
        }
      }
    },
    stylus: {
      compile: {
        files: {
          // compile to: compile from
          'app/static/css/style.css': 'app/static/css/style.styl'
        }
      }
    },
    watch: {
      stylus: {
        files: ['**/*.styl', '!**/node_modules/**'],
        tasks: ['stylus'],
        options: {
          livereload: true
        }
      }
    },
    electron: {
      all: {
        options: {
            name: 'Prattlebox',
            dir: './',
            out: 'dist',
            version: '0.30.4',
            platform: 'all',
            arch: 'x64'
        }
      },
      linux: {
        options: {
            name: 'Prattlebox',
            dir: './',
            out: 'dist',
            version: '0.30.4',
            platform: 'linux',
            arch: 'x64'
        }
      },
      win32: {
        options: {
            name: 'Prattlebox',
            dir: './',
            out: 'dist',
            version: '0.30.4',
            platform: 'win32',
            arch: 'x64'
        }
      },
      darwin: {
        options: {
            name: 'Prattlebox',
            dir: './',
            out: 'dist',
            version: '0.30.4',
            platform: 'darwin',
            arch: 'x64'
        }
      },
    }
  });

  grunt.registerTask('build', ['electron:darwin', 'electron:win32', 'electron:linux']);
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('compile', ['stylus']);
};
