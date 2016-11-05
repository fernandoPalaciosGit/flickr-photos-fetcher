'use strict';

module.exports = {
    'jquery': {
        'exports': '$'
    },
    'lodash': {
        'exports': '_'
    },
    'backbone': {
        'exports': 'Backbone',
        'depends': [
            'jquery',
            'lodash'
        ]
    }
};
