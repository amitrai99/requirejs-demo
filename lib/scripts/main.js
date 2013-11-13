/**
 * Require will pull in the requested modules defined using the 'define' API
 * @param  {Object} Car The Car object defined in car.js
 */
require(['Car', 'jquery'], function(car, $) {

  car.setName('Civic');
  car.setManufacturer('Honda');
  var stTxt = car.start();
  var gearTxt = car.drive();
  var gearUpTxt = car.gearUp();
  var gearDnTxt = car.gearDown();
  var stopTxt = car.stop();

  $('#msg').append('<li>' + stTxt + '</li>');
  $('#msg').append('<li>' + gearTxt + '</li>');
  $('#msg').append('<li>' + gearUpTxt + '</li>');
  $('#msg').append('<li>' + gearDnTxt + '</li>');
  $('#msg').append('<li>' + stopTxt + '</li>');
});