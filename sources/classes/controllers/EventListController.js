define([], function () {
    var EventListController = function($scope, eventRepository) {

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
                $scope.events.push(data);
            }, function(){
                $scope.error = "Error";
            })
        }
        $scope.adding = false;
        $scope.toggleAdd = function(){
            $scope.adding = !$scope.adding;
        }
    }
    EventListController.$inject = ['$scope', 'eventRepository'];
    return EventListController;
});

