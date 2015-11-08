define(['EventListController', 'EventDetailController'], function(EventListController, EventDetailController){
    "use strict";

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/eventlist.html',
                controller: EventListController
            })

            .when('/event/:id', {
                templateUrl: 'templates/event.html',
                controller: EventDetailController
            })

            .otherwise({redirectTo: '/'});

    }
    config.$inject=['$routeProvider'];
    return config;
});
