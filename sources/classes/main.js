require.config({
    // base url relative to the index.html
    baseUrl: './',
    paths: {
        'angular': 'frameworks/angular/angular.min',
        'angularRoute': 'frameworks/angular/angular-route',
        'routesConfig': 'classes/routesConfig',
        'eventRepository': 'classes/repository/eventRepository',
        'eventDetailController': 'classes/controllers/EventDetailController',
        'eventListController': 'classes/controllers/EventListController',
        'guestController': 'classes/controllers/guestController',
        'editGuestService': 'classes/services/editGuestService',
        'app': 'classes/'
    },
    // angular does not support async loading out of the box -> use the shim loader
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angularRoute': {
            deps: ['angular']
        }
    }
});

require(['angular', 'app/modules/lafete'], function(Angular, Lafete) {
    Angular.element(document).ready(function() {
        Angular.bootstrap(document, [Lafete.name]);
    })
});
