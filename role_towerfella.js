var getGold = require('get_gold');
var returnGold = require('return_gold');

module.exports = {
    run: function(creep)
    {
        if (creep.memory.twerking)
            {
                var return_loc = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: (s) => (s.structureType == STRUCTURE_TOWER) && s.energy < s.energyCapacity
                }, "astar");

                returnGold.run(creep, return_loc);
            } else 
            {
                getGold.run(creep);
            }
    }
};