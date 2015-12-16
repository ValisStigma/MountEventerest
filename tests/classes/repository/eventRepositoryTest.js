define(['tests/factories/eventFactory', 'event', 'app/repository/eventRepository', 'libraries/angularMocks'],
	function (EventFactory, Event, EventRepository, AngularMocks) {
	'use strict';
	var onError = function() {
		jasmine.fail();
	};
	describe('EventRepository', function() {
		var event, eventRepository, $http, $httpBackend;

		// setup
		beforeEach(AngularMocks.inject(function($injector) {
			$http = $injector.get('$http');
			$httpBackend = $injector.get('$httpBackend');


			$httpBackend.when('POST', "http://127.0.0.1:8080/api/events").respond({
				id: 1, name: 'Party'
			});
			$httpBackend.when('GET', "http://127.0.0.1:8080/api/events").respond({
				events: [{id: 1, name: 'Party'},{id: 2, name: 'Concert'}]
			});
			$httpBackend.when('GET', "http://127.0.0.1:8080/api/events/1").respond({
				id: 1, name: 'Party'
			});
			eventRepository = new EventRepository($http);
			event = {events: [{id: 1, name: 'Party'},{id: 2, name: 'Concert'}]};

		}));

		afterEach(function() {
			$httpBackend.verifyNoOutstandingExpectation();
			$httpBackend.verifyNoOutstandingRequest();
		});

		describe('get()', function() {
			beforeEach(function() {
				eventRepository.add(event, function(data){}, onError);
				$httpBackend.flush();
			});

			describe('by object id', function() {
				it('returns the object', function() {
					eventRepository.get(1, function(data){
                        expect(data.id).toEqual(1);
                    }, onError);
					$httpBackend.flush();

				});
			});
		});
		describe('all()', function() {
			it('returns an Array', function() {
				$httpBackend.expectGET("http://127.0.0.1:8080/api/events");
				eventRepository.all(function(data){
                    expect(data.events).toEqual(jasmine.any(Array));
                }, onError);
				$httpBackend.flush();
			});

			it('returns two events', function() {
				$httpBackend.expectGET("http://127.0.0.1:8080/api/events");
				eventRepository.all(function(data){
                    expect(data.events.length).toEqual(2);
                }, onError);
				$httpBackend.flush();

			});

			it('returns real javascript objects', function() {
					$httpBackend.expectGET("http://127.0.0.1:8080/api/events");
					eventRepository.all(function(data){
                        expect(data.events[0]).toEqual(jasmine.any(Event));
                        expect(data.events[1]).toEqual(jasmine.any(Event));
                    }, onError);
					$httpBackend.flush();
			});
		});

		describe('add()', function() {
			it('inserts element', function() {
                var currentEvent = {id: 1, name: 'Party'};
                $httpBackend.expectPOST("http://127.0.0.1:8080/api/events", currentEvent);
				eventRepository.add(currentEvent, function(data){
                    expect(data.id).toBe(1);
                    expect(data).toEqual(jasmine.any(Event));
                }, onError);
                $httpBackend.flush();
			});
		});
	});
});
