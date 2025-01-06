var newRoom = require('new_room');

module.exports = {
    run: function(creep, room)
    {
        if (creep.pos.roomName == room)
            creep.memory.rightRoom = true;
        else
            creep.memory.rightRoom = false;

        if (!creep.memory.rightRoom && !creep.memory.twerking) //needs to go to new room
            newRoom.run(creep, room);
        else
            console.log('Problem happening in voyage.');
    }};
