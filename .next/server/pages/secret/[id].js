module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/secret/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/secret/[id].js":
/*!******************************!*\
  !*** ./pages/secret/[id].js ***!
  \******************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Headers_AdminSecretHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/components/Headers/AdminSecretHeader */ "./src/components/Headers/AdminSecretHeader.js");
/* harmony import */ var _src_components_Headers_SecretHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/components/Headers/SecretHeader */ "./src/components/Headers/SecretHeader.js");
/* harmony import */ var _src_components_Participants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/components/Participants */ "./src/components/Participants.js");


var _jsxFileName = "C:\\Serverless\\front-end\\pages\\secret\\[id].js";




function Secret({
  participants,
  hasDrew,
  isAdmin
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [isAdmin && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Headers_AdminSecretHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 19
    }, this), !isAdmin && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Headers_SecretHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 20
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Participants__WEBPACK_IMPORTED_MODULE_3__["default"], {
      showButton: isAdmin
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

async function getServerSideProps(context) {
  return {
    props: {
      participants: [],
      hasDrew: false,
      isAdmin: true
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Secret);

/***/ }),

/***/ "./src/components/Button.js":
/*!**********************************!*\
  !*** ./src/components/Button.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Serverless\\front-end\\src\\components\\Button.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "Button__StyledButton",
  componentId: "sc-1v96thl-0"
})(["border:none;cursor:pointer;padding:15px 30px;font-size:14px;display:block;border-radius:50px;margin:10px 0;background-color:", ";"], ({
  theme
}) => theme.colors.secondary);
function Button(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StyledButton, _objectSpread({}, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./src/components/Containers/ImageContainer.js":
/*!*****************************************************!*\
  !*** ./src/components/Containers/ImageContainer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageContainer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Serverless\\front-end\\src\\components\\Containers\\ImageContainer.js";

const Background = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ImageContainer__Background",
  componentId: "ris5ys-0"
})(["background-image:url(\"/background.png\");background-position:center;background-repeat:no-repeat;background-size:cover;"]);
function ImageContainer({
  children
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Background, {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./src/components/Headers/AdminSecretHeader.js":
/*!*****************************************************!*\
  !*** ./src/components/Headers/AdminSecretHeader.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdminSecretHeader; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Containers_ImageContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Containers/ImageContainer */ "./src/components/Containers/ImageContainer.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Logo */ "./src/components/Logo.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Input */ "./src/components/Input.js");

var _jsxFileName = "C:\\Serverless\\front-end\\src\\components\\Headers\\AdminSecretHeader.js";




const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "AdminSecretHeader__Container",
  componentId: "sc-11d70z0-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;color:", ";"], ({
  theme
}) => theme.colors.light);
const DivForm = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "AdminSecretHeader__DivForm",
  componentId: "sc-11d70z0-1"
})(["color:", ";padding:20px;max-width:400px;"], ({
  theme
}) => theme.colors.light);
function AdminSecretHeader() {
  const link = "https://link.com/sala";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Containers_ImageContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Logo__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DivForm, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Compartilhe essa sala com seus amigos!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: link,
        disabled: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Headers/SecretHeader.js":
/*!************************************************!*\
  !*** ./src/components/Headers/SecretHeader.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SecretHeader; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Containers_ImageContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Containers/ImageContainer */ "./src/components/Containers/ImageContainer.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Logo */ "./src/components/Logo.js");
/* harmony import */ var _NameEmailForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../NameEmailForm */ "./src/components/NameEmailForm.js");

var _jsxFileName = "C:\\Serverless\\front-end\\src\\components\\Headers\\SecretHeader.js";




const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SecretHeader__Container",
  componentId: "sc-53xmvq-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;color:", ";"], ({
  theme
}) => theme.colors.light);
const DivForm = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SecretHeader__DivForm",
  componentId: "sc-53xmvq-1"
})(["display:flex;flex-direction:row;align-items:center;justify-content:center;flex-shrink:0;"]);
function SecretHeader() {
  const link = "https://link.com/sala";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Containers_ImageContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Logo__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Voc\xEA foi convidado para participar desse amigo secreto!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DivForm, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_NameEmailForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
        buttonText: "participar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Input.js":
/*!*********************************!*\
  !*** ./src/components/Input.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputComponent; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Serverless\\front-end\\src\\components\\Input.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const Input = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({
  displayName: "Input",
  componentId: "sc-3q3xx0-0"
})(["padding:20px;color:", ";background-color:", ";border:0;border-radius:10px;width:88%;&:focus{border:none;outline:none;}&::placeholder{color:", ";}"], ({
  theme
}) => theme.colors.primary, ({
  theme
}) => theme.colors.primaryLight, ({
  theme
}) => theme.colors.primary);
function InputComponent(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, _objectSpread({}, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./src/components/Logo.js":
/*!********************************!*\
  !*** ./src/components/Logo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logo; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Serverless\\front-end\\src\\components\\Logo.js";

const H1 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "Logo__H1",
  componentId: "sc-1yow3vo-0"
})(["font-size:64px;color:", ";"], ({
  theme
}) => theme.colors.light);
function Logo() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(H1, {
    children: "{Dev} Oculto"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./src/components/NameEmailForm.js":
/*!*****************************************!*\
  !*** ./src/components/NameEmailForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input */ "./src/components/Input.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./src/components/Button.js");

var _jsxFileName = "C:\\Serverless\\front-end\\src\\components\\NameEmailForm.js";



const Form = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.form.withConfig({
  displayName: "NameEmailForm__Form",
  componentId: "wj95n3-0"
})(["flex:1;display:flex;max-width:900px;padding:20px;@media (max-width:500px){flex-direction:column;}> input,button{margin:10px;}"]);

function NameEmailForm({
  buttonText
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Form, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
      placeholder: "Seu nome",
      required: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: "email",
      placeholder: "Seu email",
      required: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: buttonText
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

NameEmailForm.defaultProps = {
  buttonText: "Criar"
};
/* harmony default export */ __webpack_exports__["default"] = (NameEmailForm);

/***/ }),

/***/ "./src/components/Participants.js":
/*!****************************************!*\
  !*** ./src/components/Participants.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Participants; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ri */ "react-icons/ri");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Serverless\\front-end\\src\\components\\Participants.js";


const H4 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h4.withConfig({
  displayName: "Participants__H4",
  componentId: "quou7q-0"
})(["text-align:center;"]);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Participants__Container",
  componentId: "quou7q-1"
})(["text-align:center;display:flex;padding:5px 20px;justify-content:center;align-items:center;flex-direction:column;"]);
const ParticipantDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Participants__ParticipantDiv",
  componentId: "quou7q-2"
})(["display:flex;align-items:center;"]);
const ParticipantDelete = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Participants__ParticipantDelete",
  componentId: "quou7q-3"
})(["color:", ";cursor:pointer;"], ({
  theme
}) => theme.colors.primary);

const Participant = ({
  showButton
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ParticipantDiv, {
  children: [showButton && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ParticipantDelete, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_2__["RiDeleteBin2Fill"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 7
  }, undefined), "Nome (email@gmail.com)"]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 28,
  columnNumber: 3
}, undefined);

function Participants({
  showButton
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(H4, {
      children: "Participantes:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Participant, {
        showButton: showButton
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Participant, {
        showButton: showButton
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Participant, {
        showButton: showButton
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Participant, {
        showButton: showButton
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Participant, {
        showButton: showButton
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Participant, {
        showButton: showButton
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "react-icons/ri":
/*!*********************************!*\
  !*** external "react-icons/ri" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ri");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2VjcmV0Ly5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29udGFpbmVycy9JbWFnZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXJzL0FkbWluU2VjcmV0SGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlcnMvU2VjcmV0SGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xvZ28uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmFtZUVtYWlsRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QYXJ0aWNpcGFudHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvcmlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIlNlY3JldCIsInBhcnRpY2lwYW50cyIsImhhc0RyZXciLCJpc0FkbWluIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInByb3BzIiwiU3R5bGVkQnV0dG9uIiwic3R5bGVkIiwiYnV0dG9uIiwidGhlbWUiLCJjb2xvcnMiLCJzZWNvbmRhcnkiLCJCdXR0b24iLCJCYWNrZ3JvdW5kIiwiZGl2IiwiSW1hZ2VDb250YWluZXIiLCJjaGlsZHJlbiIsIkNvbnRhaW5lciIsImxpZ2h0IiwiRGl2Rm9ybSIsIkFkbWluU2VjcmV0SGVhZGVyIiwibGluayIsIlNlY3JldEhlYWRlciIsIklucHV0IiwiaW5wdXQiLCJwcmltYXJ5IiwicHJpbWFyeUxpZ2h0IiwiSW5wdXRDb21wb25lbnQiLCJIMSIsImgxIiwiTG9nbyIsIkZvcm0iLCJmb3JtIiwiTmFtZUVtYWlsRm9ybSIsImJ1dHRvblRleHQiLCJkZWZhdWx0UHJvcHMiLCJINCIsImg0IiwiUGFydGljaXBhbnREaXYiLCJQYXJ0aWNpcGFudERlbGV0ZSIsIlBhcnRpY2lwYW50Iiwic2hvd0J1dHRvbiIsIlBhcnRpY2lwYW50cyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsQ0FBZ0I7QUFBRUMsY0FBRjtBQUFnQkMsU0FBaEI7QUFBeUJDO0FBQXpCLENBQWhCLEVBQW9EO0FBQ2xELHNCQUNFO0FBQUEsZUFDR0EsT0FBTyxpQkFBSSxxRUFBQyxpRkFBRDtBQUFBO0FBQUE7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QSwyQkFDRSxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGOztBQVdlLFNBQVNDLFlBQVQsQ0FBc0I7QUFBRUQ7QUFBRixDQUF0QixFQUFzQztBQUNuRCxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLHFFQUFDLFNBQUQ7QUFBQSw4QkFDRSxxRUFBQyxXQUFEO0FBQWEsa0JBQVUsRUFBRUE7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUscUVBQUMsV0FBRDtBQUFhLGtCQUFVLEVBQUVBO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFLHFFQUFDLFdBQUQ7QUFBYSxrQkFBVSxFQUFFQTtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFJRSxxRUFBQyxXQUFEO0FBQWEsa0JBQVUsRUFBRUE7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBS0UscUVBQUMsV0FBRDtBQUFhLGtCQUFVLEVBQUVBO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQU1FLHFFQUFDLFdBQUQ7QUFBYSxrQkFBVSxFQUFFQTtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQSxrQkFERjtBQWFELEM7Ozs7Ozs7Ozs7O0FDbkRELDJDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL3NlY3JldC9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9zZWNyZXQvW2lkXS5qc1wiKTtcbiIsImltcG9ydCBBZG1pblNlY3JldEhlYWRlciBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvSGVhZGVycy9BZG1pblNlY3JldEhlYWRlclwiO1xyXG5pbXBvcnQgU2VjcmV0SGVhZGVyIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9IZWFkZXJzL1NlY3JldEhlYWRlclwiO1xyXG5pbXBvcnQgUGFydGljaXBhbnRzIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9QYXJ0aWNpcGFudHNcIjtcclxuXHJcbmZ1bmN0aW9uIFNlY3JldCh7IHBhcnRpY2lwYW50cywgaGFzRHJldywgaXNBZG1pbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtpc0FkbWluICYmIDxBZG1pblNlY3JldEhlYWRlciAvPn1cclxuICAgICAgeyFpc0FkbWluICYmIDxTZWNyZXRIZWFkZXIgLz59XHJcbiAgICAgIDxQYXJ0aWNpcGFudHMgc2hvd0J1dHRvbj17aXNBZG1pbn0gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwYXJ0aWNpcGFudHM6IFtdLFxyXG4gICAgICBoYXNEcmV3OiBmYWxzZSxcclxuICAgICAgaXNBZG1pbjogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjcmV0O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDE1cHggMzBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBtYXJnaW46IDEwcHggMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5zZWNvbmRhcnl9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uKHByb3BzKSB7XHJcbiAgcmV0dXJuIDxTdHlsZWRCdXR0b24gey4uLnByb3BzfSAvPjtcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgQmFja2dyb3VuZCA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2JhY2tncm91bmQucG5nXCIpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZUNvbnRhaW5lcih7IGNoaWxkcmVuIH0pIHtcclxuICByZXR1cm4gPEJhY2tncm91bmQ+e2NoaWxkcmVufTwvQmFja2dyb3VuZD47XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IEltYWdlQ29udGFpbmVyIGZyb20gXCIuLi9Db250YWluZXJzL0ltYWdlQ29udGFpbmVyXCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9Mb2dvXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vSW5wdXRcIjtcclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMubGlnaHR9O1xyXG5gO1xyXG5cclxuY29uc3QgRGl2Rm9ybSA9IHN0eWxlZC5kaXZgXHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmxpZ2h0fTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZG1pblNlY3JldEhlYWRlcigpIHtcclxuICBjb25zdCBsaW5rID0gXCJodHRwczovL2xpbmsuY29tL3NhbGFcIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxJbWFnZUNvbnRhaW5lcj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8TG9nbyAvPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPERpdkZvcm0+XHJcbiAgICAgICAgPHA+Q29tcGFydGlsaGUgZXNzYSBzYWxhIGNvbSBzZXVzIGFtaWdvcyE8L3A+XHJcbiAgICAgICAgPElucHV0IHZhbHVlPXtsaW5rfSBkaXNhYmxlZCAvPlxyXG4gICAgICA8L0RpdkZvcm0+XHJcbiAgICA8L0ltYWdlQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IEltYWdlQ29udGFpbmVyIGZyb20gXCIuLi9Db250YWluZXJzL0ltYWdlQ29udGFpbmVyXCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9Mb2dvXCI7XHJcbmltcG9ydCBOYW1lRW1haWxGb3JtIGZyb20gXCIuLi9OYW1lRW1haWxGb3JtXCI7XHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmxpZ2h0fTtcclxuYDtcclxuXHJcbmNvbnN0IERpdkZvcm0gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VjcmV0SGVhZGVyKCkge1xyXG4gIGNvbnN0IGxpbmsgPSBcImh0dHBzOi8vbGluay5jb20vc2FsYVwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEltYWdlQ29udGFpbmVyPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxMb2dvIC8+XHJcbiAgICAgICAgPHA+Vm9jw6ogZm9pIGNvbnZpZGFkbyBwYXJhIHBhcnRpY2lwYXIgZGVzc2UgYW1pZ28gc2VjcmV0byE8L3A+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8RGl2Rm9ybT5cclxuICAgICAgICA8TmFtZUVtYWlsRm9ybSBidXR0b25UZXh0PVwicGFydGljaXBhclwiIC8+XHJcbiAgICAgIDwvRGl2Rm9ybT5cclxuICAgIDwvSW1hZ2VDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgcGFkZGluZzogMjBweDtcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeUxpZ2h0fTtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB3aWR0aDogODglO1xyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXRDb21wb25lbnQocHJvcHMpIHtcclxuICByZXR1cm4gPElucHV0IHsuLi5wcm9wc30gLz47XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IEgxID0gc3R5bGVkLmgxYFxyXG4gIGZvbnQtc2l6ZTogNjRweDtcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMubGlnaHR9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9nbygpIHtcclxuICByZXR1cm4gPEgxPntcIntEZXZ9IE9jdWx0b1wifTwvSDE+O1xyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi9JbnB1dFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIGZsZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gID4gaW5wdXQsXHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBOYW1lRW1haWxGb3JtKHsgYnV0dG9uVGV4dCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtPlxyXG4gICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJTZXUgbm9tZVwiIHJlcXVpcmVkIC8+XHJcbiAgICAgIDxJbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIlNldSBlbWFpbFwiIHJlcXVpcmVkIC8+XHJcbiAgICAgIDxCdXR0b24+e2J1dHRvblRleHR9PC9CdXR0b24+XHJcbiAgICA8L0Zvcm0+XHJcbiAgKTtcclxufVxyXG5cclxuTmFtZUVtYWlsRm9ybS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYnV0dG9uVGV4dDogXCJDcmlhclwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmFtZUVtYWlsRm9ybTtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgUmlEZWxldGVCaW4yRmlsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9yaVwiO1xyXG5cclxuY29uc3QgSDQgPSBzdHlsZWQuaDRgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiA1cHggMjBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmA7XHJcblxyXG5jb25zdCBQYXJ0aWNpcGFudERpdiA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgUGFydGljaXBhbnREZWxldGUgPSBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBQYXJ0aWNpcGFudCA9ICh7IHNob3dCdXR0b24gfSkgPT4gKFxyXG4gIDxQYXJ0aWNpcGFudERpdj5cclxuICAgIHtzaG93QnV0dG9uICYmIChcclxuICAgICAgPFBhcnRpY2lwYW50RGVsZXRlPlxyXG4gICAgICAgIDxSaURlbGV0ZUJpbjJGaWxsIC8+XHJcbiAgICAgIDwvUGFydGljaXBhbnREZWxldGU+XHJcbiAgICApfVxyXG4gICAgTm9tZSAoZW1haWxAZ21haWwuY29tKVxyXG4gIDwvUGFydGljaXBhbnREaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXJ0aWNpcGFudHMoeyBzaG93QnV0dG9uIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEg0PlBhcnRpY2lwYW50ZXM6PC9IND5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8UGFydGljaXBhbnQgc2hvd0J1dHRvbj17c2hvd0J1dHRvbn0gLz5cclxuICAgICAgICA8UGFydGljaXBhbnQgc2hvd0J1dHRvbj17c2hvd0J1dHRvbn0gLz5cclxuICAgICAgICA8UGFydGljaXBhbnQgc2hvd0J1dHRvbj17c2hvd0J1dHRvbn0gLz5cclxuICAgICAgICA8UGFydGljaXBhbnQgc2hvd0J1dHRvbj17c2hvd0J1dHRvbn0gLz5cclxuICAgICAgICA8UGFydGljaXBhbnQgc2hvd0J1dHRvbj17c2hvd0J1dHRvbn0gLz5cclxuICAgICAgICA8UGFydGljaXBhbnQgc2hvd0J1dHRvbj17c2hvd0J1dHRvbn0gLz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL3JpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9