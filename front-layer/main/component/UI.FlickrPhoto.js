'use strict';

let FlickrPhoto, _ = require('lodash'), $ = require('jquery');

FlickrPhoto = function (options) {
    this.search = this.setWrapperElement(options.search || null);
};

_.assign(FlickrPhoto.prototype, {
    constructor: FlickrPhoto,
    setWrapperElement: function ($el) {
        this.wrapper = !_.isNull($el) && !_.isUndefined($el.jquery) ? $el : $($el);
    },
    photoToListItem: function (photo) {
        return ['<li><figure><img src="', photo.url, '" alt=""/>',
            '<figcaption>', photo.title, '</figcaption></figure></li>'
        ].join('');
    },
    photoListToHTML: function (photos) {
        return ['<ul>', photos.map(this.photoToListItem).join(''), '</ul>'].join('');
    },
    refreshUiCards: function (data) {
        this.wrapper.html(this.photoListToHTML(data));
    }
});

module.exports = function (options) {
    return new FlickrPhoto(options || {});
};
