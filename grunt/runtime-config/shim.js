'use strict';

module.exports = {
    'chai': {
        'exports': 'chai'
    },
    'jquery': {
        'exports': '$'
    },
    'lodash': {
        'exports': '_'
    },
    'backbone': {
        'exports': 'Backbone',
        'depends': [
            'lodash',
            'jquery'
        ]
    }
};
