'use strict';

var _ = require('lodash'),
    initialize = {
        config: {
            src: 'grunt/packages/*.js'
        }
    },
    options = {
        packageJson: require('./../../package.json'),
        bundleVendors: [
            'jquery', 'lodash', 'backbone'
        ],
        bundleVendorsTest: [
            'jquery', 'lodash', 'backbone', 'chai'
        ],
        linterJs: [
            'front-layer/**/*.js',
            'Gruntfile.js',
            'grunt/**/*.js'
        ],
        coverageReporter: 'test/coverage',
        coverageReporterHtmlOutput: 'test/coverage/html/component/index.html',
        testReporter: 'test/unitTest',
        environmentTasks: ['dev', 'dist'],
        gruntRuntimeConfig: 'grunt/runtime-config',
        projectPaths: {
            git: '.git/hooks',
            protocol: process.env.APACHE_PROTOCOL || 'http',
            host: process.env.APACHE_HOST || 'localhost',
            port: process.env.APACHE_PORT || '80',
            root: 'flickr-photos-fetcher',
            unitTest: 'front-layer/test/index.html',
            bundle: {
                main: ['front-layer/main/**/*.js'],
                test: ['front-layer/test/**/*.js', '!front-layer/test/init.js']
            },
            app: {
                main: 'build/main',
                test: 'build/test',
                vendors: 'build/vendors',
                application: 'flickr-photos-fetcher'
            }
        }
    };

module.exports = _.defaults(initialize, options);
