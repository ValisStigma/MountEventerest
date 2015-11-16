define([], function () {
    function EventListController($scope, eventRepository) {

        eventRepository.all(function(data){
           $scope.events = data.events;
        }, function(){
            $scope.error = "Error";
        });
    }
    EventListController.$inject = ['$scope', 'eventRepository'];
    return EventListController;
});

