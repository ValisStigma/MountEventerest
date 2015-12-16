define(['event', 'guest'], function(Event, Guest){
    "use strict";
    var serverUrl = "http://127.0.0.1:8080";
    var path = "/api";

    var EventRepository = function($http){
        var all = function(onSuccess, onError){
            var response = $http.get(serverUrl + path + "/events");
            response.success(function(data){
                data.events = data.events.map(function(eventDTO){
                    return Event.createFromDTO(eventDTO);
                });
                onSuccess(data);
            });
            response.error(onError);
        };
        var get = function(eventid, onSuccess, onError){
            var response = $http.get(serverUrl + path + "/events/" + eventid);
            response.success(function(data){
                data = Event.createFromDTO(data);
                onSuccess(data);
            });
            response.error(onError);
        };
        var add = function(event, onSuccess, onError){
            var response = $http.post(serverUrl + path + "/events", event);
            response.success(function(data){
                data = Event.createFromDTO(data);
                onSuccess(data);
            });
            response.error(onError);
        };
        var edit = function(event, onSuccess, onError){
            var response = $http.post(serverUrl + path + "/events/" + event.id, event);
            response.success(onSuccess);
            response.error(onError);
        };
        var addGuest = function(event_id, guest, onSuccess, onError){
            var response = $http.post(serverUrl + path + "/events/" + event_id + "/guests", guest);
            response.success(onSuccess);
            response.error(onError);
        };
        var getGuests = function(event, onSuccess, onError){
            var response = $http.get(serverUrl + path + "/events/" + event + "/guests");
            response.success(function(data){
                data.guests = data.guests.map(function(guestDTO){
                    return Guest.createFromDTO(guestDTO);
                });
                onSuccess(data);
            });
            response.error(onError);
        };
        var editGuest = function(event, guest, onSuccess, onError){
            var response = $http.post(serverUrl + path + "/events/" + event + "/guests/" + guest.id, guest);
            response.success(onSuccess);
            response.error(onError);
        };
        var deleteGuest = function(event, guest, onSuccess, onError){
            var response = $http.delete(serverUrl + path + "/events/" + event + "/guests/" + guest);
            response.success(onSuccess);
            response.error(onError);
        };
        return {all: all, get: get, add: add, addGuest: addGuest, getGuests: getGuests, editGuest: editGuest, deleteGuest: deleteGuest, edit: edit};
    };

    EventRepository.$inject = ['$http'];

    return EventRepository;
});
