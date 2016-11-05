'use strict';

let FlickrFetcher, _ = require('lodash'), $ = require('jquery');
const API_KEY = '8060d4cdac3ceb86af470aae29af3a56';
const DOMAIN = '.staticflickr.com/';
const PHOTO_EXT = '_b.jpg';

FlickrFetcher = function (options) {
    this.search = options.search;
};

_.assign(FlickrFetcher.prototype, {
    getUrlApi: function () {
        return _.join([
            'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=',
            API_KEY, '&safe_search=1&text=', this.search, '&format=json&nojsoncallback=1'
        ], '');
    },
    photoObjToURL: function (photoObj) {
        return _.join([
            'https://farm',
            photoObj.farm, DOMAIN,
            photoObj.server, '/',
            photoObj.id, '_',
            photoObj.secret, PHOTO_EXT
        ], '');
    },
    transformPhotoObj: function (photoObj) {
        return {
            title: photoObj.title,
            url: this.photoObjToURL(photoObj)
        };
    },
    fetchFlickrData: function (data) {
        return _.map(data.photos.photo, this.transformPhotoObj);
    },
    fetchPhotos: function () {
        return new window.Promise(function (resolve) {
            $.getJson(this.getUrlApi())
                .then(this.fetchFlickrData)
                .then(_.partial(resolve));
        });
    }
});

module.exports = function (options) {
    return new FlickrFetcher(options || {});
};
