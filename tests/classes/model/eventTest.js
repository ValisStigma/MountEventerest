define(['tests/factories/eventFactory','app/model/Event'],
	function(EventFactory, Event) {
	'use strict';

	describe('Event', function() {
		var event;

		// setup
		beforeEach(function() {
			event = EventFactory.createEvent(1);
 		});

		describe('set property begin', function(){
			it('changes the property', function() {
				expect(event.begin)
					.toEqual(new Date('2015-10-10T18:00:00.000Z'));
				event.begin = new Date('2015-10-10T20:00:00.000Z');
				expect(event.begin)
					.toEqual(new Date('2015-10-10T20:00:00.000Z'));
			});
		});

		describe('set property end', function() {
			it('changes the property', function() {
				expect(event.end)
					.toEqual(new Date('2015-10-11T02:00:00.000Z'));
				event.end = new Date('2015-10-11T04:00:00.000Z');
				expect(event.end)
					.toEqual(new Date('2015-10-11T04:00:00.000Z'));
			});
		});
	});
});
