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
            if(event.maximalAmountOfGuests > amountOfGuests){
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
            eventRepository.deleteGuest($scope.event.id, guest.id, function(data){
                var currentGuest = $scope.guests.filter(function(g){
                    return g.id === data[0].id;
                })[0];
                showRemovedGuest(guest);
                $scope.guests.splice($scope.guests.indexOf(currentGuest), 1);
            }, function(){
                showError("Could not delete guest");
            });
        };
        function showError(message, persistent) {
            $scope.error = message;
            $scope.isError = true;
            if (!persistent) {
                setTimeout(function () {
                    $scope.isError = false;
                    $scope.$apply();
                }, 5000);
            }
        }
        function showRemovedGuest(removedGuest) {
            $scope.guest = removedGuest;
            $scope.isDeleted = true;
            setTimeout(function() {
                $scope.isDeleted = false;
                $scope.$apply();
            }, 5000);
        }

    };
    EventDetailController.$inject = ['$scope', 'eventRepository', '$routeParams', '$window', 'editGuestService'];
    return EventDetailController;
});

