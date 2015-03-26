'use strict';

/**
 * handle-errors.js
 * -----------
 * Provides awesome notifications for errors
 */

var env    = process.env.NODE_ENV || 'development';
var debug  = require('debug');
var notify = require('gulp-notify');

module.exports = function (error) {

    if (env !== 'production') {

        var args = Array.prototype.slice.call(arguments);
        // Send error to notification center with gulp-notify
        notify.onError({
            'title'   : 'Compile Error',
            'message' : '<%= error.message %>'
        }).apply(this, args);

        // keep gulp from hanging on this task
        this.emit('end');
    } else {
        debug('%s', error);
        process.exit(1);
    }
}
