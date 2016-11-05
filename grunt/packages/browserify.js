'use strict';

module.exports = {
    'dev-app': {
        options: {
            external: '<%= bundleVendors %>',
            transform: [['babelify', {'presets': ['es2015']}]]
        },
        browserifyOptions: {
            debug: true
        },
        files: {
            '<%= projectPaths.app.publicDir %>/app.js': '<%= bundleJS %>'
        }
    },
    'dev-vendor': {
        options: {
            require: '<%= bundleVendors %>',
            plugin: [['minifyify', {map: false}]],
            transform: [['browserify-shim']]
        },
        browserifyOptions: {
            debug: false
        },
        files: {
            '<%= projectPaths.app.vendors %>/vendors.js': ['.']
        }
    },
    'dev-test': {}
};
