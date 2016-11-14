'use strict';

module.exports = {
    'dev-app': {
        options: {
            external: '<%= bundleVendors %>',
            transform: [['babelify', {'presets': ['es2015']}]],
            browserifyOptions: {
                debug: true
            }
        },
        files: {
            '<%= projectPaths.app.main %>/index.js': '<%= projectPaths.bundle.main %>'
        }
    },
    'dev-vendor': {
        options: {
            require: '<%= bundleVendors %>',
            plugin: [['minifyify', {map: false}]],
            transform: [['browserify-shim']],
            browserifyOptions: {
                debug: false
            }
        },
        files: {
            '<%= projectPaths.app.vendors %>/index.js': ['.']
        }
    },
    'dev-vendor-test': {
        options: {
            require: '<%= bundleVendorsTest %>',
            plugin: [['minifyify', {map: false}]],
            transform: [['browserify-shim']],
            browserifyOptions: {
                debug: false
            }
        },
        files: {
            '<%= projectPaths.app.vendors %>/test.js': ['.']
        }
    },
    'dev-test': {
        options: {
            external: '<%= bundleVendorsTest %>',
            transform: [['babelify', {'presets': ['es2015']}], ['browserify-istanbul']],
            browserifyOptions: {
                debug: true
            }
        },
        files: {
            '<%= projectPaths.app.test %>/index.js': '<%= projectPaths.bundle.test %>'
        }
    }
};
