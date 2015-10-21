define([], function () {
    'use strict';

    describe('EventListController', function() {
        beforeEach(module('app'));
        var $controller;
        beforeEach(inject(function(_$controller_){
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $controller = _$controller_;
        }));

        describe('property scope', function() {
            var scope = {};
            var controller = $controller('EventListController', {$scope: $scope});


            it('contains 3 events', function() {
              expect(eventListController.events.length).toBe(3);
            });
        });
    });
});
