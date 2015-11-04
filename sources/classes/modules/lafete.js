// declare dependency to angular (similar to import in java)
define(['frameworks/angular', 'app/controllers/EventListController', 'app/controllers/EventDetailController'], function (Angular, EventListController, EventDetailController) {

    // Create new empty app/module named 'lafete'
    var Lafete = Angular.module('lafete', []);
    EventListController.$inject = ['$scope', "$http"];
    EventDetailController.$inject = ['$scope', '$http'];
    Lafete.controller('EventListController', EventListController);
    Lafete.controller('EventDetailController', EventDetailController);
    // export module to use it in other classes
    return Lafete;
});