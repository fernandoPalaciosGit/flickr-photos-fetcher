'use strict';

var _ = require('lodash');

module.exports = function (grunt) {
    var utilsTask = require('../../node_modules/design-patterns/grunt/UtilsTask'),
        gruntTask = require('../../node_modules/design-patterns/grunt/GruntTask'),
        newTask = gruntTask(grunt);

    newTask
        .setName(utilsTask.getPath(__filename))
        .setDescription('Deployment Test bundles for Javascript.')
        .setTaskEvironment('dev')
        .setConfigTask(function () {
            grunt.config.set('mochaEnvironment', grunt.option('run'));
        })
        .setTasks(_.template([
            'jshint:dev',
            'clean:dev-test',
            'clean:dev-main',
            'browserify:dev-app',
            'browserify:dev-test',
            'mocha:<%= mochaEnvironment %>'
        ])({mochaEnvironment: grunt.option('run')}).split(','))
        .register();
};
