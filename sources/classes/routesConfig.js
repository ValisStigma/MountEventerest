define(['eventDetailController', 'eventListController'], function(eventDetailController, eventListController) {

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

            .when('/addGuest', {
                templateUrl:'views/addGuest.html',
                controller: eventDetailController
            });

    }
    config.$inject = ['$routeProvider'];
    return config;
});