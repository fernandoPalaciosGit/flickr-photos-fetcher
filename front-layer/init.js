'use strict';

var $ = require('jquery'),
    _ = require('lodash'),
    Backbone = require('backbone'),
    getFlickrFetcher = require('./component/FlickrFetcher'),
    initializeApp;

initializeApp = function () {
    var flicker = getFlickrFetcher({search: 'scotish terriers'});

    console.log(_.range(5));
    console.log(flicker.search);
    console.dir(new Backbone.Model());
};

$(initializeApp);