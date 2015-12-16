define([], function(){
    var Event = function(name, description, targetGroup, contributionsDescription, location, times, maximalAmountOfGuests, id) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.targetGroup = targetGroup;
        this.contributionsDescription = contributionsDescription;
        this.location = location;
        this.times = times;
        this.maximalAmountOfGuests = maximalAmountOfGuests;
        Object.defineProperty(this, 'begin', {
            get: function() {
                return this.times.begin;
            },
            set: function(begin) {
                this.times.begin = begin;
            }
        });

        Object.defineProperty(this, 'end', {
            get: function() {
                return this.times.end;
            },
            set: function(end) {
                this.times.end = end;
            }
        });
    };
    Event.createFromDTO = function(eventDTO){
        var event = new Event(
            eventDTO.name, eventDTO.description, eventDTO.targetGroup,
            eventDTO.contributionsDescription, eventDTO.location,
            eventDTO.times, eventDTO.maximalAmountOfGuests, eventDTO.id
        );
        if(eventDTO.guests){
            event.guests = eventDTO.guests;
        }
        return event;
    };
    return Event;
});