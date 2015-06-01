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
        dest: './build/main.js'
      }
    }
  });
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['browserify']);
};
