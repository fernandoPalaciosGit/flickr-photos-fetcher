'use strict';

let FlickrPhoto, _ = require('lodash'), $ = require('jquery');

FlickrPhoto = function (options) {
    this.search = this.setWrapperElement(options.search || null);
};

_.assign(FlickrPhoto.prototype, {
    constructor: FlickrPhoto,
    templateSection: '<ul><%= list %></ul>',
    templateList: '<li><figure><img src="<%= url %>"/><figcaption><%= title %></figcaption></figure></li>',
    setWrapperElement: function ($el) {
        this.wrapper = !_.isNull($el) && !_.isUndefined($el.jquery) ? $el : $($el);
    },
    listItemToSection: function (list) {
        return _.template(this.templateSection)({list: list});
    },
    photoToListItem: function (photo) {
        return _.template(this.templateList)(_.pick(photo, ['url', 'title']));
    },
    photoListToHTML: function (photos) {
        var photoList = _.chain(photos)
            .map(_.bind(this.photoToListItem, this))
            .join('')
            .value();

        return this.listItemToSection(photoList);
    },
    refreshUiCards: function (data) {
        this.wrapper.html(this.photoListToHTML(data));
    }
});

module.exports = function (options) {
    return new FlickrPhoto(options || {});
};

