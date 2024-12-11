var creepyControl = require('creepy_controller');
var towerControl = require('tower_controller');
//const profiler = require('screeps-profiler');

// This line monkey patches the global prototypes.
/*
profiler.enable();
module.exports.loop = function() {
  profiler.wrap(function() {
    // Main.js logic should go here.
    creepyControl.run(Game.spawns.SPAWNY);
  });
}
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
