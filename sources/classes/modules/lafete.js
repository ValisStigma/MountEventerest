// declare dependency to angular (similar to import in java)
define(['angular', 'routesConfig', 'angularRoute', 'eventRepository', 'eventListController'], function (Angular, routesConfig, angularRoute, EventRepository, EventListController) {

    // Create new empty app/module named 'lafete'
    var Lafete = Angular.module('lafete', ['ngRoute']);
    Lafete.config(routesConfig);
    Lafete.factory('eventRepository', EventRepository);
    //Lafete.controller('EventListController', EventListController);
    // export module to use it in other classes
    return Lafete;
});