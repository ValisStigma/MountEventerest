define([], function () {
    var AddEventController = function($scope, eventRepository, $routeParams, $window){
        var event_id = $routeParams.id;
        $scope.event_id = event_id;

        $scope.addGuest = function(){
            var guest = $scope.guest;
            eventRepository.addGuest(event_id, guest, function(data){
                $window.location.href = '#/event/' + event_id;
            }, function(){
                $scope.error = "Error";
            });
        };
    };
    AddEventController.$inject = ['$scope', 'eventRepository', '$routeParams', '$window'];
    return AddEventController;
});
