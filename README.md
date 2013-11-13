Requirejs demo
==============

AMD and requirejs sample.

As of now (2013) JavaScript does not allow us to define and create modules natively using any ECMAScript API.
[AMD] (https://github.com/amdjs/amdjs-api/wiki/AMD) (Asynchronous Module Definition) was created to provide a standard API 
for defining and loading JS modules asynchronously. It is more suited for browser based environment.

RequireJS implements the AMD API.

### File loading

* It loads all code relative to the ```baseURL``` which can be configured using the "data-main" attribute or via the require.config option.

* We can also specify the ```paths``` attribute which will set the path of the module relative to baseUrl or an absolute location if it starts with a ```/``` or with a protocol like http.

__Note:__ If a module ID has any of the following, then it will be treated as a regular URL, relative to the document.

* Ends in ".js".
* Starts with a "/".
* Contains an URL protocol, like "http:" or "https:".


Example using the data-main attribute:

```html
<script data-main="scripts/main" src="scripts/require.js"></script>
```

Example using the config object:

```js
<script>
  require.config({
    baseUrl: "/another/path",
    paths: {
        "foo": "some/v1.0", //uses baseUrl and becomes "/another/path/some/v1.0"
        "bar": "/absolute/bar", //direcly calls /absolute/bar
        "a": "a.js" //directly calls a.js in the same URL as the document
    },
    waitSeconds: 15
  });
</script>
```
### Important tips

* Create only one module per file. Require will use the file path lookup to find the correct file.


## References

* [RequireJS API] (http://requirejs.org/docs/api.html)
* [RequireJS] (http://requirejs.org/docs/api.html#data-main)
* [AMD] (https://github.com/amdjs/amdjs-api/wiki/AMD)
