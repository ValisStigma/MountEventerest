define([], function(){
   return function($scope, $http){
       return function(event){
           var response = $http.get("http://localhost:8080/api/events/" + event.id);
           response.success(function(data){
               $scope.event = data;
           });
           response.error(function(data, status, header, config){
               $scope.error = "Failed to load event\n" + status;
           });
       };
   }
});
