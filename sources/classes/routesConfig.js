define(['eventDetailController', 'eventListController', 'guestController'], function(eventDetailController, eventListController, guestController) {

    function config($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/eventList.html',
            controller: eventListController
        })

            .when('/event/:id', {
                templateUrl:'views/eventDetail.html',
                controller: eventDetailController
            })

            .when('/addEvent', {
                templateUrl:'views/addEvent.html',
                controller: eventListController
            })

            .when('/event/:id/addGuest', {
                templateUrl:'views/addGuest.html',
                controller: guestController
            })
            .when('/event/:id/editGuest/:guest_id', {
                templateUrl: 'views/addGuest.html',
                controller: guestController
            });

    }
    config.$inject = ['$routeProvider'];
    return config;
});