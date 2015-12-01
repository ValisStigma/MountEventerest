define([], function () {
    var EventListController = function($scope,$window,eventRepository) {

        eventRepository.all(function(data){
           $scope.events = data.events;
        }, function(){
            $scope.error = "Error";
        });
        $scope.addEvent = function(){
            var event = $scope.event;
            event.times.begin = new Date(event.times.begin);
            event.times.end = new Date(event.times.end);
            eventRepository.add(event, function(data){
                $window.location.href = '#/';
            }, function(){
                $scope.error = "Error";
            })
        }
    }
    EventListController.$inject = ['$scope','$window','eventRepository'];
    return EventListController;
});

