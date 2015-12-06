define([], function () {
    var GuestController = function($scope, eventRepository, $routeParams, $window, editGuestService){
        var event_id = $routeParams.id;
        $scope.event_id = event_id;
        $scope.guest = editGuestService.getGuest();
        var guestEdit = false;
        if($scope.guest){
            guestEdit = true;
        }
        $scope.addGuest = function(){
            var guest = $scope.guest;
            if(!guestEdit) {
                eventRepository.addGuest(event_id, guest, onSuccess, onError);
            } else {
                eventRepository.editGuest(event_id, guest, onSuccess, onError);
            }
        };
        var onSuccess = function(){
            editGuestService.clear();
            $window.location.href = '#/event/' + event_id;
        };
        var onError = function(){
            $scope.error = "Error";
        }
    };
    GuestController.$inject = ['$scope', 'eventRepository', '$routeParams', '$window', 'editGuestService'];
    return GuestController;
});
