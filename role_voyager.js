var newRoom = require('new_room');
var getGold = require('get_gold');
var returnGold = require('return_gold');

module.exports = {
    run: function(creep, room)
    {
        var return_loc = creep.room.controller;

        if (creep.pos.roomName == room)
            creep.memory.rightRoom = true;
        else
            creep.memory.rightRoom = false;

        if (!creep.memory.rightRoom && !creep.memory.twerking) //needs to go to new room
            newRoom.run(creep, room);
        else {
            if (creep.memory.twerking) {
                returnGold.run(creep, return_loc);

                if (creep.carry.energy == 0)
                    {
                        creep.memory.twerking = false; 
                    }
            } else {
                getGold.run(creep);
            }
        }

    }};
