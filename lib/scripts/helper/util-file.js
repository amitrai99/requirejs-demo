/**
 * Define an anonymous module
 * @return {Object} object with the API exposed for this module
 */
define(function () {
  console.log('inside util-file.js');

  return {
    foo: function() {return 'util-file';}
  };
});