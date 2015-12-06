define([], function(){
    "use strict";
    var EditGuestService = function(){
        var currentGuest = null;
        var setGuest = function(guest){
            currentGuest = guest;
        };
        var getGuest = function(){
            return currentGuest;
        };
        var clear = function(){
            currentGuest = null;
        };
        return {setGuest: setGuest, getGuest: getGuest, clear: clear};
    };
    return EditGuestService;
});
