webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Steps.js":
/*!*********************************!*\
  !*** ./src/components/Steps.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Steps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _StepCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StepCard */ "./src/components/StepCard.js");


var _jsxFileName = "C:\\Serverless\\front-end\\src\\components\\Steps.js";


var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Steps__Container",
  componentId: "sc-1cd1uhm-0"
})(["display:flex;justify-content:center;align-items:center;@media (max-width:500px){flex-direction:column;}"]);
_c = Container;
var H1 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "Steps__H1",
  componentId: "sc-1cd1uhm-1"
})(["color:", ";text-align:center;"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary;
});
_c2 = H1;
function Steps() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(H1, {
      children: "Como funciona?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StepCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "1. Crie seu sorteio ",
        description: "Digite seu nome e e-mail, e crie o seu sorteio de forma f\xE1cil e sem complica\xE7\xF5es."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StepCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "2. Compartilhe o link ",
        description: "Compartilhe seu link de sorteio com seus amigos e todos que participar\xE3o da brincadeira!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StepCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "3. Sorteie ",
        description: "Quando todos estiverem prontos, realize o sorteio. Cada pessoa recebera por email seu respectivo par."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
_c3 = Steps;

var _c, _c2, _c3;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "H1");
$RefreshReg$(_c3, "Steps");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3RlcHMuanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiSDEiLCJoMSIsInRoZW1lIiwiY29sb3JzIiwicHJpbWFyeSIsIlN0ZXBzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwrR0FBZjtLQUFNRixTO0FBU04sSUFBTUcsRUFBRSxHQUFHRix5REFBTSxDQUFDRyxFQUFWO0FBQUE7QUFBQTtBQUFBLHNDQUNHO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLE9BQTVCO0FBQUEsQ0FESCxDQUFSO01BQU1KLEU7QUFLUyxTQUFTSyxLQUFULEdBQWlCO0FBQzlCLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMsU0FBRDtBQUFBLDhCQUNFLHFFQUFDLGlEQUFEO0FBQ0UsYUFBSyxFQUFDLHNCQURSO0FBRUUsbUJBQVcsRUFBQztBQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUtFLHFFQUFDLGlEQUFEO0FBQ0UsYUFBSyxFQUFDLHdCQURSO0FBRUUsbUJBQVcsRUFBQztBQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQVNFLHFFQUFDLGlEQUFEO0FBQ0UsYUFBSyxFQUFDLGFBRFI7QUFFRSxtQkFBVyxFQUFDO0FBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUEsa0JBREY7QUFtQkQ7TUFwQnVCQSxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI4YzllMDViZjA1MjMwZjQ5NDUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgU3RlcENhcmQgZnJvbSBcIi4vU3RlcENhcmRcIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBIMSA9IHN0eWxlZC5oMWBcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RlcHMoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIMT5Db21vIGZ1bmNpb25hPzwvSDE+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFN0ZXBDYXJkXHJcbiAgICAgICAgICB0aXRsZT1cIjEuIENyaWUgc2V1IHNvcnRlaW8gXCJcclxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiRGlnaXRlIHNldSBub21lIGUgZS1tYWlsLCBlIGNyaWUgbyBzZXUgc29ydGVpbyBkZSBmb3JtYSBmw6FjaWwgZSBzZW0gY29tcGxpY2HDp8O1ZXMuXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxTdGVwQ2FyZFxyXG4gICAgICAgICAgdGl0bGU9XCIyLiBDb21wYXJ0aWxoZSBvIGxpbmsgXCJcclxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQ29tcGFydGlsaGUgc2V1IGxpbmsgZGUgc29ydGVpbyBjb20gc2V1cyBhbWlnb3MgZSB0b2RvcyBxdWUgcGFydGljaXBhcsOjbyBkYSBicmluY2FkZWlyYSFcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFN0ZXBDYXJkXHJcbiAgICAgICAgICB0aXRsZT1cIjMuIFNvcnRlaWUgXCJcclxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiUXVhbmRvIHRvZG9zIGVzdGl2ZXJlbSBwcm9udG9zLCByZWFsaXplIG8gc29ydGVpby4gQ2FkYSBwZXNzb2EgcmVjZWJlcmEgcG9yIGVtYWlsIHNldSByZXNwZWN0aXZvIHBhci5cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9