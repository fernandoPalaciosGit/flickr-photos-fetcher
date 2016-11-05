'use strict';

var _ = require('lodash'),
    initialize = {
        config: {
            src: 'grunt/packages/*.js'
        }
    },
    options = {
        packageJson: '<% grunt.file.readJSON(\'package.json\') %>',
        bundleJS: [
            'front-layer/**/*.js',
            '!front-layer/test/*'
        ],
        bundleVendors: [
            'jquery', 'lodash'/*, 'backbone'*/
        ],
        linterJs: [
            'front-layer/**/*.js',
            'Gruntfile.js',
            'grunt/**/*.js'
        ],
        environmentTasks: ['dev', 'dist'],
        gruntRuntimeConfig: 'grunt/runtime-config',
        projectPaths: {
            git: '.git/hooks',
            protocol: process.env.APACHE_PROTOCOL || 'http',
            host: process.env.APACHE_HOST || 'localhost',
            port: process.env.APACHE_PORT || '80',
            root: 'flickr-photos-fetcher',
            app: {
                publicDir: 'build/main',
                test: 'build/test',
                vendors: 'build/vendors',
                application: 'flickr-photos-fetcher'
            }
        }
    };

module.exports = _.defaults(initialize, options);
