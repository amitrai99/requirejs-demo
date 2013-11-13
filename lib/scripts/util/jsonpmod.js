/**
 * JSONP callback parameter is called "callback", 
 * so "callback=define" tells the API to wrap the 
 * JSON response in a "define()" wrapper
 */
require(["http://foo.com/api/bar.json?callback=define"],
    function (data) {
        //The data object will be the API response for the
        //JSONP data call.
        console.log(data);
    }
);