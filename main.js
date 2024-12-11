var creepyControl = require('creepy_controller');
var towerControl = require('tower_controller');
//const profiler = require('screeps-profiler');

// This line monkey patches the global prototypes.
/*profiler.enable();
module.exports.loop = function() {
  profiler.wrap(function() {
    // Main.js logic should go here.
    creepyControl.run(Game.spawns.SPAWNY);
  });
}
*/

/*
output for 3 ticks using: Game.profiler.profile(3); in console
calls		time		avg		function
6		1.3		0.218		Creep.harvest
8		0.8		0.094		RoomPosition.findClosestByPath
2		0.6		0.289		Creep.transfer
2		0.5		0.262		Creep.upgradeController
2		0.5		0.254		Creep.build
16		0.1		0.005		RoomPosition.isEqualTo
22		0.0		0.002		RoomPosition.isNearTo
8		0.0		0.006		Room.find
4		0.0		0.005		RoomPosition.inRangeTo
0		0.0		NaN		(tick)
Avg: 8.95	Total: 26.86	Ticks: 3
*/

module.exports.loop = function () 
{
    //run creep manager
    creepyControl.run(Game.spawns.SPAWNY);
    
    /*
    var tower_structure = Game.spawns.SPAWNY.room.find(FIND_STRUCTURES, {
       filter: (structure) => {
           return (structure.structureType == STRUCTURE_TOWER)
       } 
    });
    */
};
