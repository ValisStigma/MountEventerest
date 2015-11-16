define([], function(){
    var AddEvent = function($scope, eventRepository){
        $scope.addEvent = function(){
            var event = $scope.event;
            eventRepository.add(event, function(data){
                console.log("Success");
            }, function(){
                $scope.error = "Error";
            })
        }
    };
    AddEvent.$Inject = ['$scope', 'eventRepository'];
    return AddEvent;
});
