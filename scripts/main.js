/**
 * Require will pull in the requested modules defined using the 'define' API
 * @param  {Object} util The util object from helper directory
 */
require(["helper/util", "helper/util-file"], function(util, ufile) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
    
    var dataNode = '';
    dataNode += '<p>' + util.bar() + '</p>';
    dataNode += '<p>' + util.mar() + '</p>';
    dataNode += '<p>' + util.eat() + '</p>';

    dataNode += '<p>' + ufile.foo() + '</p>';

    document.getElementById('msg').innerHTML = dataNode;

    console.log(util);
    console.log(ufile);
});