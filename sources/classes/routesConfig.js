/**
 * Created by co on 11.11.15.
 */
define(['eventDetailController', 'eventListController'], function(eventDetailController, eventListController) {

    function config($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/eventList.html',
            controller: eventListController
        })

            .when('/event/:id', {
                templateUrl:'views/eventList.html',
                controller: eventDetailController
            });
    }
    config.$inject = ['$routeProvider'];
    return config;
});