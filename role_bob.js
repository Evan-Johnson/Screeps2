var getGold = require('get_gold');
var buildThis = require('build_func');
var returnGold = require('return_gold');

module.exports = {
    run: function (creep)
    {
        /*
        var return_loc2 = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: (s) => (s.structureType == STRUCTURE_TOWER) && s.energy < s.energyCapacity
        }, "astar");
        */

        //console.log("hey");
        if (creep.memory.twerking)
        {
            var return_loc1 = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
            var return_loc3 = creep.room.controller;
            if (return_loc1 != null)
                buildThis.run(creep, return_loc1);
            else
                returnGold.run(creep, return_loc3);
        } else 
        {
            //console.log("hi");
            getGold.run(creep);
        }
    }
};