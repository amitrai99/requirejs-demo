/**
 * A module with no dependencies for gearbox.
 * Note we have ommited the name of the module which is a 
 * good practice as it makes the code more portable.
 * @return {Object} object with the API exposed for this module
 */
define(function () {
  console.log('init gearbox');

  return {
    gearNum: 1,
    engage: function() {return 'Gear engage ' + this.gearNum;},
    changeGear: function(n) {
      this.gearNum += n;
      return 'Gear changed ' + this.gearNum;
    }
  };
});