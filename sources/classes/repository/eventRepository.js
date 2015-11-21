define([], function(){
    "use strict";
    var serverUrl = "http://127.0.0.1:8080";
    var path = "/api";

    var EventRepository = function($http){
        var all = function(onSuccess, onError){
            var response = $http.get(serverUrl + path + "/events");
            response.success(onSuccess);
            response.error(onError);
        };
        var get = function(eventid, onSuccess, onError){
            var response = $http.get(serverUrl + path + "/events/" + eventid);
            response.success(onSuccess);
            response.error(onError);
        };
        var add = function(event, onSuccess, onError){
            var response = $http.post(serverUrl + path + "/events", event);
            response.success(onSuccess);
            response.error(onError);
        };
        var addGuest = function(event, guest, onSuccess, onError){
            var response = $http.post(serverUrl + path + "/events/" + event.id + "/guests", guest);
            response.success(onSuccess);
            response.error(onError);
        };
        return {all: all, get: get, add: add, addGuest: addGuest};
    };

    EventRepository.$inject = ['$http'];

    return EventRepository;
});
