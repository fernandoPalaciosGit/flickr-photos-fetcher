'use strict';

module.exports = function (grunt) {
    var utilsTask = require('../../node_modules/design-patterns/grunt/UtilsTask'),
        gruntTask = require('../../node_modules/design-patterns/grunt/GruntTask'),
        newTask = gruntTask(grunt);

    newTask
        .setName(utilsTask.getPath(__filename))
        .setDescription('Deployment Test bundles for Javascript.')
        .setTaskEvironment('dev')
        .setTasks([
            'jshint:dev',
            'clean:dev-test',
            'clean:dev-main',
            'browserify:dev-app',
            'browserify:dev-test',
            'mocha:dev'
        ])
        .register();
};
