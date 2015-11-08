require.config({
    // base url relative to the index.html
    baseUrl: './',
    paths: {
        'frameworks/angular': 'frameworks/angular/angular.min',
        'frameworks/angularRoute': 'frameworks/angular/angular-route',
        'routesConfig': 'classes/routesConfig',
        'EventListController': 'classes/controllers/EventListController',
        'EventDetailController': 'classes/controllers/EventDetailController',
        'app': 'classes'
    },
    // angular does not support async loading out of the box -> use the shim loader
    shim: {
        'frameworks/angular': {
            exports: 'angular'
        },
        'frameworks/angularRoute': {
            deps: ['frameworks/angular'],
            exports: 'angular-route'
        }
    }
});

define(['frameworks/angular', 'frameworks/angularRoute', 'app/modules/lafete'], function (Angular, AngularRoute, Lafete) {
    return Angular.bootstrap(Lafete);
});