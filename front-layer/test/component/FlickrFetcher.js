'use strict';

var expect = require('chai').expect;

describe('FlickrFetcher', function () {
    var FlickrFetcher = require('./../../main/component/FlickrFetcher'), flicker, testFlickrData;

    before(function () {
        flicker = new FlickrFetcher({search: 'scotish terriers'});
        testFlickrData = {
            id: '24770505034',
            owner: '97248275@N03',
            secret: '31a9986429',
            server: '1577',
            farm: 2,
            title: 'Dog goes to desperate measure to avoid walking on a leash',
            ispublic: 1,
            isfriend: 0,
            isfamily: 0
        };
    });

    it('should end a request to the Flickr API, and retrieve a bunch of photograph data;', function (next) {
        expect(flicker.fetchPhotos).to.be.a('function');
        next();
    });

    it('should take a photo object and return an object with just title and URI', function (next) {
        var expected = {
                title: 'Dog goes to desperate measure to avoid walking on a leash',
                url: 'https://farm2.staticflickr.com/1577/24770505034_31a9986429_b.jpg'
            },
            actualUrl = flicker.getImageURL(testFlickrData),
            actualObject = flicker.getDataTemplate([testFlickrData]);

        expect(actualUrl).to.equal(expected.url);
        expect(actualObject[0]).to.eql(expected);
        next();
    });
});