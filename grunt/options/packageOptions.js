'use strict';

var _ = require('lodash'),
    initialize = {
        config: {
            src: 'grunt/packages/*.js'
        }
    },
    options = {
        packageJson: '<% grunt.file.readJSON(\'package.json\') %>',
        bundleJS: {
            dirDev: [
                '<%= projectPaths.appOsmaniOreilly.application %>/**/*.js'
            ]
        },
        projectPaths: {
            git: '.git/hooks',
            protocol: process.env.APACHE_PROTOCOL || 'http',
            host: process.env.APACHE_HOST || 'localhost',
            port: process.env.APACHE_PORT || '80',
            root: 'flickr-photos-fetcher',
            app: {
                publicDir: 'build/flickr-photos-fetcher/main',
                test: 'build/flickr-photos-fetcher/test',
                application: 'flickr-photos-fetcher'
            },
            vendors: {
                publicDir: 'build/vendors'
            }
        }
    };

module.exports = _.defaults(initialize, options);
