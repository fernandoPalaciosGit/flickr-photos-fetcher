'use strict';

var expect = require('chai').expect;

describe('UI FlickrPhoto', function () {
    var getUIFlickrPhoto = require('./../../main/component/UI.FlickrPhoto'), UIflickr, flickrTemplateData, flickrTemplateRender;

    before(function () {
        flickrTemplateData = [{
            'title': '20160229090898',
            'url': 'https://farm2.staticflickr.com/1577/24770505034_31a9986429_b.jpg'
        }, {
            'title': '20160229090903',
            'url': 'https://farm2.staticflickr.com/1451/24770504484_69dd90d5dd_b.jpg'
        }];
        flickrTemplateRender = '<ul><li><figure>' +
            '<img src="https://farm2.staticflickr.com/1577/24770505034_31a9986429_b.jpg" alt==""/>' +
            '<figcaption>20160229090898</figcaption></figure></li><li><figure>' +
            '<img src="https://farm2.staticflickr.com/1451/24770504484_69dd90d5dd_b.jpg" alt==""/>' +
            '<figcaption>20160229090903</figcaption></figure></li></ul>';
        UIflickr = getUIFlickrPhoto({
            search: 'test_search'
        });
    });

    it('should take a photo object and return a list item string', function (next) {
        expect(UIflickr.photoListToHTML(flickrTemplateData)).to.be.equal(flickrTemplateRender);
        next();
    });

    it('should Add the HTML to the page.', function (next) {
        expect(UIflickr.refreshUiCards).to.be.a('function');
        next();
    });

});
