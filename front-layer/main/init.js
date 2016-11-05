'use strict';

var $ = require('jquery'),
    getFlickrFetcher = require('./component/FlickrFetcher'),
    initializeApp;

initializeApp = function () {
    let flicker = getFlickrFetcher({search: 'scotish terriers'});

    flicker.fetchPhotos()
        .then(function (response) {
            console.dir(response);
        });
};

$(initializeApp);