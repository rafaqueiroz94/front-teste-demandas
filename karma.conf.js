// Karma configuration
// Generated on Sat Mar 20 2021 22:13:27 GMT-0300 (Brasilia Standard Time)

module.exports = function(config) {
  config.set({

    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('karma-spec-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    files: [
    ],
    exclude: [
    ],
    preprocessors: {
    },
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
    restartOnFileChange: true,
    client: {
      clearContext:true
    },
    coverageReporter: {
      type : 'html',
      dir : 'coverage/',
      subdir: '.'
    }
  })
}
