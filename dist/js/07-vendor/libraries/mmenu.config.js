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
/******/ 	return __webpack_require__(__webpack_require__.s = "./components/07-vendor/libraries/mmenu.config.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/07-vendor/libraries/mmenu.config.js":
/*!********************************************************!*\
  !*** ./components/07-vendor/libraries/mmenu.config.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($, Drupal) {
  'use strict';

  // Configuration that should only be ran once globally.
  Drupal.behaviors.munkMmenuConfiguration = {
    attach: function attach(context, settings) {
      $('body').each(function () {
        // var $header = $('#menu-mobile-header-content');
        // var header = $header.html();
        // var $closeIcon = '<svg class="a-button--icon__icon" aria-hidden="true"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/themes/cnib/dist/icons.svg#cross"></use></svg>';

        // $header.remove();

        // Mobile Menu - MMENU
        var $mobileMenu = $('#menu-mobile');
        if ($mobileMenu.length > 0) {
          var menu = new Mmenu("#menu-mobile", {
            extensions: ["position-right", "border-none", "fullscreen"],
            navbar: {
              add: false
            },
            navbars: [{
              'position': 'top',
              'content': '<div class="m-menu-mobile__header"><div class="m-menu-mobile__close"><button data-mobile-menu-close class="m-menu-mobile__btn-close"><i><svg class="a-button--icon__icon" aria-hidden="true"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/themes/cnib/dist/icons.svg#cross"></use></svg></i><span class="u-visually--hidden">Close Menu</span></button></div></div>'
            }],
            slidingSubmenus: true,
            keyboardNavigation: {
              enable: true
            }
          });
          const api = menu.API;
          $('[data-mobile-menu-close]').click(function (e) {
            api.close();
            $('#toggle-icon').focus();
          });

          // Open the active mmenu panel.
          // Find active menu item in secondary menu items and below.
          var $activeMenuItem = $('a.is-active', $mobileMenu).last();
          // If there is at least a level 2 active menu item then open the mmenu
          // panel to that level.
          if ($activeMenuItem.length > 0) {
            var activePanelId = $activeMenuItem.parents('.mm-panel').attr('id');
            const activePanel = document.querySelector('#' + activePanelId);
            api.openPanel(activePanel);
          }

          // Add labels into the tab start and end buttons that mmmenu uses
          // to keep a user tabbing through the menu as if gives an a11y
          // error on wave. Screen readers will not read this text as it has
          // the properties of aria-hidden=true and role=presentation.
          // https://github.com/FrDH/mmenu-js/issues/642
          $('button.mm-tabstart').text('Menu start tab');
          $('button.mm-tabend').text('Menu end tab');

          // On resize close the mmenu if the screen is larger then 899px.
          $(window).on("resize", function () {
            if (window.matchMedia("(min-width: 900px)").matches) {
              api.close();
            }
          });
          $('#toggle-icon').click(function (e) {
            $('[data-mobile-menu-close]').focus();
          });
        }
      });
    }
  };
})(jQuery, Drupal);

/***/ })

/******/ });
//# sourceMappingURL=mmenu.config.js.map