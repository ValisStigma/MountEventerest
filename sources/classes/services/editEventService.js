define([], function(){
    "use strict";
    var EditEventService = function(){
        var currentGuest = null;
        var setEvent = function(guest){
            currentGuest = guest;
        };
        var getEvent = function(){
            return currentGuest;
        };
        var clear = function(){
            currentGuest = null;
        };
        return {setEvent: setEvent, getEvent: getEvent, clear: clear};
    };
    return EditEventService;
});

