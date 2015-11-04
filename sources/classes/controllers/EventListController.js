define([], function () {
    return function($scope, $http) {
        var response = $http.get("http://localhost:8080/api/events");
        response.success(function(data, status, headers, config){
           $scope.events = data.events;
        });
        response.error(function(data, status, headers, config){
            $scope.events = "Could not load events";
        });
    }
});

