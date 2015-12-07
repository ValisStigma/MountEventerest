define([], function () {
    var EventDetailController = function($scope, eventRepository, $routeParams, $window, editGuestService){
        var event_id = $routeParams.id;
        eventRepository.get(event_id, function(data){
            $scope.event = data;
        }, function(){
            showError("Could not load events");
        });
        eventRepository.getGuests(event_id, function(data) {
            $scope.guests = data.guests;
        }, function(){
            showError("Could not load guests");

        });
        $scope.addGuest = function(){
            var amountOfGuests = $scope.guests.length;
            var event = $scope.event;
            if(event.maximalAmountOfGuests >= amountOfGuests){
                editGuestService.clear();
                $window.location.href = '#/event/' + event.id + '/addGuest';
            } else {
                showError("Event is overbooked. Cannot add another guest");
            }
        };
        $scope.editGuest = function(guest){
            var amountOfGuests = $scope.guests.length;
            var event = $scope.event;
            if(event.maximalAmountOfGuests >= amountOfGuests){
                editGuestService.setGuest(guest);
                $window.location.href = '#/event/' + event.id + '/editGuest/' + guest.id;
            } else {
                showError("Event is overbooked. Cannot add another guest");
            }
        };
        $scope.deleteGuest = function(guest){
            var guests = $scope.event.guests;
            eventRepository.deleteGuest($scope.event.id, guest, function(data){
                guests.splice(guests.indexOf(data), 1);
                //TODO: Find better solution to reload array;
                //$window.location.reload();
            }, function(){
                showError("Could not delete guest");
            });
        }
        function showError(message){
            $scope.error = message
            $scope.isError = true;
            setInterval(function(){
                $scope.isError = false;
            }, 5000);
        }

    };
    EventDetailController.$inject = ['$scope', 'eventRepository', '$routeParams', '$window', 'editGuestService'];
    return EventDetailController;
});

