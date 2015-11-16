define([], function () {
    var EventDetailController = function($scope, eventRepository, $routeParams){
        var event = $routeParams.id;
        eventRepository.get(event, function(data){
            $scope.event = data;
        }, function(){
            $scope.error = "Error";
        });
        $scope.addGuest = function(){
            var guest = $scope.guest;
            var event = $scope.event;
            eventRepository.addGuest(event, guest, function(data){
                $scope.event.guests.push(data);
            }, function(){
                $scope.error = "Error";
            });
        }
    };
    EventDetailController.$inject = ['$scope', 'eventRepository', '$routeParams'];
    return EventDetailController;
});

