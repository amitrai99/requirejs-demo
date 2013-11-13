/**
 * Require will pull in the requested modules defined using the 'define' API
 * @param  {Object} engine The engine object from helper directory
 * @param  {Object} gearbox The gearbox object from helper directory
 */
define('Car', ["util/engine", "util/gearbox"], function(engine, gearbox) {

  function Car() {};

  Car.prototype.setName =  function(name) {
    this.name = name;
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