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
        $scope.addGuest = function(){
            // var amountOfGuests = $scope.guests.length;
            var event = $scope.event;
            var guest = $scope.guest;
            //if(event.maximalAmountOfGuests >= amountOfGuests){
            eventRepository.addGuest(event, guest, function(data){
                $scope.event.guests.push(data);
                $window.location.href = '#/';
            }, function(){
                $scope.error = "Error";
            });
            //} else {
            //  $window.alert("Event is full");
            //}
        };
        $scope.editGuest = function(){
            var event = $scope.event;
            eventRepository.edit(event.id, function(data){
                $scope.event = data;
            }, function(){
                $scope.error = "Error";
            });
        };
        $scope.deleteGuest = function(){

        }

    };
    EventDetailController.$inject = ['$scope', 'eventRepository', '$routeParams', '$window'];
    return EventDetailController;
});

