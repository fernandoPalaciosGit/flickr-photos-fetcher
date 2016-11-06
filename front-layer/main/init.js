'use strict';

let $ = require('jquery'),
    _ = require('lodash'),
    getFlickrFetcher = require('./component/FlickrFetcher'),
    getFlickrPhotos = require('./component/UI.FlickrPhoto'),
    initializeApp, searchFlickr,
    $form, $textSearch,
    flicker = getFlickrFetcher(),
    iuPhotos = getFlickrPhotos();

searchFlickr = function (evSubmit) {
    evSubmit.preventDefault();

    if ($textSearch.val().trim().length > 0) {
        flicker
            .setSearchName($textSearch.val())
            .fetchPhotos()
            .then(_.bindKey(iuPhotos, 'refreshUiCards'));
    }
};

initializeApp = function () {
    $form = $('#form-search-flickr');
    $textSearch = $form.find('#searchText');
    iuPhotos.setWrapperElement('.search-flickr-cards');
    $form.on('submit', searchFlickr);
};

$(initializeApp);