'use strict';

var expect = require('chai').expect;

describe('FlickrFetcher', function() {
    it('should exist', function(next) {
        var FlickrFetcher = require('./../../main/component/FlickrFetcher'),
            flicker = new FlickrFetcher({search: 'scotish terriers'});

        expect(flicker.fetchPhotos).to.be.a('function');
        next();
    });
});