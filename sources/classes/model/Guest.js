define([], function(){
    var Guest = function(id, name, contribution, comment) {
        this.id = id;
        this.name = name;
        this.contribution = contribution;
        this.comment = comment;
    };
    Guest.createFromDTO = function(guestDTO){
        return new Guest(guestDTO.id, guestDTO.name, guestDTO.contribution, guestDTO.comment);
    }
    return Guest;
});