/**
 * Require will pull in the requested modules defined using the 'define' API
 * @param  {Object} engine The engine object from helper directory
 * @param  {Object} gearbox The gearbox object from helper directory
 */
define('Car', ["util/engine", "util/gearbox", 'util/manufacturer'], function(engine, gearbox, manufacturer) {

  function Car() {};

  Car.prototype.setName =  function(name) {
    this.name = name;
  };

  Car.prototype.setManufacturer =  function(name) {
    if(manufacturer.names.indexOf(name) !== -1) {
      this.manufacturer = name;
    } else {
      throw new Error('Not a valid manufacturer');
    }
  };

  Car.prototype.start = function() {
    return this.name + engine.start(this.name);
  };

  Car.prototype.drive = function() {
    return gearbox.engage();
  };

  Car.prototype.gearUp = function() {
    return gearbox.changeGear(1);
  };

  Car.prototype.gearDown = function() {
    return gearbox.changeGear(-1);
  };

  Car.prototype.stop = function() {
    return this.name + engine.stop();
  };

  return new Car();

});