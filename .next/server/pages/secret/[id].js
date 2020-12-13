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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_Headers_AdminSecretHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/components/Headers/AdminSecretHeader */ "./src/components/Headers/AdminSecretHeader.js");
/* harmony import */ var _src_components_Headers_SecretHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/components/Headers/SecretHeader */ "./src/components/Headers/SecretHeader.js");
/* harmony import */ var _src_components_Participants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/components/Participants */ "./src/components/Participants.js");
/* harmony import */ var _src_components_Sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/components/Sort */ "./src/components/Sort.js");


var _jsxFileName = "C:\\Serverless\\front-end\\pages\\secret\\[id].js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function Secret({
  participants,
  hasDrew,
  isAdmin
}) {
  const {
    0: localParticipants,
    1: setLocalParticipants
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setLocalParticipants(participants);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [isAdmin && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Headers_AdminSecretHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 19
    }, this), !isAdmin && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Headers_SecretHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onAddParticipant: participant => setLocalParticipants([...localParticipants, participant])
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Participants__WEBPACK_IMPORTED_MODULE_4__["default"], {
      showButton: isAdmin,
      participants: localParticipants,
      setParticipants: setLocalParticipants
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), isAdmin && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Sort__WEBPACK_IMPORTED_MODULE_5__["default"], {
      hasDrew: hasDrew
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 19
    }, this)]
  }, void 0, true);
}

async function getServerSideProps(context) {
  const data = await getSecretById(context.query);
  return {
    props: _objectSpread(_objectSpread({}, data), context.query)
  };
}

async function getSecretById({
  id,
  adminKey
}) {
  const {
    NEXT_PUBLIC_API_URL
  } = process.env;
  const response = await fetch(`${NEXT_PUBLIC_API_URL}/secret/${id}`, {
    method: "GET",
    headers: new Headers({
      "admin-key": adminKey
    })
  });
  return response.json();
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

/***/ "./src/components/Containers/ImageContainerSecret.js":
/*!***********************************************************!*\
  !*** ./src/components/Containers/ImageContainerSecret.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageContainerSecret; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Serverless\\front-end\\src\\components\\Containers\\ImageContainerSecret.js";

const Background = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ImageContainerSecret__Background",
  componentId: "d49it3-0"
})(["background-image:url(\"/background.png\");background-position:center;background-repeat:no-repeat;background-size:cover;"]);
function ImageContainerSecret({
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
/* harmony import */ var _Containers_ImageContainerSecret__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Containers/ImageContainerSecret */ "./src/components/Containers/ImageContainerSecret.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Logo */ "./src/components/Logo.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Input */ "./src/components/Input.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);

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
  const {
    0: link,
    1: setLink
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])("");
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    setLink(`${window.location.origin}${window.location.pathname}`);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Containers_ImageContainerSecret__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Logo__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DivForm, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Compartilhe essa sala com seus amigos!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: link,
        disabled: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Containers_ImageContainerSecret__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Containers/ImageContainerSecret */ "./src/components/Containers/ImageContainerSecret.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Logo */ "./src/components/Logo.js");
/* harmony import */ var _NameEmailForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../NameEmailForm */ "./src/components/NameEmailForm.js");

var _jsxFileName = "C:\\Serverless\\front-end\\src\\components\\Headers\\SecretHeader.js";





const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "SecretHeader__Container",
  componentId: "sc-53xmvq-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;color:", ";"], ({
  theme
}) => theme.colors.light);
const DivForm = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "SecretHeader__DivForm",
  componentId: "sc-53xmvq-1"
})(["display:flex;flex-direction:row;align-items:center;justify-content:center;flex-shrink:0;"]);
function SecretHeader({
  onAddParticipant
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    id
  } = router.query;

  const handleSubmit = async ({
    name,
    email
  }) => {
    const {
      NEXT_PUBLIC_API_URL
    } = process.env;
    const data = await fetch(`${NEXT_PUBLIC_API_URL}/secret/${id}/participants`, {
      method: "POST",
      body: JSON.stringify({
        name,
        email
      })
    });
    handleResponse({
      name,
      email,
      response: await data.json()
    });
  };

  const handleResponse = ({
    name,
    email,
    response
  }) => {
    if (response.success) {
      onAddParticipant({
        name,
        email,
        externalId: response.id
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Containers_ImageContainerSecret__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Voc\xEA foi convidado para participar desse amigo secreto!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DivForm, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_NameEmailForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
        buttonText: "Participar",
        onSubmit: handleSubmit
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Input */ "./src/components/Input.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button */ "./src/components/Button.js");

var _jsxFileName = "C:\\Serverless\\front-end\\src\\components\\NameEmailForm.js";




const Form = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.form.withConfig({
  displayName: "NameEmailForm__Form",
  componentId: "wj95n3-0"
})(["flex:1;display:flex;max-width:900px;padding:20px;@media (max-width:500px){flex-direction:column;}> input,button{margin:10px;}"]);

function NameEmailForm({
  buttonText,
  onSubmit
}) {
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({
      name,
      email
    });
    setName("");
    setEmail("");
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Form, {
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
      placeholder: "Seu nome",
      required: true,
      value: name,
      onChange: ({
        target
      }) => setName(target.value)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: "email",
      placeholder: "Seu email",
      required: true,
      value: email,
      onChange: ({
        target
      }) => setEmail(target.value)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: buttonText
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

NameEmailForm.defaultProps = {
  buttonText: "Criar",
  onSubmit: () => {}
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);


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
  showButton,
  name,
  email,
  onDelete
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ParticipantDiv, {
  children: [showButton && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ParticipantDelete, {
    onClick: onDelete,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_2__["RiDeleteBin2Fill"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 7
  }, undefined), name, " (", email, ")"]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 29,
  columnNumber: 3
}, undefined);

function Participants({
  showButton,
  participants,
  setParticipants
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    id,
    adminKey
  } = router.query;

  const deleteAPIParticipant = async participantId => {
    const {
      NEXT_PUBLIC_API_URL
    } = process.env;
    return await fetch(`${NEXT_PUBLIC_API_URL}/secret/${id}/participants/${participantId}`, {
      method: "DELETE",
      headers: new Headers({
        "admin-key": adminKey
      })
    });
  };

  const deleteParticipant = async id => {
    const {
      status
    } = await deleteAPIParticipant(id);

    if (status === 204) {
      setParticipants(participants.filter(({
        externalId
      }) => externalId !== id));
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(H4, {
      children: "Participantes:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
      children: [participants.length === 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Nenhum participante cadastrado ainda"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 11
      }, this), participants.map(({
        name,
        email,
        externalId
      }) => {
        /*#__PURE__*/
        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Participant, {
          showButton: showButton,
          name: name,
          email: email,
          onDelete: () => deleteParticipant(externalId)
        }, `participant-${externalId}`, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./src/components/Sort.js":
/*!********************************!*\
  !*** ./src/components/Sort.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sort; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button */ "./src/components/Button.js");

var _jsxFileName = "C:\\Serverless\\front-end\\src\\components\\Sort.js";




const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Sort__Container",
  componentId: "lasxeb-0"
})(["display:flex;align-items:center;justify-content:center;"]);
function Sort({
  hasDrew
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    id,
    adminKey
  } = router.query;
  const {
    0: drew,
    1: setDrew
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const DREW_STATUS = drew || hasDrew;

  const handleSort = async () => {
    const {
      NEXT_PUBLIC_API_URL
    } = process.env;
    const {
      status
    } = await fetch(`${NEXT_PUBLIC_API_URL}/secret/${id}/draw`, {
      method: "PUT",
      headers: new Headers({
        "admin-key": adminKey
      })
    });
    if (status === 200) setDrew(true);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    children: [DREW_STATUS && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "O sorteio j\xE1 foi realizado."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 23
    }, this), !DREW_STATUS && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onclick: handleSort,
      children: "Sortear"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 24
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2VjcmV0Ly5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29udGFpbmVycy9JbWFnZUNvbnRhaW5lclNlY3JldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXJzL0FkbWluU2VjcmV0SGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlcnMvU2VjcmV0SGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xvZ28uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmFtZUVtYWlsRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QYXJ0aWNpcGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU29ydC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvcmlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIlNlY3JldCIsInBhcnRpY2lwYW50cyIsImhhc0RyZXciLCJpc0FkbWluIiwibG9jYWxQYXJ0aWNpcGFudHMiLCJzZXRMb2NhbFBhcnRpY2lwYW50cyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicGFydGljaXBhbnQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwiZGF0YSIsImdldFNlY3JldEJ5SWQiLCJxdWVyeSIsInByb3BzIiwiaWQiLCJhZG1pbktleSIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJIZWFkZXJzIiwianNvbiIsIlN0eWxlZEJ1dHRvbiIsInN0eWxlZCIsImJ1dHRvbiIsInRoZW1lIiwiY29sb3JzIiwic2Vjb25kYXJ5IiwiQnV0dG9uIiwiQmFja2dyb3VuZCIsImRpdiIsIkltYWdlQ29udGFpbmVyU2VjcmV0IiwiY2hpbGRyZW4iLCJDb250YWluZXIiLCJsaWdodCIsIkRpdkZvcm0iLCJBZG1pblNlY3JldEhlYWRlciIsImxpbmsiLCJzZXRMaW5rIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJwYXRobmFtZSIsIlNlY3JldEhlYWRlciIsIm9uQWRkUGFydGljaXBhbnQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVTdWJtaXQiLCJuYW1lIiwiZW1haWwiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhhbmRsZVJlc3BvbnNlIiwic3VjY2VzcyIsImV4dGVybmFsSWQiLCJJbnB1dCIsImlucHV0IiwicHJpbWFyeSIsInByaW1hcnlMaWdodCIsIklucHV0Q29tcG9uZW50IiwiSDEiLCJoMSIsIkxvZ28iLCJGb3JtIiwiZm9ybSIsIk5hbWVFbWFpbEZvcm0iLCJidXR0b25UZXh0Iiwib25TdWJtaXQiLCJzZXROYW1lIiwic2V0RW1haWwiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRlZmF1bHRQcm9wcyIsIkg0IiwiaDQiLCJQYXJ0aWNpcGFudERpdiIsIlBhcnRpY2lwYW50RGVsZXRlIiwiUGFydGljaXBhbnQiLCJzaG93QnV0dG9uIiwib25EZWxldGUiLCJQYXJ0aWNpcGFudHMiLCJzZXRQYXJ0aWNpcGFudHMiLCJkZWxldGVBUElQYXJ0aWNpcGFudCIsInBhcnRpY2lwYW50SWQiLCJkZWxldGVQYXJ0aWNpcGFudCIsInN0YXR1cyIsImZpbHRlciIsImxlbmd0aCIsIm1hcCIsIlNvcnQiLCJkcmV3Iiwic2V0RHJldyIsIkRSRVdfU1RBVFVTIiwiaGFuZGxlU29ydCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQjtBQUFFQyxjQUFGO0FBQWdCQyxTQUFoQjtBQUF5QkM7QUFBekIsQ0FBaEIsRUFBb0Q7QUFDbEQsUUFBTTtBQUFBLE9BQUNDLGlCQUFEO0FBQUEsT0FBb0JDO0FBQXBCLE1BQTRDQyxzREFBUSxDQUFDLEVBQUQsQ0FBMUQ7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2RGLHdCQUFvQixDQUFDSixZQUFELENBQXBCO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNFO0FBQUEs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IGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3NlY3JldC9baWRdLmpzXCIpO1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWRtaW5TZWNyZXRIZWFkZXIgZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzL0hlYWRlcnMvQWRtaW5TZWNyZXRIZWFkZXJcIjtcclxuaW1wb3J0IFNlY3JldEhlYWRlciBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvSGVhZGVycy9TZWNyZXRIZWFkZXJcIjtcclxuaW1wb3J0IFBhcnRpY2lwYW50cyBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvUGFydGljaXBhbnRzXCI7XHJcbmltcG9ydCBTb3J0IGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9Tb3J0XCI7XHJcblxyXG5mdW5jdGlvbiBTZWNyZXQoeyBwYXJ0aWNpcGFudHMsIGhhc0RyZXcsIGlzQWRtaW4gfSkge1xyXG4gIGNvbnN0IFtsb2NhbFBhcnRpY2lwYW50cywgc2V0TG9jYWxQYXJ0aWNpcGFudHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TG9jYWxQYXJ0aWNpcGFudHMocGFydGljaXBhbnRzKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7aXNBZG1pbiAmJiA8QWRtaW5TZWNyZXRIZWFkZXIgLz59XHJcbiAgICAgIHshaXNBZG1pbiAmJiAoXHJcbiAgICAgICAgPFNlY3JldEhlYWRlclxyXG4gICAgICAgICAgb25BZGRQYXJ0aWNpcGFudD17KHBhcnRpY2lwYW50KSA9PlxyXG4gICAgICAgICAgICBzZXRMb2NhbFBhcnRpY2lwYW50cyhbLi4ubG9jYWxQYXJ0aWNpcGFudHMsIHBhcnRpY2lwYW50XSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICA8UGFydGljaXBhbnRzXHJcbiAgICAgICAgc2hvd0J1dHRvbj17aXNBZG1pbn1cclxuICAgICAgICBwYXJ0aWNpcGFudHM9e2xvY2FsUGFydGljaXBhbnRzfVxyXG4gICAgICAgIHNldFBhcnRpY2lwYW50cz17c2V0TG9jYWxQYXJ0aWNpcGFudHN9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtpc0FkbWluICYmIDxTb3J0IGhhc0RyZXc9e2hhc0RyZXd9IC8+fVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFNlY3JldEJ5SWQoY29udGV4dC5xdWVyeSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyAuLi5kYXRhLCAuLi5jb250ZXh0LnF1ZXJ5IH0sXHJcbiAgfTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0U2VjcmV0QnlJZCh7IGlkLCBhZG1pbktleSB9KSB7XHJcbiAgY29uc3QgeyBORVhUX1BVQkxJQ19BUElfVVJMIH0gPSBwcm9jZXNzLmVudjtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke05FWFRfUFVCTElDX0FQSV9VUkx9L3NlY3JldC8ke2lkfWAsIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcclxuICAgICAgXCJhZG1pbi1rZXlcIjogYWRtaW5LZXksXHJcbiAgICB9KSxcclxuICB9KTtcclxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWNyZXQ7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMTVweCAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnNlY29uZGFyeX07XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b24ocHJvcHMpIHtcclxuICByZXR1cm4gPFN0eWxlZEJ1dHRvbiB7Li4ucHJvcHN9IC8+O1xyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBCYWNrZ3JvdW5kID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYmFja2dyb3VuZC5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlQ29udGFpbmVyU2VjcmV0KHsgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiA8QmFja2dyb3VuZD57Y2hpbGRyZW59PC9CYWNrZ3JvdW5kPjtcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgSW1hZ2VDb250YWluZXJTZWNyZXQgZnJvbSBcIi4uL0NvbnRhaW5lcnMvSW1hZ2VDb250YWluZXJTZWNyZXRcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4uL0xvZ29cIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCIuLi9JbnB1dFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmxpZ2h0fTtcclxuYDtcclxuXHJcbmNvbnN0IERpdkZvcm0gPSBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5saWdodH07XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRtaW5TZWNyZXRIZWFkZXIoKSB7XHJcbiAgY29uc3QgW2xpbmssIHNldExpbmtdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRMaW5rKGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59JHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9YCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEltYWdlQ29udGFpbmVyU2VjcmV0PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxMb2dvIC8+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8RGl2Rm9ybT5cclxuICAgICAgICA8cD5Db21wYXJ0aWxoZSBlc3NhIHNhbGEgY29tIHNldXMgYW1pZ29zITwvcD5cclxuICAgICAgICA8SW5wdXQgdmFsdWU9e2xpbmt9IGRpc2FibGVkIC8+XHJcbiAgICAgIDwvRGl2Rm9ybT5cclxuICAgIDwvSW1hZ2VDb250YWluZXJTZWNyZXQ+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IEltYWdlQ29udGFpbmVyU2VjcmV0IGZyb20gXCIuLi9Db250YWluZXJzL0ltYWdlQ29udGFpbmVyU2VjcmV0XCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9Mb2dvXCI7XHJcbmltcG9ydCBOYW1lRW1haWxGb3JtIGZyb20gXCIuLi9OYW1lRW1haWxGb3JtXCI7XHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmxpZ2h0fTtcclxuYDtcclxuXHJcbmNvbnN0IERpdkZvcm0gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VjcmV0SGVhZGVyKHsgb25BZGRQYXJ0aWNpcGFudCB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoeyBuYW1lLCBlbWFpbCB9KSA9PiB7XHJcbiAgICBjb25zdCB7IE5FWFRfUFVCTElDX0FQSV9VUkwgfSA9IHByb2Nlc3MuZW52O1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgJHtORVhUX1BVQkxJQ19BUElfVVJMfS9zZWNyZXQvJHtpZH0vcGFydGljaXBhbnRzYCxcclxuICAgICAge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgbmFtZSxcclxuICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgaGFuZGxlUmVzcG9uc2UoeyBuYW1lLCBlbWFpbCwgcmVzcG9uc2U6IGF3YWl0IGRhdGEuanNvbigpIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlUmVzcG9uc2UgPSAoeyBuYW1lLCBlbWFpbCwgcmVzcG9uc2UgfSkgPT4ge1xyXG4gICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgb25BZGRQYXJ0aWNpcGFudCh7IG5hbWUsIGVtYWlsLCBleHRlcm5hbElkOiByZXNwb25zZS5pZCB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEltYWdlQ29udGFpbmVyU2VjcmV0PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxMb2dvIC8+XHJcbiAgICAgICAgPHA+Vm9jw6ogZm9pIGNvbnZpZGFkbyBwYXJhIHBhcnRpY2lwYXIgZGVzc2UgYW1pZ28gc2VjcmV0byE8L3A+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8RGl2Rm9ybT5cclxuICAgICAgICA8TmFtZUVtYWlsRm9ybSBidXR0b25UZXh0PVwiUGFydGljaXBhclwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IC8+XHJcbiAgICAgIDwvRGl2Rm9ybT5cclxuICAgIDwvSW1hZ2VDb250YWluZXJTZWNyZXQ+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgcGFkZGluZzogMjBweDtcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeUxpZ2h0fTtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB3aWR0aDogODglO1xyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXRDb21wb25lbnQocHJvcHMpIHtcclxuICByZXR1cm4gPElucHV0IHsuLi5wcm9wc30gLz47XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IEgxID0gc3R5bGVkLmgxYFxyXG4gIGZvbnQtc2l6ZTogNjRweDtcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMubGlnaHR9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9nbygpIHtcclxuICByZXR1cm4gPEgxPntcIntEZXZ9IE9jdWx0b1wifTwvSDE+O1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi9JbnB1dFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIGZsZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gID4gaW5wdXQsXHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBOYW1lRW1haWxGb3JtKHsgYnV0dG9uVGV4dCwgb25TdWJtaXQgfSkge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBvblN1Ym1pdCh7IG5hbWUsIGVtYWlsIH0pO1xyXG4gICAgc2V0TmFtZShcIlwiKTtcclxuICAgIHNldEVtYWlsKFwiXCIpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICA8SW5wdXRcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNldSBub21lXCJcclxuICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT4gc2V0TmFtZSh0YXJnZXQudmFsdWUpfVxyXG4gICAgICAvPlxyXG4gICAgICA8SW5wdXRcclxuICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2V1IGVtYWlsXCJcclxuICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHNldEVtYWlsKHRhcmdldC52YWx1ZSl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxCdXR0b24+e2J1dHRvblRleHR9PC9CdXR0b24+XHJcbiAgICA8L0Zvcm0+XHJcbiAgKTtcclxufVxyXG5cclxuTmFtZUVtYWlsRm9ybS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYnV0dG9uVGV4dDogXCJDcmlhclwiLFxyXG4gIG9uU3VibWl0OiAoKSA9PiB7fSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hbWVFbWFpbEZvcm07XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IFJpRGVsZXRlQmluMkZpbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvcmlcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBINCA9IHN0eWxlZC5oNGBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYDtcclxuXHJcbmNvbnN0IFBhcnRpY2lwYW50RGl2ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBQYXJ0aWNpcGFudERlbGV0ZSA9IHN0eWxlZC5kaXZgXHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IFBhcnRpY2lwYW50ID0gKHsgc2hvd0J1dHRvbiwgbmFtZSwgZW1haWwsIG9uRGVsZXRlIH0pID0+IChcclxuICA8UGFydGljaXBhbnREaXY+XHJcbiAgICB7c2hvd0J1dHRvbiAmJiAoXHJcbiAgICAgIDxQYXJ0aWNpcGFudERlbGV0ZSBvbkNsaWNrPXtvbkRlbGV0ZX0+XHJcbiAgICAgICAgPFJpRGVsZXRlQmluMkZpbGwgLz5cclxuICAgICAgPC9QYXJ0aWNpcGFudERlbGV0ZT5cclxuICAgICl9XHJcbiAgICB7bmFtZX0gKHtlbWFpbH0pXHJcbiAgPC9QYXJ0aWNpcGFudERpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhcnRpY2lwYW50cyh7XHJcbiAgc2hvd0J1dHRvbixcclxuICBwYXJ0aWNpcGFudHMsXHJcbiAgc2V0UGFydGljaXBhbnRzLFxyXG59KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBpZCwgYWRtaW5LZXkgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBkZWxldGVBUElQYXJ0aWNpcGFudCA9IGFzeW5jIChwYXJ0aWNpcGFudElkKSA9PiB7XHJcbiAgICBjb25zdCB7IE5FWFRfUFVCTElDX0FQSV9VUkwgfSA9IHByb2Nlc3MuZW52O1xyXG4gICAgcmV0dXJuIGF3YWl0IGZldGNoKFxyXG4gICAgICBgJHtORVhUX1BVQkxJQ19BUElfVVJMfS9zZWNyZXQvJHtpZH0vcGFydGljaXBhbnRzLyR7cGFydGljaXBhbnRJZH1gLFxyXG4gICAgICB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcclxuICAgICAgICAgIFwiYWRtaW4ta2V5XCI6IGFkbWluS2V5LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH07XHJcbiAgY29uc3QgZGVsZXRlUGFydGljaXBhbnQgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIGNvbnN0IHsgc3RhdHVzIH0gPSBhd2FpdCBkZWxldGVBUElQYXJ0aWNpcGFudChpZCk7XHJcbiAgICBpZiAoc3RhdHVzID09PSAyMDQpIHtcclxuICAgICAgc2V0UGFydGljaXBhbnRzKFxyXG4gICAgICAgIHBhcnRpY2lwYW50cy5maWx0ZXIoKHsgZXh0ZXJuYWxJZCB9KSA9PiBleHRlcm5hbElkICE9PSBpZClcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEg0PlBhcnRpY2lwYW50ZXM6PC9IND5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICB7cGFydGljaXBhbnRzLmxlbmd0aCA9PT0gMCAmJiAoXHJcbiAgICAgICAgICA8cD5OZW5odW0gcGFydGljaXBhbnRlIGNhZGFzdHJhZG8gYWluZGE8L3A+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7cGFydGljaXBhbnRzLm1hcCgoeyBuYW1lLCBlbWFpbCwgZXh0ZXJuYWxJZCB9KSA9PiB7XHJcbiAgICAgICAgICA8UGFydGljaXBhbnRcclxuICAgICAgICAgICAga2V5PXtgcGFydGljaXBhbnQtJHtleHRlcm5hbElkfWB9XHJcbiAgICAgICAgICAgIHNob3dCdXR0b249e3Nob3dCdXR0b259XHJcbiAgICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICAgIGVtYWlsPXtlbWFpbH1cclxuICAgICAgICAgICAgb25EZWxldGU9eygpID0+IGRlbGV0ZVBhcnRpY2lwYW50KGV4dGVybmFsSWQpfVxyXG4gICAgICAgICAgLz47XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU29ydCh7IGhhc0RyZXcgfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQsIGFkbWluS2V5IH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgW2RyZXcsIHNldERyZXddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBEUkVXX1NUQVRVUyA9IGRyZXcgfHwgaGFzRHJldztcclxuICBjb25zdCBoYW5kbGVTb3J0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgeyBORVhUX1BVQkxJQ19BUElfVVJMIH0gPSBwcm9jZXNzLmVudjtcclxuXHJcbiAgICBjb25zdCB7IHN0YXR1cyB9ID0gYXdhaXQgZmV0Y2goYCR7TkVYVF9QVUJMSUNfQVBJX1VSTH0vc2VjcmV0LyR7aWR9L2RyYXdgLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe1xyXG4gICAgICAgIFwiYWRtaW4ta2V5XCI6IGFkbWluS2V5LFxyXG4gICAgICB9KSxcclxuICAgIH0pO1xyXG4gICAgaWYgKHN0YXR1cyA9PT0gMjAwKSBzZXREcmV3KHRydWUpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIHtEUkVXX1NUQVRVUyAmJiA8cD5PIHNvcnRlaW8gasOhIGZvaSByZWFsaXphZG8uPC9wPn1cclxuICAgICAgeyFEUkVXX1NUQVRVUyAmJiA8QnV0dG9uIG9uY2xpY2s9e2hhbmRsZVNvcnR9PlNvcnRlYXI8L0J1dHRvbj59XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL3JpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9