define([], function(){
    var Guest = function(event, id, name, contribution, comment) {
        this.id = id;
        this.name = name;
        this.event = event;
        this.contribution = contribution;
        this.comment = comment;
    };
    return Guest;
});