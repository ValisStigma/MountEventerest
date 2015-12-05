define([], function () {
    var EventDetailController = function($scope, eventRepository, $routeParams, $window){
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
        $scope.editGuest = function(){
            var amountOfGuests = $scope.guests.length;
            var event = $scope.event;
            if(event.maximalAmountOfGuests >= amountOfGuests){
                $window.location.href = '#/event/' + event.id + '/addGuest';
            } else {
                //TODO: User notificatiion of errors
                $window.alert("Event is full");
            }
        };
        $scope.deleteGuest = function(guest){
            var guests = $scope.event.guests;
            eventRepository.deleteGuest($scope.event.id, guest, function(data){
                guests.splice(guests.indexOf(data), 1);
                //TODO: Find better solution to reload array;
                $window.location.reload();
            }, function(){
                $scope.error = "Error";
            });
        }

    };
    EventDetailController.$inject = ['$scope', 'eventRepository', '$routeParams', '$window'];
    return EventDetailController;
});

