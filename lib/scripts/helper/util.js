/**
 * Define a named module
 * @return {Object} object with the API exposed for this module
 */
define ('helper/util', function() { 
  var foo = 'fooooo123';

  function eat() {
    return 'Eating';
  }

  //something similar to the module pattern

  return {
    bar: function() {return foo;},
    mar: function() {return 'mar';},
    eat: eat
  };

});