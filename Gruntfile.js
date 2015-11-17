/**
 * Created by rikohan on 15-9-23.
 */
module.exports = function(grunt) {
    var project = grunt.file.readJSON('package.json');

    grunt.initConfig({
        react:{
            transform:{
                files: [
                    {
                        expand: true,
                        cwd: 'public/js',
                        src: ['**/*.jsx'],
                        dest: 'public/js',
                        ext: '.js'
                    }
                ]
            }
        },
        watch: {
            react:{
                files:['public/js/**/*.jsx'],
                tasks:["transform"]
            }
        }
    });
    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('transform', ['react']);
    grunt.registerTask('default', ['watch']);
};