define(['eventDetailController', 'eventListController', 'addEventController'], function(eventDetailController, eventListController, addEventController) {

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
                controller: addEventController
            });

    }
    config.$inject = ['$routeProvider'];
    return config;
});