// declare dependency to angular (similar to import in java)
define(['angular', 'routesConfig', 'angularRoute', 'eventRepository', 'eventListController', 'editGuestService','editEventService'], function (Angular, routesConfig, angularRoute, EventRepository, EventListController, EditGuestService, EditEventService) {

    // Create new empty app/module named 'lafete'
    var Lafete = Angular.module('lafete', ['ngRoute']);
    Lafete.config(routesConfig);
    Lafete.factory('eventRepository', EventRepository);
    Lafete.factory('editGuestService', EditGuestService);
    Lafete.factory('editEventService', EditEventService);
    //Lafete.controller('EventListController', EventListController);
    // export module to use it in other classes
    return Lafete;
});