# FunctionHandler.js

This is a simple Function Handler that will help novice users add event handlers with minimal effort.

This will also keep people from using dreaded inline onclick events.

Simply add a `data-function="..."` to your HTML element, and create a javascript function with the same name.

You're good to go!

## Install

Include the minified source javascript:

+ [functionhandler.min.js](dist/functionhandler.min.js)

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

The functionhandler will also watch for elements being removed and added. If a node is removed that had a `data-function` on it, the event listner will be removed. On the other side, if a element is added that has a data-function tied to it, it will then add the function.

## License

FunctionHandler.js is released under the [MIT license](http://opensource.org/licenses/MIT).

* * *

Copyright :copyright: 2014 Anthony Law Liddle

## ToDos

+ Check children of elements being added or removed so see if a function needs to be handled.
