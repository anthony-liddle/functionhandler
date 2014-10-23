(function() {
  'use strict';
  var FunctionHandler, root;

  FunctionHandler = (function() {
    function FunctionHandler() {
      var element = window.document;

      var functionElements = element.querySelectorAll('[data-function]');

      this.addEventHandlers(functionElements);
    }

    FunctionHandler.prototype.addEventHandlers = function(elements) {
      for (var i = 0, len = elements.length; i < len; i++) {
        var el = elements[i];
        var funcName = el.getAttribute('data-function');
        var interaction = (el.getAttribute('data-action')) ? el.getAttribute('data-action') : 'click';

        if (!window[funcName]) {
          console.warn('Function is missing for: %o', el);
          return;
        }

        if (el.addEventListener) {
          el.addEventListener(interaction, window[funcName], false);
        }
        else {
          el.attachEvent('on'+interaction, function() {
            window[funcName].call(el);
          });
        }
      }
    };

    return FunctionHandler;

  })();

  root = (typeof exports !== 'undefined' && exports !== null) ? exports : window;

  root.FunctionHandler = FunctionHandler;

  new FunctionHandler();

}).call(this);
