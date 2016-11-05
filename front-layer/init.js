'use strict';

var $ = require('jquery'),
    _ = require('lodash'),
    flicker = require('./component/FlickrFetcher')({search: 'scotish terriers'}),
    initializeApp;

initializeApp = function () {
    console.log(_.range(5));
    console.log(flicker.search);
};

$(initializeApp);