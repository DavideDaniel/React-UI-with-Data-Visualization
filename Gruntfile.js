module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
      react: {
        files: './components/*.jsx',
        tasks: ['browserify']
      }
    },
    browserify: {
      options: {
        transform: [require('grunt-react').browserify]
      },
      app: {
        src: './components/**/*.jsx',
        dest: './build/app.js'
      }
    },
    concat: {
      'public/main.js': ['build/vendor.js', 'build/app.js']
    }
  });
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.registerTask('default', ['browserify', 'watch']);
  grunt.registerTask('default', ['browserify', 'concat']);
  // grunt.registerTask('default', ['browserify']);
};
