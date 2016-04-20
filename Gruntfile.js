'use strict';

module.exports = function (grunt) {
    var ftl2html = require('grunt-ftl2html');
    var disDir = "dist/";
    grunt.initConfig({
        connect: {
            options: {
                port: 8888,
                keepalive: true,
                hostname: 'localhost'
            },
            server: {
                options: {
                    open: 'http://localhost:8888/src/main/view/index.html',
                    middleware: function(connect, options) {
                        // ftl
                        var middlewares = [
                            connect().use(
                                '/scripts',
                                connect.static('./src/main/js/**')
                            ),
                            connect().use(
                                '/images',
                                connect.static('./src/main/styles/img')
                            ),
                            connect().use(
                                '/styles',
                                connect.static('./src/main/styles/css')
                            ),
                            connect().use(
                                '/xhr',
                                ftl2html.static('./src/test/mock/xhr')
                            ),
                            connect.static('./')
                        ];
                        return middlewares;
                    }
                }
            }
        },
        concat: {
            js: {
                src: 'scripts/shark-pager.js',
                dest: disDir + 'scripts/shark-pager.js'
            },
            css: {
                src: 'styles/**/*.css',
                dest: disDir + 'styles/css/shark-pager.css'
            }
        },
        uglify: {
            dest: {
                src: disDir + 'scripts/shark-pager.js',
                dest: disDir + 'scripts/shark-pager.min.js'
            }
        },
        cssmin: {
            files: {
                expand: true,
                cwd: disDir + 'styles/css/',
                src: ['*.css', '!*.min.css'],
                dest: disDir + 'styles/css/',
                ext: '.min.css'
            }
        },
        copy: {
            base: {
                files: [
                    {
                        src: ['images/**'],
                        dest: disDir
                    }
                ]
            }
        },
        clean: {
            build: {
                src: [
                    disDir
                ]
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify'); 
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('build', 'build', function () {
        var tasks = ['clean','concat','uglify','cssmin', 'copy:base'];
        grunt.task.run(tasks);
    });

    grunt.registerTask('serve', 'build', function () {
        var tasks = [ 'connect'];
        grunt.task.run(tasks);
    });

};