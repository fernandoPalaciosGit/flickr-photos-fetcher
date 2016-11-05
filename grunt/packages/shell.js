'use strict';

module.exports = function () {
    var _ = require('lodash'),
        getProyectPath = function (resource) {
            return _.join([
                '<%= projectPaths.protocol %>', '://',
                '<%= projectPaths.host %>', ':',
                '<%= projectPaths.port %>', '/',
                '<%= projectPaths.root %>', '/',
                resource], '');
        },
        commands = {
            openBrowser: {
                command: [
                    'googlePath=$(which google-chrome)',
                    '${googlePath} \"' + getProyectPath('<%= packageJson.main %>') + '\"',
                    'exit'
                ].join(' && ')
            }
        };

    return _.assign({
        options: {
            stdout: true,
            stderr: true,
            failOnError: true,
            execOptions: {
                maxBuffer: Infinity
            }
        }
    }, commands);
};
