/**
 * Define a named module called "util/engine"
 * Note that this module has no dependencies.
 * @return {Object} object with the API exposed for this module
 */
define ('util/engine', function() {
  console.log('init util/engine');
  //something similar to the module pattern
  return {
    name: 'unknown',
    start: function(name) {
      return ' Starting engine ';
    },
    stop: function(name) {
      return ' Stopping engine ';
    }
  };

});