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
/******/ 	return __webpack_require__(__webpack_require__.s = "./components/07-vendor/libraries/foundation.config.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/07-vendor/libraries/foundation.config.js":
/*!*************************************************************!*\
  !*** ./components/07-vendor/libraries/foundation.config.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  'use strict';

  // Configuration that should only be ran once globally.
  var init = function () {
    $(document).foundation();

    /**
     * Mega Menu
     */
    // On key enter of the top level menu items open the menu panel. On second 
    // key enter follow the menu link.
    $('a[data-toggle]').on('keydown', function (e) {
      var $topBtn = $(this);
      switch (Foundation.Keyboard.parseKey(e)) {
        case 'ENTER':
          if ($topBtn.attr('aria-expanded') == 'true') {
            e.preventDefault();
            window.location.href = this.href;
          } else {
            e.preventDefault();
            var id = $topBtn.attr('data-toggle');
            $('#' + id).foundation('open');
          }
          break;
      }
    });

    // Remove extra aria and classes added to sub menus as we are not hiding
    // them and foundation assumes we are.
    $('[data-main-menu-component=second-level-list]').children().removeClass('is-dropdown-submenu-parent opens-right').removeAttr('role aria-haspopup aria-label').children().removeAttr('role');
    $('[data-main-menu-component=third-level-list]').removeClass('submenu is-dropdown-submenu vertical').removeAttr('data-submenu').children().removeClass('is-submenu-item is-dropdown-submenu-item').removeAttr('role').children().removeAttr('role');
  };
  try {
    if (Drupal && Drupal.behaviors) {
      Drupal.behaviors.munkFoundationConfig = {
        attach: function attach(context, settings) {
          init(settings);
        }
      };
    } else {
      init();
    }
  } catch (e) {
    init();
  }
})(jQuery);

/***/ })

/******/ });
//# sourceMappingURL=foundation.config.js.map