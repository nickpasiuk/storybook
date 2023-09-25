/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./components/_patterns/02-molecules/readmore/readmore.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/_patterns/02-molecules/readmore/readmore.js":
/*!****************************************************************!*\
  !*** ./components/_patterns/02-molecules/readmore/readmore.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

;
(function ($, window, document, undefined) {
  "use strict";

  var pluginName = 'readmore';

  // Default settings.
  var defaults = {
    collapsedHeight: 300,
    // The height of the readmore box in pixels.
    offsetHeight: 64,
    // the offset amount to avoid collpasing a block that is only slightly bigger then it's height.
    moreText: 'Read more'
  };
  var uniqueIdCounter = 0;
  function Plugin(element, options) {
    this.$element = $(element);
    this.settings = $.extend({}, defaults, options, this.$element.data());
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }
  $.extend(Plugin.prototype, {
    // initialization of the script.
    init: function () {
      this.setBoxSize();

      // Add a resize event listner to determine if a readmore should be removed. Debounce on resize to wait for the user to finish.
      var _this = this;
      var resizeBox = this.debounce(function () {
        var $readmore = _this.$element;
        if ($readmore.attr('data-readmore-state') == 'hidden') {
          _this.reflow($readmore);
        }
      }, 100);
      window.addEventListener('resize', resizeBox);
    },
    // Sets the box size of the readmore container.
    setBoxSize: function () {
      var expandedHeight = this.$element.outerHeight();
      var setHeight = this.settings.collapsedHeight + this.settings.offsetHeight;
      var attrId = this.$element.attr('id');
      var id;
      if (typeof attrId === typeof undefined || attrId === false) {
        id = this.uniqueId();
      } else {
        id = attrId;
      }
      if (expandedHeight > setHeight) {
        this.$element.attr({
          'data-readmore': '',
          'data-readmore-state': 'hidden',
          'aria-expanded': false,
          'id': id,
          'data-collapsed-height': this.settings.collapsedHeight,
          'data-offset-height': this.settings.offsetHeight,
          'data-set-height': setHeight
        }).addClass('m-readmore').css({
          'height': setHeight + 'px',
          'overflow': 'hidden'
        });
        var btn = '<button class="m-readmore__btn" aria-controls="' + id + '" data-readmore-component="btn">' + this.settings.moreText + '</button>';
        this.$element.after($(btn).on('click', function (_this) {
          return function (e) {
            _this.toggle(this, e);
          };
        }(this)));
      }
    },
    // Generate a unique id for every readmore on the page.
    uniqueId: function () {
      var id = ++uniqueIdCounter;
      var r = Math.random().toString(36).substring(7);
      return String('readmore-' + id + '-' + r);
    },
    // Toggle the readmore box.
    toggle: function (trigger, e) {
      e.preventDefault();
      var $btn = $(trigger);
      var id = $btn.attr('aria-controls');
      var $readmore = $('#' + id);
      this.expand($readmore, $btn);
    },
    // Debounce founction.
    debounce: function (func, wait, immediate) {
      var timeout;
      return function () {
        var context = this,
          args = arguments;
        var later = function () {
          timeout = null;
          if (!immediate) {
            func.apply(context, args);
          }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
          func.apply(context, args);
        }
      };
    },
    // Expand the readmore box.
    expand: function ($element, $trigger) {
      $element.css({
        'height': '',
        'overflow': ''
      }).attr({
        'data-readmore-state': 'visible',
        'aria-expanded': true
      });
      $trigger.remove();
    },
    // Reflow after a change to determine if a readmore should still be applied.
    reflow: function ($element) {
      $element.css({
        'height': 'auto'
      });
      var expandedHeight = $element.outerHeight();
      var setHeight = $element.attr('data-set-height');
      $element.css({
        'height': setHeight + 'px'
      });
      if (expandedHeight <= setHeight) {
        this.expand($element, $element.next());
      }
    }
  });

  // A really lightweight plugin wrapper around the constructor,
  // preventing against multiple instantiations
  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new Plugin(this, options));
      }
    });
  };
})(jQuery, window, document);

/***/ })

/******/ });
//# sourceMappingURL=readmore.js.map