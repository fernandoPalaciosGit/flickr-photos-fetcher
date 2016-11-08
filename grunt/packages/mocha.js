'use strict';

module.exports = {
    mochaOptions: {
        reporter: 'Nyan',
        run: true,
        logErrors: true,
        log: true
    },
    coverageTarget: [
        '<%= coverageReporter %>/html/index.html',
        '<%= coverageReporter %>/cobertura/cobertura-coverage.xml',
        '<%= coverageReporter %>/lcov/lcov.info',
        '<%= coverageReporter %>/clover/clover.xml',
        '<%= coverageReporter %>/json/coverage.json'
    ],
    mochaOptionsWithCoverage: {
        run: true,
        coverage: {
            htmlReport: '<%= coverageReporter %>/html',
            coberturaReport: '<%= coverageReporter %>/cobertura',
            lcovReport: '<%= coverageReporter %>/lcov',
            cloverReport: '<%= coverageReporter %>/clover',
            jsonReport: '<%= coverageReporter %>/json'
        }
    },
    phantom: {
        src: '<%= projectPaths.unitTest %>',
        dest: '<%= testReporter %>/spec.out',
        options: '<%= mocha.mochaOptions %>'
    },
    coverage: {
        src: '<%= projectPaths.unitTest %>',
        options: '<%= mocha.mochaOptionsWithCoverage %>'
    }
};
