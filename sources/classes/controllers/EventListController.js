define([], function () {
    var EventListController = function($scope,$window,eventRepository) {

        eventRepository.all(function(data){
           $scope.events = data.events;
        }, function(){
            showError("Error while loading events");
        });
        $scope.addEvent = function(){
            var event = $scope.event;
            event.times.begin = new Date(event.times.begin);
            event.times.end = new Date(event.times.end);
            eventRepository.add(event, function(data){
                $window.location.href = '#/';
            }, function(){
                showError("Could not load all events");
            })
        }
        function showError(message){
            $scope.error = message;
            $scope.isError = true;
            setInterval(function(){
                $scope.isError = false;
            }, 5000);
        }
    };
    EventListController.$inject = ['$scope','$window','eventRepository'];
    return EventListController;
});

