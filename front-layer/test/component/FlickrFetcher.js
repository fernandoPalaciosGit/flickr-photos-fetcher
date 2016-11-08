'use strict';

var expect = require('chai').expect,
    $ = require('jquery');

describe('FlickrFetcher', function () {
    var FlickrFetcher = require('./../../main/component/FlickrFetcher'), flicker, fakeUrl, fakeData, flickrTemplateData, fakeErrorData, flickrErrorTemplateData;

    before(function () {
        flicker = new FlickrFetcher({search: 'scotish_terriers', apiKey: 'test_api'});
        fakeUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=test_api&safe_search=1&text=scotish_terriers&format=json&nojsoncallback=1';
        fakeData = {
            'stat': 'ok',
            'photos': {
                'page': 1,
                'pages': 2872,
                'perpage': 100,
                'total': '287170',
                'photo': [{
                    'id': '24770505034',
                    'owner': '97248275@N03',
                    'secret': '31a9986429',
                    'server': '1577',
                    'farm': 2,
                    'title': '20160229090898',
                    'ispublic': 1,
                    'isfriend': 0,
                    'isfamily': 0
                }, {
                    'id': '24770504484',
                    'owner': '97248275@N03',
                    'secret': '69dd90d5dd',
                    'server': '1451',
                    'farm': 2,
                    'title': '20160229090903',
                    'ispublic': 1,
                    'isfriend': 0,
                    'isfamily': 0
                }]
            }
        };
        flickrTemplateData = [{
            'title': '20160229090898',
            'url': 'https://farm2.staticflickr.com/1577/24770505034_31a9986429_b.jpg'
        }, {
            'title': '20160229090903',
            'url': 'https://farm2.staticflickr.com/1451/24770504484_69dd90d5dd_b.jpg'
        }];
        fakeErrorData = {
            'stat': 'fail',
            'code': '400',
            'message': 'error connection',
            'photos': {
                'photo': []
            }
        };
        flickrErrorTemplateData = {
            'code': '400',
            'message': 'error connection'
        };
    });

    it('should take a photo object and return an object with just title and URI', function (next) {
        var flickrPhotos = fakeData.photos.photo,
            flickrUrl = flicker.getImageURL(flickrPhotos[0]),
            flickrTemplateData = flicker.getDataTemplate(flickrPhotos);

        expect(flickrUrl).to.equal(flickrTemplateData[0].url);
        expect(flickrTemplateData).to.eql(flickrTemplateData);
        next();
    });

    it('should end a request to the Flickr API, and retrieve a bunch of photograph data;', function (next) {
        var stubFlickerApiFetcher = function (url) {
            let defer = $.Deferred();

            expect(url).to.eql(fakeUrl);
            // successfully request to flickr API
            defer.resolve(fakeData);

            return defer.promise();
        };

        flicker.fetchPhotos(stubFlickerApiFetcher).then(function (actual) {
            expect(actual).to.eql(flickrTemplateData);
            next();
        });
    });

    it('should end a request to the Flickr API, rejected request by http', function (next) {
        var stubFlickerApiFetcher = function (url) {
            let defer = $.Deferred();

            expect(url).to.eql(fakeUrl);
            // not allowed request by server access
            defer.reject(fakeErrorData);

            return defer.promise();
        };

        flicker.fetchPhotos(stubFlickerApiFetcher).fail(function (actual) {
            expect(actual).to.eql(flickrErrorTemplateData);
            next();
        });
    });

    it('should end a request to the Flickr API, rejected response by data not required', function (next) {
        var stubFlickerApiFetcher = function (url) {
            let defer = $.Deferred();

            expect(url).to.eql(fakeUrl);
            // server resolve data with undefined photos
            defer.resolve(fakeErrorData);

            return defer.promise();
        };

        flicker.fetchPhotos(stubFlickerApiFetcher).fail(function (actual) {
            expect(actual).to.eql(flickrErrorTemplateData);
            next();
        });
    });
});