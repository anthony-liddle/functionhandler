(function() {
  'use strict';
  var FunctionHandler, root;

  FunctionHandler = (function() {
    function FunctionHandler() {
      var element = window.document;

      element.addEventListener('DOMNodeRemoved', this.elementRemoved.bind(this), false);
      element.addEventListener('DOMNodeInserted', this.elementAdded.bind(this), false);

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

        el.addEventListener(interaction, window[funcName], false);
      }
    };

    FunctionHandler.prototype.elementRemoved = function(event) {
      var el = event.target;
      if (!this.checkDataFunction(el)) { return; }
      var funcName = el.getAttribute('data-function');
      var interaction = (el.getAttribute('data-action')) ? el.getAttribute('data-action') : 'click';
      el.removeEventListener(interaction, window[funcName], false);
    };

    FunctionHandler.prototype.elementAdded = function(event) {
      var el = event.target;
      if (!this.checkDataFunction(el)) { return; }
      this.addEventHandlers([el]);
    };

    FunctionHandler.prototype.checkDataFunction = function(el) {
      if (el.hasAttribute('data-function')) {
        return true;
      }
    };

    return FunctionHandler;

  })();

  root = (typeof exports !== 'undefined' && exports !== null) ? exports : window;

  root.FunctionHandler = FunctionHandler;

  new FunctionHandler();

}).call(this);
