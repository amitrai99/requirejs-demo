/**
 * Define a named module called "util/engine"
 * Note that this module has no dependencies.
 * Avoid this format because it makes the code less portable.
 * The module name is tied to the file name and directory.
 * If we move the file to another location it will Require will not be able to load it.
 * @return {Object} object with the API exposed for this module
 */
define ('util/engine', function() {
  console.log('init util/engine');

  function cpuInit() {
    console.log('Init CPU');
  }

  //something similar to the module pattern
  return {
    name: 'unknown',
    start: function(name) {
      cpuInit();
      return ' Starting engine ';
    },
    stop: function(name) {
      return ' Stopping engine ';
    }
  };

});
