/**
 * Created by design on 18.05.17.
 */
/**
 * Created by design on 17.05.17.
 */
// wrapper function
module.exports = function(grunt) {

    // project & task config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /**
         * grunt-sass (compile sass to css using node-sass)
         * Documentation : https://www.npmjs.com/package/grunt-sass
         */
        sass: {
            options: {
                /*
                 * debug/view css in dev tools set to : true
                 * no debugging set to : false
                 */
                sourceMap: true
            },
            dist: {
                /*
                 *  left: is compiled for production
                 * right: is for development
                 */
                files: {
                    'css/styles.css' : 'devassets/scss/style.scss'
                }
            }
        },

        /**
         * grunt-contrib-watch (monitor files and execute tasks)
         * Documentation : https://www.npmjs.com/package/grunt-contrib-watch
         */
        watch: {
            options: {
                livereload: true
            },
            sass:  {
                files: [
                    'devassets/scss/*.scss'
                ],
                tasks: [
                    'sass'
                ]
            },
            scripts:  {
                files: [
                    'devassets/jscripts/*.js'
                ],
                tasks: [
                    'uglify'
                ]
            }
        },

        /**
         * grunt-contrib-uglify (minify javascript files)
         * Documentation : https://www.npmjs.com/package/grunt-contrib-uglify
         */
        uglify: {
            my_target: {
                files: {
                    'js/script.js' : ['node_modules/jquery/dist/jquery.js', 'devassets/jscripts/backstretch.js']
                }
            }
        }
    });

    // load grunt plugins & tasks
    // grunt.loadNpmTasks('grunt');
    // grunt.loadNpmTasks('grunt-sass');
    // grunt.loadNpmTasks('grunt-contrib-watch');

    // simpler, loads all of the above tasks
    require('load-grunt-tasks')(grunt);

    // custom tasks
    grunt.registerTask('default', ['sass', 'watch']);
};


