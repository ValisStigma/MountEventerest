define([], function () {
    var EventDetailController = function($scope, eventRepository, $routeParams){
        var event_id = $routeParams.id;
        eventRepository.get(event_id, function(data){
            $scope.event = data;
        }, function(){
            $scope.error = "Error";
        });
        eventRepository.getGuests(event_id, function(data) {
            $scope.guests = data.guests;
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
        $scope.editGuest = function(){
            var event = $scope.event;
            eventRepository.edit(event.id, function(data){
                $scope.event = data;
            }, function(){
                $scope.error = "Error";
            });
        }
    };
    EventDetailController.$inject = ['$scope', 'eventRepository', '$routeParams'];
    return EventDetailController;
});

