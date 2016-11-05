'use strict';

/**
 * Compile JS bundles with concurrent tasks.
 * --compile=app,test,vendor
 */
module.exports = function (grunt) {
    var utilsTask = require('../../node_modules/design-patterns/grunt/UtilsTask'),
        gruntTask = require('../../node_modules/design-patterns/grunt/GruntTask'),
        newTask = gruntTask(grunt);

    newTask
        .setName(utilsTask.getPath(__filename))
        .setDescription('Deployment bundles for Javascript.')
        .setTaskEvironment('dev')
        .setTasks([
            'jshint:dev',
            'clean:dev-main',
            'clean:dev-vendor',
            'browserify:dev-vendor',
            'browserify:dev-app',
            'shell:openBrowser'
        ])
        .register();
};
