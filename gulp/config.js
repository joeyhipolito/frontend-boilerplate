var dest = './build';
var src  = './src';

module.exports = {
  browserSync: {
    server: {
      // http serve on build directory
      baseDir: dest
    }
  },
  sass: {
    src      : src + '/styles/**/*.{sass, scss}',
    dest     : dest,
    settings : {
      indentedSynatax : true,
      imagePath       : 'images'
    }
  },
  markup: {
    src  : src + '/www/**',
    dest : dest
  },
  browserify: {
    // each element of the array will be a separate bundle
    bundleConfigs: [
      {
        entries    : src + '/scripts/common.js',
        dest       : dest,
        outputName : 'common.js',
        // require    : ['jquery']
      },
      {
        entries    : src + '/scripts/main.js',
        dest       : dest,
        outputName : 'main.js',
        // list of externally available modules to exclude from the bundle
        // external   : ['jquery']
      }
    ]
  },
  production: {
    cssSrc : dest + '/*.css',
    jsSrc  : dest + '/*.js',
    dest   : dest
  }
};
