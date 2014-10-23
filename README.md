# FunctionHandler.js

This is a simple Function Handler that will help novice users add event handlers with minimal effort.

This will also keep people from using dreaded inline onclick events.

Simply add a `data-function="..."` to your HTML element, and create a javascript function with the same name. 

You're good to go!

## Install

Include the minified source javascript:

+ [functionhandler.min.css](dist/functionhandler.min.js)

## Initialize

Simply include the link to the functionhandler script at the very bottom of your HTML file.

By default, the handler is implemented through a click event.

``` html
<div data-function="defaultFunc">Default Use Case</div>
```

If you want to call your custom function with a different event, simply declare it with data-action:

``` html
<div data-function="myFunction" data-action="mouseover">Call on mouseover</div>
```

## License

FunctionHandler.js is released under the [MIT license](http://opensource.org/licenses/MIT).

* * *

Copyright :copyright: 2014 Anthony Law Liddle
