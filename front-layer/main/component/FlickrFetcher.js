'use strict';

let FlickrFetcher, _ = require('lodash'), $ = require('jquery');
const API_KEY = '8060d4cdac3ceb86af470aae29af3a56';
const DOMAIN = '.staticflickr.com/';
const PHOTO_EXT = '_b.jpg';
const STATUS = {
    error: 'fail',
    success: 'ok'
};

FlickrFetcher = function (options) {
    this.search = this.setSearchName(options.search);
};

_.assign(FlickrFetcher.prototype, {
    constructor: FlickrFetcher,
    setSearchName: function (search) {
        this.search = encodeURIComponent(search);

        return this;
    },
    getUrlApi: function () {
        return _.join([
            'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=',
            API_KEY, '&safe_search=1&text=', this.search, '&format=json&nojsoncallback=1'
        ], '');
    },
    getImageURL: function (photoObj) {
        return _.join([
            'https://farm',
            photoObj.farm, DOMAIN,
            photoObj.server, '/',
            photoObj.id, '_',
            photoObj.secret, PHOTO_EXT
        ], '');
    },
    getDataTemplate: function (photos) {
        return _.map(photos, (photo) => {
            return {
                title: photo.title,
                url: this.getImageURL(photo)
            };
        });
    },
    fetchFlickrData: function (resolve, reject, response) {
        if (response.stat === STATUS.error) {
            reject(_.pick(response, ['code', 'message']));

        } else if (response.stat === STATUS.success) {
            resolve(this.getDataTemplate(response.photos.photo));
        }
    },
    fetchPhotos: function () {
        return new window.Promise((resolve, reject) => {
            return $.getJSON(this.getUrlApi(),
                _.partial(_.bind(this.fetchFlickrData, this), resolve, reject));
        });
    }
});

module.exports = function (options) {
    return new FlickrFetcher(options || {});
};
