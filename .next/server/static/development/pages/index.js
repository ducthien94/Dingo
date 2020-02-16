module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ducthien/Desktop/Dingo-ProjectReact/components/Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Footer = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("footer", {
  className: "footer-area",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("div", {
  className: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("div", {
  className: "col-xl-3 col-sm-6 col-md-3 col-lg-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("div", {
  className: "single-footer-widget footer_1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("h4", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, "About Us"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "Heaven fruitful doesn't over for these theheaven fruitful doe over days appear creeping seasons sad behold beari ath of it fly signs bearing be one blessed after."))), __jsx("div", {
  className: "col-xl-3 col-sm-6 col-md-2 col-lg-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("div", {
  className: "single-footer-widget footer_2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx("h4", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, "Important Link"), __jsx("div", {
  className: "contact_info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, __jsx("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, "WHMCS-bridge")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, " Search Domain")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, "My Account")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, "Shopping Cart")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, " Our Shop")))))), __jsx("div", {
  className: "col-xl-3 col-sm-6 col-md-3 col-lg-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, __jsx("div", {
  className: "single-footer-widget footer_2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}, __jsx("h4", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}, "Contact us"), __jsx("div", {
  className: "contact_info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, " Address :"), "Hath of it fly signs bear be one blessed after", " "), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, " Phone :"), " +2 36 265 (8060)"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}, " Email : "), "info@colorlib.com", " ")))), __jsx("div", {
  className: "col-xl-3 col-sm-6 col-md-4 col-lg-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, __jsx("div", {
  className: "single-footer-widget footer_3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}, __jsx("h4", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}, "Newsletter"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  },
  __self: undefined
}, "Heaven fruitful doesn't over lesser in days. Appear creeping seas"), __jsx("form", {
  action: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}, __jsx("div", {
  className: "form-group",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65
  },
  __self: undefined
}, __jsx("div", {
  className: "input-group mb-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66
  },
  __self: undefined
}, __jsx("input", {
  type: "text",
  className: "form-control",
  placeholder: "Email Address",
  onfocus: "this.placeholder = ''",
  onblur: "this.placeholder = 'Email Address'",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67
  },
  __self: undefined
}), __jsx("div", {
  className: "input-group-append",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74
  },
  __self: undefined
}, __jsx("button", {
  className: "btn",
  type: "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75
  },
  __self: undefined
}, __jsx("i", {
  className: "fas fa-paper-plane",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76
  },
  __self: undefined
}))))))))), __jsx("div", {
  className: "copyright_part_text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85
  },
  __self: undefined
}, __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86
  },
  __self: undefined
}, __jsx("div", {
  className: "col-lg-8",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87
  },
  __self: undefined
}, __jsx("p", {
  className: "footer-text m-0",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88
  },
  __self: undefined
}, "Copyright \xA9 All rights reserved | This template is made with", " ", __jsx("i", {
  className: "ti-heart",
  "aria-hidden": "true",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91
  },
  __self: undefined
}), " by", " ", __jsx("a", {
  href: "https://colorlib.com",
  target: "_blank",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92
  },
  __self: undefined
}, "Colorlib"))), __jsx("div", {
  className: "col-lg-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98
  },
  __self: undefined
}, __jsx("div", {
  className: "copyright_social_icon text-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100
  },
  __self: undefined
}, __jsx("i", {
  className: "fab fa-facebook-f",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101
  },
  __self: undefined
})), __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103
  },
  __self: undefined
}, __jsx("i", {
  className: "fab fa-twitter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104
  },
  __self: undefined
})), __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106
  },
  __self: undefined
}, __jsx("i", {
  className: "ti-dribbble",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107
  },
  __self: undefined
})), __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 109
  },
  __self: undefined
}, __jsx("i", {
  className: "fab fa-behance",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 110
  },
  __self: undefined
})))))))));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ducthien/Desktop/Dingo-ProjectReact/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const routerPath = [{
  pathName: "Home",
  url: "/"
}, {
  pathName: "About",
  url: "/about"
}, {
  pathName: "Menu",
  url: "/menu"
}, {
  pathName: "Chefs",
  url: "/chefs"
}, {
  pathName: "Blog",
  url: "/blog"
}, {
  pathName: "Contact",
  url: "/contact"
}];

const Header = () => __jsx("header", {
  className: "main_menu home_menu",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx("div", {
  className: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx("div", {
  className: "row align-items-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("div", {
  className: "col-lg-12",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx("nav", {
  className: "navbar navbar-expand-lg navbar-light",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx("a", {
  className: "navbar-brand",
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, " ", __jsx("img", {
  src: "/img/logo.png",
  alt: "logo",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}), " "), __jsx("button", {
  className: "navbar-toggler",
  type: "button",
  "data-toggle": "collapse",
  "data-target": "#navbarSupportedContent",
  "aria-controls": "navbarSupportedContent",
  "aria-expanded": "false",
  "aria-label": "Toggle navigation",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx("span", {
  className: "navbar-toggler-icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
})), __jsx("div", {
  className: "collapse navbar-collapse main-menu-item justify-content-end",
  id: "navbarSupportedContent",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, __jsx("ul", {
  className: "navbar-nav",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, routerPath.map((item, index) => {
  return __jsx("li", {
    key: index,
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: item.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("a", {
    className: Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])().pathname === item.url ? "active-menu" : null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, item.pathName)));
}))), __jsx("div", {
  className: "menu_btn",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  className: "btn_1 d-none d-sm-block",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}, "book a table")))))));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
var _jsxFileName = "/Users/ducthien/Desktop/Dingo-ProjectReact/components/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Layout = props => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("meta", {
  charSet: "utf-8",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1, shrink-to-fit=no",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), __jsx("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, "Dingo - ", props.title), __jsx("link", {
  rel: "icon",
  href: "img/favicon.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "css/bootstrap.min.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "css/animate.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "css/owl.carousel.min.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "css/themify-icons.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "css/flaticon.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "css/magnific-popup.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "css/slick.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "css/gijgo.min.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "css/nice-select.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "css/all.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "css/style.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
})), __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}), props.children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = toRoute(!pathname || pathname === '/' ? '/index' : pathname);
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, Object.assign(Object.assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
var _jsxFileName = "/Users/ducthien/Desktop/Dingo-ProjectReact/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Index() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("section", {
    className: "banner_part",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "row align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "col-lg-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: "banner_text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: "banner_text_iner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Expensive but the best"), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Deliciousness jumping into the mouth"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Together creeping heaven upon third dominion be upon won't darkness rule land behold it created good saw after she'd Our set living. Signs midst dominion creepeth morning"), __jsx("div", {
    className: "banner_btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    className: "banner_btn_iner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "btn_2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Reservation ", __jsx("img", {
    src: "/img/icon/left_1.svg",
    alt: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }))), __jsx("a", {
    target: "_blank",
    href: "https://www.youtube.com/watch?v=_Up9g2iRkxE",
    className: "popup-youtube video_popup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("img", {
    src: "/img/icon/play.svg",
    alt: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), " ", "Watch our story")))))))), __jsx("section", {
    className: "exclusive_item_part blog_item_section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    className: "col-xl-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("div", {
    className: "section_tittle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Popular Dishes"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Our Exclusive Items")))), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-6 col-lg-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("div", {
    className: "single_blog_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("div", {
    className: "single_blog_img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("img", {
    src: "/img/food_item/food_item_1.png",
    alt: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })), __jsx("div", {
    className: "single_blog_text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Indian Burger"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Was brean shed moveth day yielding tree yielding day were female and", " "), __jsx("a", {
    href: "#",
    className: "btn_3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Read More ", __jsx("img", {
    src: "/img/icon/left_2.svg",
    alt: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }))))), __jsx("div", {
    className: "col-sm-6 col-lg-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("div", {
    className: "single_blog_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("div", {
    className: "single_blog_img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("img", {
    src: "/img/food_item/food_item_2.png",
    alt: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  })), __jsx("div", {
    className: "single_blog_text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Cremy Noodles"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Was brean shed moveth day yielding tree yielding day were female and", " "), __jsx("a", {
    href: "#",
    className: "btn_3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Read More ", __jsx("img", {
    src: "/img/icon/left_2.svg",
    alt: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }))))), __jsx("div", {
    className: "col-sm-6 col-lg-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("div", {
    className: "single_blog_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("div", {
    className: "single_blog_img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("img", {
    src: "/img/food_item/food_item_3.png",
    alt: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  })), __jsx("div", {
    className: "single_blog_text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Honey Meat"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Was brean shed moveth day yielding tree yielding day were female and", " "), __jsx("a", {
    href: "#",
    className: "btn_3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Read More ", __jsx("img", {
    src: "/img/icon/left_2.svg",
    alt: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }))))), __jsx("div", {
    className: "col-sm-6 col-lg-4 d-none d-sm-block d-lg-none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("div", {
    className: "single_blog_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx("div", {
    className: "single_blog_img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx("img", {
    src: "/img/food_item/food_item_1.png",
    alt: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  })), __jsx("div", {
    className: "single_blog_text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "Cremy Noodles"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Was brean shed moveth day yielding tree yielding day were female and", " "), __jsx("a", {
    href: "#",
    className: "btn_3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "Read More ", __jsx("img", {
    src: "/img/icon/left_2.svg",
    alt: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  })))))))), __jsx("section", {
    className: "about_part",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx("div", {
    className: "row align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-4 col-lg-5 offset-lg-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx("div", {
    className: "about_img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx("img", {
    src: "/img/about.png",
    alt: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }))), __jsx("div", {
    className: "col-sm-8 col-lg-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx("div", {
    className: "about_text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "Our History"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "Where The Food\u2019s As Good As The Root Beer."), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "Satisfying people hunger for simple pleasures"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "May over was. Be signs two. Spirit. Brought said dry own firmament lesser best sixth deep abundantly bearing, him, gathering you blessed bearing he our position best ticket in month hole deep", " "), __jsx("a", {
    href: "#",
    className: "btn_3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "Read More ", __jsx("img", {
    src: "/img/icon/left_2.svg",
    alt: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }))))))), __jsx("section", {
    className: "intro_video_bg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, __jsx("div", {
    className: "col-lg-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, __jsx("div", {
    className: "intro_video_iner text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, "Expect The Best"), __jsx("div", {
    className: "intro_video_icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx("a", {
    target: "_blank",
    id: "play-video_1",
    className: "video-play-button popup-youtube",
    href: "https://www.youtube.com/watch?v=A9DLJKU0YGw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, __jsx("span", {
    className: "ti-control-play",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  })))))))), __jsx("section", {
    className: "food_menu gray_bg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, __jsx("div", {
    className: "row justify-content-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, __jsx("div", {
    className: "col-lg-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, __jsx("div", {
    className: "section_tittle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, "Popular Menu"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, "Delicious Food Menu"))), __jsx("div", {
    className: "col-lg-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, __jsx("div", {
    className: "nav nav-tabs food_menu_nav",
    id: "myTab",
    role: "tablist",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, __jsx("a", {
    className: "active",
    id: "Special-tab",
    "data-toggle": "tab",
    href: "#Special",
    role: "tab",
    "aria-controls": "Special",
    "aria-selected": "false",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, "Special ", __jsx("img", {
    src: "/img/icon/play.svg",
    alt: "play",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  })), __jsx("a", {
    id: "Breakfast-tab",
    "data-toggle": "tab",
    href: "#Breakfast",
    role: "tab",
    "aria-controls": "Breakfast",
    "aria-selected": "false",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, "Breakfast ", __jsx("img", {
    src: "/img/icon/play.svg",
    alt: "play",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  })), __jsx("a", {
    id: "Launch-tab",
    "data-toggle": "tab",
    href: "#Launch",
    role: "tab",
    "aria-controls": "Launch",
    "aria-selected": "false",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, "Launch ", __jsx("img", {
    src: "/img/icon/play.svg",
    alt: "play",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  })), __jsx("a", {
    id: "Dinner-tab",
    "data-toggle": "tab",
    href: "#Dinner",
    role: "tab",
    "aria-controls": "Dinner",
    "aria-selected": "false",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, "Dinner ", __jsx("img", {
    src: "/img/icon/play.svg",
    alt: "play",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }), " "), __jsx("a", {
    id: "Sneaks-tab",
    "data-toggle": "tab",
    href: "#Sneaks",
    role: "tab",
    "aria-controls": "Sneaks",
    "aria-selected": "false",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, "Sneaks ", __jsx("img", {
    src: "/img/icon/play.svg",
    alt: "play",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  })))), __jsx("div", {
    className: "col-lg-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, __jsx("div", {
    className: "tab-content",
    id: "myTabContent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, __jsx("div", {
    className: "tab-pane fade show active single-member",
    id: "Special",
    role: "tabpanel",
    "aria-labelledby": "Special-tab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-6 col-lg-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }, __jsx("div", {
    className: "single_food_item media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }, __jsx("img", {
    src: "/img/food_menu/single_food_1.png",
    className: "mr-3",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }), __jsx("div", {
    className: "media-body align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }, "Pork Sandwich"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, "They're wherein heaven seed hath nothing"), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }, "$40.00"))), __jsx("div", {
    className: "single_food_item media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }, __jsx("img", {
    src: "/img/food_menu/single_food_2.png",
    className: "mr-3",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: this
  }), __jsx("div", {
    className: "media-body align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }, "Roasted Marrow"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }, "They're wherein heaven seed hath nothing"), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }, "$40.00"))), __jsx("div", {
    className: "single_food_item media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }, __jsx("img", {
    src: "/img/food_menu/single_food_3.png",
    className: "mr-3",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }), __jsx("div", {
    className: "media-body align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }, "Summer Cooking"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }, "They're wherein heaven seed hath nothing"), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }, "$40.00")))), __jsx("div", {
    className: "col-sm-6 col-lg-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }, __jsx("div", {
    className: "single_food_item media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  }, __jsx("img", {
    src: "/img/food_menu/single_food_4.png",
    className: "mr-3",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: this
  }), __jsx("div", {
    className: "media-body align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    },
    __self: this
  }, "Easter Delight"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }, "They're wherein heaven seed hath nothing"), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  }, "$40.00"))), __jsx("div", {
    className: "single_food_item media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  }, __jsx("img", {
    src: "/img/food_menu/single_food_5.png",
    className: "mr-3",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  }), __jsx("div", {
    className: "media-body align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    },
    __self: this
  }, "Tiener Schnitze"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  }, "They're wherein heaven seed hath nothing"), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: this
  }, "$40.00"))), __jsx("div", {
    className: "single_food_item media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }, __jsx("img", {
    src: "/img/food_menu/single_food_6.png",
    className: "mr-3",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  }), __jsx("div", {
    className: "media-body align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    },
    __self: this
  }, "Chicken Roast"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  }, "They're wherein heaven seed hath nothing"), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  }, "$40.00")))))), __jsx("div", {
    className: "tab-pane fade single-member",
    id: "Breakfast",
    role: "tabpanel",
    "aria-labelledby": "Breakfast-tab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-6 col-lg-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346
    },
    __self: this
  }, __jsx("div", {
    className: "single_food_item media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    },
    __self: this
  }, __jsx("img", {
    src: "/img/food_menu/single_food_4.png",
    className: "mr-3",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348
    },
    __self: this
  }), __jsx("div", {
    className: "media-body align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354
    },
    __self: this
  }, "Easter Delight"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355
    },
    __self: this
  }, "They're wherein heaven seed hath nothing"), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356
    },
    __self: this
  }, "$40.00"))), __jsx("div", {
    className: "single_food_item media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359
    },
    __self: this
  }, __jsx("img", {
    src: "/img/food_menu/single_food_5.png",
    className: "mr-3",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360
    },
    __self: this
  }), __jsx("div", {
    className: "media-body align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366
    },
    __self: this
  }, "Tiener Schnitze"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367
    },
    __self: this
  }, "They're wherein heaven seed hath nothing"), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368
    },
    __self: this
  }, "$40.00"))), __jsx("div", {
    className: "single_food_item media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371
    },
    __self: this
  }, __jsx("img", {
    src: "/img/food_menu/single_food_6.png",
    className: "mr-3",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372
    },
    __self: this
  }), __jsx("div", {
    className: "media-body align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378
    },
    __self: this
  }, "Chicken Roast"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379
    },
    __self: this
  }, "They're wherein heaven seed hath nothing"), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380
    },
    __self: this
  }, "$40.00")))), __jsx("div", {
    className: "col-sm-6 col-lg-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384
    },
    __self: this
  }, __jsx("div", {
    className: "single_food_item media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385
    },
    __self: this
  }, __jsx("img", {
    src: "/img/food_menu/single_food_1.png",
    className: "mr-3",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386
    },
    __self: this
  }), __jsx("div", {
    className: "media-body align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392
    },
    __self: this
  }, "Pork Sandwich"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393
    },
    __self: this
  }, "They're wherein heaven seed hath nothing"), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394
    },
    __self: this
  }, "$40.00"))), __jsx("div", {
    className: "single_food_item media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397
    },
    __self: this
  }, __jsx("img", {
    src: "/img/food_menu/single_food_2.png",
    className: "mr-3",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398
    },
    __self: this
  }), __jsx("div", {
    className: "media-body align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404
    },
    __self: this
  }, "Roasted Marrow"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405
    },
    __self: this
  }, "They're wherein heaven seed hath nothing"), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406
    },
    __self: this
  }, "$40.00"))), __jsx("div", {
    className: "single_food_item media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409
    },
    __self: this
  }, __jsx("img", {
    src: "/img/food_menu/single_food_3.png",
    className: "mr-3",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410
    },
    __self: this
  }), __jsx("div", {
    className: "media-body align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416
    },
    __self: this
  }, "Summer Cooking"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417
    },
    __self: this
  }, "They're wherein heaven seed hath nothing"), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418
    },
    __self: this
  }, "$40.00")))))), __jsx("div", {
    className: "tab-pane fade single-member",
    id: "Launch",
    role: "tabpanel",
    "aria-labelledby": "Launch-tab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-6 col-lg-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431
    },
    __self: this
  }, __jsx("div", {
    className: "single_food_item media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432
    },
    __self: this
  }, __jsx("img", {
    src: "/img/food_menu/single_food_1.png",
    className: "mr-3",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433
    },
    __self: this
  }), __jsx("div", {
    className: "media-body align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439
    },
    __self: this
  }, "Pork Sandwich"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440
    },
    __self: this
  }, "They're wherein heaven seed hath nothing"), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441
    },
    __self: this
  }, "$40.00"))), __jsx("div", {
    className: "single_food_item media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444
    },
    __self: this
  }, __jsx("img", {
    src: "/img/food_menu/single_food_2.png",
    className: "mr-3",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445
    },
    __self: this
  }), __jsx("div", {
    className: "media-body align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451
    },
    __self: this
  }, "Roasted Marrow"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452
    },
    __self: this
  }, "They're wherein heaven seed hath nothing"), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453
    },
    __self: this
  }, "$40.00"))), __jsx("div", {
    className: "single_food_item media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456
    },
    __self: this
  }, __jsx("img", {
    src: "/img/food_menu/single_food_3.png",
    className: "mr-3",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457
    },
    __self: this
  }), __jsx("div", {
    className: "media-body align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463
    },
    __self: this
  }, "Summer Cooking"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464
    },
    __self: this
  }, "They're wherein heaven seed hath nothing"), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465
    },
    __self: this
  }, "$40.00")))), __jsx("div", {
    className: "col-sm-6 col-lg-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469
    },
    __self: this
  }, __jsx("div", {
    className: "single_food_item media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470
    },
    __self: this
  }, __jsx("img", {
    src: "/img/food_menu/single_food_4.png",
    className: "mr-3",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471
    },
    __self: this
  }), __jsx("div", {
    className: "media-body align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477
    },
    __self: this
  }, "Easter Delight"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478
    },
    __self: this
  }, "They're wherein heaven seed hath nothing"), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479
    },
    __self: this
  }, "$40.00"))), __jsx("div", {
    className: "single_food_item media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482
    },
    __self: this
  }, __jsx("img", {
    src: "/img/food_menu/single_food_5.png",
    className: "mr-3",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483
    },
    __self: this
  }), __jsx("div", {
    className: "media-body align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489
    },
    __self: this
  }, "Tiener Schnitze"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490
    },
    __self: this
  }, "They're wherein heaven seed hath nothing"), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491
    },
    __self: this
  }, "$40.00"))), __jsx("div", {
    className: "single_food_item media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494
    },
    __self: this
  }, __jsx("img", {
    src: "/img/food_menu/single_food_6.png",
    className: "mr-3",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495
    },
    __self: this
  }), __jsx("div", {
    className: "media-body align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501
    },
    __self: this
  }, "Chicken Roast"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502
    },
    __self: this
  }, "They're wherein heaven seed hath nothing"), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503
    },
    __self: this
  }, "$40.00")))))), __jsx("div", {
    className: "tab-pane fade single-member",
    id: "Dinner",
    role: "tabpanel",
    "aria-labelledby": "Dinner-tab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-6 col-lg-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516
    },
    __self: this
  }, __jsx("div", {
    className: "single_food_item media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517
    },
    __self: this
  }, __jsx("img", {
    src: "/img/food_menu/single_food_4.png",
    className: "mr-3",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518
    },
    __self: this
  }), __jsx("div", {
    className: "media-body align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524
    },
    __self: this
  }, "Easter Delight"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525
    },
    __self: this
  }, "They're wherein heaven seed hath nothing"), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526
    },
    __self: this
  }, "$40.00"))), __jsx("div", {
    className: "single_food_item media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529
    },
    __self: this
  }, __jsx("img", {
    src: "/img/food_menu/single_food_5.png",
    className: "mr-3",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530
    },
    __self: this
  }), __jsx("div", {
    className: "media-body align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536
    },
    __self: this
  }, "Tiener Schnitze"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537
    },
    __self: this
  }, "They're wherein heaven seed hath nothing"), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538
    },
    __self: this
  }, "$40.00"))), __jsx("div", {
    className: "single_food_item media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541
    },
    __self: this
  }, __jsx("img", {
    src: "/img/food_menu/single_food_6.png",
    className: "mr-3",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542
    },
    __self: this
  }), __jsx("div", {
    className: "media-body align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548
    },
    __self: this
  }, "Chicken Roast"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549
    },
    __self: this
  }, "They're wherein heaven seed hath nothing"), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550
    },
    __self: this
  }, "$40.00")))), __jsx("div", {
    className: "col-sm-6 col-lg-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554
    },
    __self: this
  }, __jsx("div", {
    className: "single_food_item media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555
    },
    __self: this
  }, __jsx("img", {
    src: "/img/food_menu/single_food_1.png",
    className: "mr-3",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556
    },
    __self: this
  }), __jsx("div", {
    className: "media-body align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562
    },
    __self: this
  }, "Pork Sandwich"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563
    },
    __self: this
  }, "They're wherein heaven seed hath nothing"), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564
    },
    __self: this
  }, "$40.00"))), __jsx("div", {
    className: "single_food_item media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567
    },
    __self: this
  }, __jsx("img", {
    src: "/img/food_menu/single_food_2.png",
    className: "mr-3",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 568
    },
    __self: this
  }), __jsx("div", {
    className: "media-body align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 573
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574
    },
    __self: this
  }, "Roasted Marrow"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575
    },
    __self: this
  }, "They're wherein heaven seed hath nothing"), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576
    },
    __self: this
  }, "$40.00"))), __jsx("div", {
    className: "single_food_item media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 579
    },
    __self: this
  }, __jsx("img", {
    src: "/img/food_menu/single_food_3.png",
    className: "mr-3",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580
    },
    __self: this
  }), __jsx("div", {
    className: "media-body align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586
    },
    __self: this
  }, "Summer Cooking"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587
    },
    __self: this
  }, "They're wherein heaven seed hath nothing"), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588
    },
    __self: this
  }, "$40.00")))))), __jsx("div", {
    className: "tab-pane fade single-member",
    id: "Sneaks",
    role: "tabpanel",
    "aria-labelledby": "Sneaks-tab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 594
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 600
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-6 col-lg-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601
    },
    __self: this
  }, __jsx("div", {
    className: "single_food_item media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 602
    },
    __self: this
  }, __jsx("img", {
    src: "/img/food_menu/single_food_1.png",
    className: "mr-3",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 603
    },
    __self: this
  }), __jsx("div", {
    className: "media-body align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 608
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609
    },
    __self: this
  }, "Pork Sandwich"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 610
    },
    __self: this
  }, "They're wherein heaven seed hath nothing"), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 611
    },
    __self: this
  }, "$40.00"))), __jsx("div", {
    className: "single_food_item media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 614
    },
    __self: this
  }, __jsx("img", {
    src: "/img/food_menu/single_food_2.png",
    className: "mr-3",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 615
    },
    __self: this
  }), __jsx("div", {
    className: "media-body align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 620
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 621
    },
    __self: this
  }, "Roasted Marrow"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 622
    },
    __self: this
  }, "They're wherein heaven seed hath nothing"), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 623
    },
    __self: this
  }, "$40.00"))), __jsx("div", {
    className: "single_food_item media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 626
    },
    __self: this
  }, __jsx("img", {
    src: "/img/food_menu/single_food_3.png",
    className: "mr-3",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 627
    },
    __self: this
  }), __jsx("div", {
    className: "media-body align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 632
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 633
    },
    __self: this
  }, "Summer Cooking"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 634
    },
    __self: this
  }, "They're wherein heaven seed hath nothing"), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 635
    },
    __self: this
  }, "$40.00")))), __jsx("div", {
    className: "col-sm-6 col-lg-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 639
    },
    __self: this
  }, __jsx("div", {
    className: "single_food_item media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 640
    },
    __self: this
  }, __jsx("img", {
    src: "/img/food_menu/single_food_4.png",
    className: "mr-3",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 641
    },
    __self: this
  }), __jsx("div", {
    className: "media-body align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 646
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 647
    },
    __self: this
  }, "Easter Delight"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 648
    },
    __self: this
  }, "They're wherein heaven seed hath nothing"), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 649
    },
    __self: this
  }, "$40.00"))), __jsx("div", {
    className: "single_food_item media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 652
    },
    __self: this
  }, __jsx("img", {
    src: "/img/food_menu/single_food_5.png",
    className: "mr-3",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 653
    },
    __self: this
  }), __jsx("div", {
    className: "media-body align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 658
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 659
    },
    __self: this
  }, "Tiener Schnitze"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 660
    },
    __self: this
  }, "They're wherein heaven seed hath nothing"), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 661
    },
    __self: this
  }, "$40.00"))), __jsx("div", {
    className: "single_food_item media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 664
    },
    __self: this
  }, __jsx("img", {
    src: "/img/food_menu/single_food_6.png",
    className: "mr-3",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 665
    },
    __self: this
  }), __jsx("div", {
    className: "media-body align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 670
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671
    },
    __self: this
  }, "Chicken Roast"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 672
    },
    __self: this
  }, "They're wherein heaven seed hath nothing"), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673
    },
    __self: this
  }, "$40.00"))))))))))), __jsx("section", {
    className: "chefs_part blog_item_section section_padding",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 686
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 687
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 688
    },
    __self: this
  }, __jsx("div", {
    className: "col-xl-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 689
    },
    __self: this
  }, __jsx("div", {
    className: "section_tittle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 690
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 691
    },
    __self: this
  }, "Team Member"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 692
    },
    __self: this
  }, "Our Experience Chefs")))), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 696
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-6 col-lg-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 697
    },
    __self: this
  }, __jsx("div", {
    className: "single_blog_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 698
    },
    __self: this
  }, __jsx("div", {
    className: "single_blog_img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 699
    },
    __self: this
  }, __jsx("img", {
    src: "/img/team/chefs_1.png",
    alt: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 700
    },
    __self: this
  })), __jsx("div", {
    className: "single_blog_text text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 702
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 703
    },
    __self: this
  }, "Adam Billiard"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 704
    },
    __self: this
  }, "Chef Master"), __jsx("div", {
    className: "social_icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 705
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 706
    },
    __self: this
  }, " ", __jsx("i", {
    className: "ti-facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 708
    },
    __self: this
  }), " "), __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 710
    },
    __self: this
  }, " ", __jsx("i", {
    className: "ti-twitter-alt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 712
    },
    __self: this
  }), " "), __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 714
    },
    __self: this
  }, " ", __jsx("i", {
    className: "ti-instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 716
    },
    __self: this
  }), " "), __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 718
    },
    __self: this
  }, " ", __jsx("i", {
    className: "ti-skype",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 720
    },
    __self: this
  }), " "))))), __jsx("div", {
    className: "col-sm-6 col-lg-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 726
    },
    __self: this
  }, __jsx("div", {
    className: "single_blog_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 727
    },
    __self: this
  }, __jsx("div", {
    className: "single_blog_img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 728
    },
    __self: this
  }, __jsx("img", {
    src: "/img/team/chefs_2.png",
    alt: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 729
    },
    __self: this
  })), __jsx("div", {
    className: "single_blog_text text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 731
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 732
    },
    __self: this
  }, "Fred Macyard"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 733
    },
    __self: this
  }, "Chef Master"), __jsx("div", {
    className: "social_icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 734
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 735
    },
    __self: this
  }, " ", __jsx("i", {
    className: "ti-facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 737
    },
    __self: this
  }), " "), __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 739
    },
    __self: this
  }, " ", __jsx("i", {
    className: "ti-twitter-alt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 741
    },
    __self: this
  }), " "), __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 743
    },
    __self: this
  }, " ", __jsx("i", {
    className: "ti-instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 745
    },
    __self: this
  }), " "), __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 747
    },
    __self: this
  }, " ", __jsx("i", {
    className: "ti-skype",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 749
    },
    __self: this
  }), " "))))), __jsx("div", {
    className: "col-sm-6 col-lg-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 755
    },
    __self: this
  }, __jsx("div", {
    className: "single_blog_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 756
    },
    __self: this
  }, __jsx("div", {
    className: "single_blog_img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 757
    },
    __self: this
  }, __jsx("img", {
    src: "/img/team/chefs_3.png",
    alt: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 758
    },
    __self: this
  })), __jsx("div", {
    className: "single_blog_text text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 760
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 761
    },
    __self: this
  }, "Justin Stuard"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 762
    },
    __self: this
  }, "Chef Master"), __jsx("div", {
    className: "social_icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 763
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 764
    },
    __self: this
  }, " ", __jsx("i", {
    className: "ti-facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 766
    },
    __self: this
  }), " "), __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 768
    },
    __self: this
  }, " ", __jsx("i", {
    className: "ti-twitter-alt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 770
    },
    __self: this
  }), " "), __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 772
    },
    __self: this
  }, " ", __jsx("i", {
    className: "ti-instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 774
    },
    __self: this
  }), " "), __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 776
    },
    __self: this
  }, " ", __jsx("i", {
    className: "ti-skype",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 778
    },
    __self: this
  }), " "))))), __jsx("div", {
    className: "col-sm-6 col-lg-4 d-none d-sm-block d-lg-none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 784
    },
    __self: this
  }, __jsx("div", {
    className: "single_blog_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 785
    },
    __self: this
  }, __jsx("div", {
    className: "single_blog_img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 786
    },
    __self: this
  }, __jsx("img", {
    src: "/img/team/chefs_1.png",
    alt: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 787
    },
    __self: this
  })), __jsx("div", {
    className: "single_blog_text text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 789
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 790
    },
    __self: this
  }, "Justin Stuard"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 791
    },
    __self: this
  }, "Chef Master"), __jsx("div", {
    className: "social_icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 792
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 793
    },
    __self: this
  }, " ", __jsx("i", {
    className: "ti-facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 795
    },
    __self: this
  }), " "), __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 797
    },
    __self: this
  }, " ", __jsx("i", {
    className: "ti-twitter-alt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 799
    },
    __self: this
  }), " "), __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 801
    },
    __self: this
  }, " ", __jsx("i", {
    className: "ti-instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 803
    },
    __self: this
  }), " "), __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 805
    },
    __self: this
  }, " ", __jsx("i", {
    className: "ti-skype",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 807
    },
    __self: this
  }), " ")))))))), __jsx("section", {
    className: "regervation_part section_padding",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 818
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 819
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 820
    },
    __self: this
  }, __jsx("div", {
    className: "col-xl-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 821
    },
    __self: this
  }, __jsx("div", {
    className: "section_tittle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 822
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 823
    },
    __self: this
  }, "Reservation"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 824
    },
    __self: this
  }, "Book A Table")))), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 828
    },
    __self: this
  }, __jsx("div", {
    className: "col-lg-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 829
    },
    __self: this
  }, __jsx("div", {
    className: "regervation_part_iner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 830
    },
    __self: this
  }, __jsx("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 831
    },
    __self: this
  }, __jsx("div", {
    className: "form-row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 832
    },
    __self: this
  }, __jsx("div", {
    className: "form-group col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 833
    },
    __self: this
  }, __jsx("input", {
    type: "email",
    className: "form-control",
    id: "inputEmail4",
    placeholder: "Name *",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 834
    },
    __self: this
  })), __jsx("div", {
    className: "form-group col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 841
    },
    __self: this
  }, __jsx("input", {
    type: "password",
    className: "form-control",
    id: "inputPassword4",
    placeholder: "Email address *",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 842
    },
    __self: this
  })), __jsx("div", {
    className: "form-group col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 849
    },
    __self: this
  }, __jsx("select", {
    className: "form-control",
    id: "Select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 850
    },
    __self: this
  }, __jsx("option", {
    value: 1,
    selected: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 851
    },
    __self: this
  }, "Persons *"), __jsx("option", {
    value: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 854
    },
    __self: this
  }, "Number of guests 1"), __jsx("option", {
    value: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 855
    },
    __self: this
  }, "Number of guests 2"), __jsx("option", {
    value: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 856
    },
    __self: this
  }, "Number of guests 3"), __jsx("option", {
    value: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 857
    },
    __self: this
  }, "Number of guests 4"))), __jsx("div", {
    className: "form-group col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 860
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    className: "form-control",
    id: "pnone",
    placeholder: "Phone number *",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 861
    },
    __self: this
  })), __jsx("div", {
    className: "form-group col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 868
    },
    __self: this
  }, __jsx("div", {
    className: "input-group date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 869
    },
    __self: this
  }, __jsx("input", {
    id: "datepicker",
    type: "text",
    className: "form-control",
    placeholder: "Date *",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 870
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 878
    },
    __self: this
  }, __jsx("select", {
    className: "form-control",
    id: "Select2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 879
    },
    __self: this
  }, __jsx("option", {
    value: true,
    selected: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 880
    },
    __self: this
  }, "Time *"), __jsx("option", {
    value: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 883
    },
    __self: this
  }, "8 AM TO 10AM"), __jsx("option", {
    value: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 884
    },
    __self: this
  }, "10 AM TO 12PM"), __jsx("option", {
    value: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 885
    },
    __self: this
  }, "12PM TO 2PM"), __jsx("option", {
    value: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 886
    },
    __self: this
  }, "2PM TO 4PM"), __jsx("option", {
    value: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 887
    },
    __self: this
  }, "4PM TO 6PM"), __jsx("option", {
    value: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 888
    },
    __self: this
  }, "6PM TO 8PM"), __jsx("option", {
    value: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 889
    },
    __self: this
  }, "4PM TO 10PM"), __jsx("option", {
    value: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 890
    },
    __self: this
  }, "10PM TO 12PM"))), __jsx("div", {
    className: "form-group col-md-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 893
    },
    __self: this
  }, __jsx("textarea", {
    className: "form-control",
    id: "Textarea",
    rows: 4,
    placeholder: "Your Note *",
    defaultValue: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 894
    },
    __self: this
  }))), __jsx("div", {
    className: "regerv_btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 903
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "btn_4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 904
    },
    __self: this
  }, "Book A Table")))))))), __jsx("section", {
    className: "review_part gray_bg section_padding",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 916
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 917
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 918
    },
    __self: this
  }, __jsx("div", {
    className: "col-xl-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 919
    },
    __self: this
  }, __jsx("div", {
    className: "section_tittle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 920
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 921
    },
    __self: this
  }, "Testimonials"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 922
    },
    __self: this
  }, "Customers Feedback")))), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 926
    },
    __self: this
  }, __jsx("div", {
    className: "col-lg-11",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 927
    },
    __self: this
  }, __jsx("div", {
    className: "client_review_part owl-carousel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 928
    },
    __self: this
  }, __jsx("div", {
    className: "client_review_single media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 929
    },
    __self: this
  }, __jsx("div", {
    className: "client_img align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 930
    },
    __self: this
  }, __jsx("img", {
    src: "/img/client/client_1.png",
    alt: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 931
    },
    __self: this
  })), __jsx("div", {
    className: "client_review_text media-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 933
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 934
    },
    __self: this
  }, "Also made from. Give may saying meat there from heaven it lights face had is gathered god dea earth light for life may itself shall whales made they're blessed whales also made from give may saying meat. There from heaven it lights face had amazing place"), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 941
    },
    __self: this
  }, "Mosan Cameron, ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 942
    },
    __self: this
  }, "Executive of fedex")))), __jsx("div", {
    className: "client_review_single media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 946
    },
    __self: this
  }, __jsx("div", {
    className: "client_img align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 947
    },
    __self: this
  }, __jsx("img", {
    src: "/img/client/client_1.png ",
    alt: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 948
    },
    __self: this
  })), __jsx("div", {
    className: "client_review_text media-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 950
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 951
    },
    __self: this
  }, "Also made from. Give may saying meat there from heaven it lights face had is gathered god dea earth light for life may itself shall whales made they're blessed whales also made from give may saying meat. There from heaven it lights face had amazing place"), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 958
    },
    __self: this
  }, "Mosan Cameron, ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 959
    },
    __self: this
  }, "Executive of fedex")))), __jsx("div", {
    className: "client_review_single media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 963
    },
    __self: this
  }, __jsx("div", {
    className: "client_img align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 964
    },
    __self: this
  }, __jsx("img", {
    src: "/img/client/client_1.png",
    alt: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 965
    },
    __self: this
  })), __jsx("div", {
    className: "client_review_text media-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 967
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 968
    },
    __self: this
  }, "Also made from. Give may saying meat there from heaven it lights face had is gathered god dea earth light for life may itself shall whales made they're blessed whales also made from give may saying meat. There from heaven it lights face had amazing place"), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 975
    },
    __self: this
  }, "Mosan Cameron, ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 976
    },
    __self: this
  }, "Executive of fedex"))))))))), __jsx("section", {
    className: "blog_item_section blog_section section_padding",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 987
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 988
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 989
    },
    __self: this
  }, __jsx("div", {
    className: "col-xl-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 990
    },
    __self: this
  }, __jsx("div", {
    className: "section_tittle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 991
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 992
    },
    __self: this
  }, "Recent News"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 993
    },
    __self: this
  }, "Latest From Blog")))), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 997
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-6 col-lg-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 998
    },
    __self: this
  }, __jsx("div", {
    className: "single_blog_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 999
    },
    __self: this
  }, __jsx("div", {
    className: "single_blog_img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1000
    },
    __self: this
  }, __jsx("img", {
    src: "/img/blog/blog_1.png",
    alt: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1001
    },
    __self: this
  })), __jsx("div", {
    className: "single_blog_text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1003
    },
    __self: this
  }, __jsx("div", {
    className: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1004
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "date_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1005
    },
    __self: this
  }, "Apr 06, 2019", " "), __jsx("a", {
    href: "#",
    className: "date_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1008
    },
    __self: this
  }, " ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1010
    },
    __self: this
  }, "#"), " Food News", " ")), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1013
    },
    __self: this
  }, __jsx("a", {
    href: "blog.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1014
    },
    __self: this
  }, "Adama kind deep gatherin first over fter his great")), __jsx("a", {
    href: "#",
    className: "btn_3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1018
    },
    __self: this
  }, "Read More ", __jsx("img", {
    src: "/img/icon/left_1.svg",
    alt: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1019
    },
    __self: this
  }))))), __jsx("div", {
    className: "col-sm-6 col-lg-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1024
    },
    __self: this
  }, __jsx("div", {
    className: "single_blog_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1025
    },
    __self: this
  }, __jsx("div", {
    className: "single_blog_img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1026
    },
    __self: this
  }, __jsx("img", {
    src: "/img/blog/blog_2.png",
    alt: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1027
    },
    __self: this
  })), __jsx("div", {
    className: "single_blog_text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1029
    },
    __self: this
  }, __jsx("div", {
    className: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1030
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "date_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1031
    },
    __self: this
  }, "Apr 06, 2019", " "), __jsx("a", {
    href: "#",
    className: "date_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1034
    },
    __self: this
  }, " ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1036
    },
    __self: this
  }, "#"), " Food News", " ")), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1039
    },
    __self: this
  }, __jsx("a", {
    href: "blog.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1040
    },
    __self: this
  }, "Adama kind deep gatherin first over fter his great")), __jsx("a", {
    href: "#",
    className: "btn_3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1044
    },
    __self: this
  }, "Read More ", __jsx("img", {
    src: "/img/icon/left_1.svg",
    alt: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1045
    },
    __self: this
  }))))), __jsx("div", {
    className: "col-sm-6 col-lg-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1050
    },
    __self: this
  }, __jsx("div", {
    className: "single_blog_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1051
    },
    __self: this
  }, __jsx("div", {
    className: "single_blog_img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1052
    },
    __self: this
  }, __jsx("img", {
    src: "/img/blog/blog_3.png",
    alt: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1053
    },
    __self: this
  })), __jsx("div", {
    className: "single_blog_text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1055
    },
    __self: this
  }, __jsx("div", {
    className: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1056
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "date_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1057
    },
    __self: this
  }, "Apr 06, 2019", " "), __jsx("a", {
    href: "#",
    className: "date_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1060
    },
    __self: this
  }, " ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1062
    },
    __self: this
  }, "#"), " Food News", " ")), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1065
    },
    __self: this
  }, __jsx("a", {
    href: "blog.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1066
    },
    __self: this
  }, "Adama kind deep gatherin first over fter his great")), __jsx("a", {
    href: "#",
    className: "btn_3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1070
    },
    __self: this
  }, "Read More ", __jsx("img", {
    src: "/img/icon/left_1.svg",
    alt: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1071
    },
    __self: this
  }))))), __jsx("div", {
    className: "col-sm-6 col-lg-4 d-none d-sm-block d-lg-none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1076
    },
    __self: this
  }, __jsx("div", {
    className: "single_blog_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1077
    },
    __self: this
  }, __jsx("div", {
    className: "single_blog_img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1078
    },
    __self: this
  }, __jsx("img", {
    src: "/img/blog/blog_1.png",
    alt: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1079
    },
    __self: this
  })), __jsx("div", {
    className: "single_blog_text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1081
    },
    __self: this
  }, __jsx("div", {
    className: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1082
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "date_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1083
    },
    __self: this
  }, "Apr 06, 2019", " "), __jsx("a", {
    href: "#",
    className: "date_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1086
    },
    __self: this
  }, " ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1088
    },
    __self: this
  }, "#"), " Food News", " ")), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1091
    },
    __self: this
  }, __jsx("a", {
    href: "blog.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1092
    },
    __self: this
  }, "Adama kind deep gatherin first over fter his great")), __jsx("a", {
    href: "#",
    className: "btn_3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1096
    },
    __self: this
  }, "Read More ", __jsx("img", {
    src: "/img/icon/left_1.svg",
    alt: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1097
    },
    __self: this
  })))))))))));
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ducthien/Desktop/Dingo-ProjectReact/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map