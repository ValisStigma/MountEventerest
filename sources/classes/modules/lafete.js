// declare dependency to angular (similar to import in java)
define(['frameworks/angular', 'app/controllers/EventListController'], function (Angular, EventListController) {

    // Create new empty app/module named 'lafete'
    var Lafete = Angular.module('lafete', []);
    EventListController.$inject = ['$scope'];
    Lafete.controller('EventListController', EventListController);
    // export module to use it in other classes
    return Lafete;
});