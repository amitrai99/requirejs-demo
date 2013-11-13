/**
 * Define an anonymous module for gearbox
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