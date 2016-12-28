module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'karma-typescript'],

    files: [
        './src/polyfills.ts',
        './src/mocks.ts',
        './src/**/*.ts',
        './src/**/*.spec.ts'
    ],

    exclude: [
    ],

    preprocessors: {     
        './src/polyfills.ts': ['karma-typescript'],            
        './src/mocks.ts': ['karma-typescript'],
        './src/**/*.ts': ['karma-typescript'],
        './src/**/*.spec.ts': ['karma-typescript']
    },

    typescriptPreprocessor: {
      options: {
        sourceMap: false,
        target: 'ES5',
        module: 'amd',
        noImplicitAny: true,
        noResolve: true,
        removeComments: true,
        concatenateOutput: false
      },
      transformPath: function(path) {
        return path.replace(/\.ts$/, '.js');
      }
    },
    reporters: ['progress', 'karma-typescript'],
    port: 9876,  
    colors: true,   
    logLevel: config.LOG_DEBUG,   
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}