define([], function () {
    var EventListController = function($scope,$window,eventRepository) {

        eventRepository.all(function(data){
           $scope.events = data.events;
        }, function(){
            showError("Error while loading events", true);
        });
        $scope.addEvent = function(){
            var event = $scope.event;
            var start;
            var end;
            if(checkBrowser()){
                var regex = /([0-3]{1}[0-9]{1})\.([0-1]{1}[0-9]{1})\.([0-9]{4})/;
                start = document.getElementById("time_start").value;
                end = document.getElementById("time_end").value;
                $scope.event.times = {};
                if(regex.test(start) && regex.test(end)){
                    var startMatch = start.match(regex);
                    var endMatch = end.match(regex);
                    start = startMatch[2] + "/" + startMatch[1] + "/" + startMatch[3];
                    end = endMatch[2] + "/" + endMatch[1] + "/" + endMatch[3];
                }
            } else {
                start = $scope.event.times.start;
                end = $scope.event.times.end;
            }
            if(event && event.times && start && end) {
                $scope.event.times.begin = new Date(start);
                $scope.event.times.end = new Date(end);
                console.log($scope.event.times.begin + "\n" + $scope.event.times.end);
            } else {
                showError("Entered dates are not valid", false);
                return;
            }
            eventRepository.add(event, function(){
                $window.location.href = '#/';
            }, function(){
                showError("Could not add events", false);
            })
        };
        function checkBrowser(){
            var regex = /([Ff]irefox|[Ss]afari)/g;
            var match = navigator.userAgent.match(regex);
            if(match[0] === "Firefox" || match[0] === "Safari"){
                return true;
            }
            return false;
        }
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
    };
    EventListController.$inject = ['$scope','$window','eventRepository'];
    return EventListController;
});

