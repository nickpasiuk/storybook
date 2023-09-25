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
/******/ 	return __webpack_require__(__webpack_require__.s = "./components/02-molecules/tabs/tabs.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/02-molecules/tabs/tabs.js":
/*!**********************************************!*\
  !*** ./components/02-molecules/tabs/tabs.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Drupal.behaviors.tabs = {
  attach(context) {
    const el = context.querySelectorAll('.m-tabs');
    const tabNavigationLinks = context.querySelectorAll('.m-tabs__link');
    const tabContentContainers = context.querySelectorAll('.m-tabs__tab');
    let activeIndex = 0;

    /**
     * goToTab
     *
     * @description Goes to a specific tab based on index. Returns nothing.
     * @param {number} index The index of the tab to go to
     */
    function goToTab(index) {
      if (index !== activeIndex && index >= 0 && index <= tabNavigationLinks.length) {
        tabNavigationLinks[Number(activeIndex)].classList.remove('is-active');
        tabNavigationLinks[Number(index)].classList.add('is-active');
        tabContentContainers[Number(activeIndex)].classList.remove('is-active');
        tabContentContainers[Number(index)].classList.add('is-active');
        activeIndex = index;
      }
    }

    /**
     * handleClick
     *
     * @description Handles click event listeners on each of the links in the
     *   tab navigation. Returns nothing.
     * @param {HTMLElement} link The link to listen for events on
     * @param {number} index The index of that link
     */
    function handleClick(link, index) {
      link.addEventListener('click', e => {
        e.preventDefault();
        goToTab(index);
      });
    }

    /**
     * init
     *
     * @description Initializes the component by removing the no-js class from
     *   the component, and attaching event listeners to each of the nav items.
     *   Returns nothing.
     */
    for (let e = 0; e < el.length; e += 1) {
      el[Number(e)].classList.remove('no-js');
    }
    for (let i = 0; i < tabNavigationLinks.length; i += 1) {
      const link = tabNavigationLinks[Number(i)];
      handleClick(link, i);
    }
  }
};

/***/ })

/******/ });
//# sourceMappingURL=tabs.js.map