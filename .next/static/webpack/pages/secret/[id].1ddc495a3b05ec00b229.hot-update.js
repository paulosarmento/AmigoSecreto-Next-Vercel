webpackHotUpdate_N_E("pages/secret/[id]",{

/***/ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":
false,

/***/ "./src/components/Participants.js":
/*!****************************************!*\
  !*** ./src/components/Participants.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Participants; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");



var _jsxFileName = "C:\\Serverless\\front-end\\src\\components\\Participants.js",
    _this = undefined;



var H4 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h4.withConfig({
  displayName: "Participants__H4",
  componentId: "quou7q-0"
})(["text-align:center;"]);
_c = H4;
var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Participants__Container",
  componentId: "quou7q-1"
})(["text-align:center;display:flex;padding:5px 20px;justify-content:center;align-items:center;flex-direction:column;"]);
_c2 = Container;
var ParticipantDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Participants__ParticipantDiv",
  componentId: "quou7q-2"
})(["display:flex;align-items:center;"]);
_c3 = ParticipantDiv;
var ParticipantDelete = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Participants__ParticipantDelete",
  componentId: "quou7q-3"
})(["color:", ";cursor:pointer;"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary;
});
_c4 = ParticipantDelete;

var Participant = function Participant(_ref2) {
  var showButton = _ref2.showButton;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ParticipantDiv, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ParticipantDelete, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_2__["RiDeleteBin2Fill"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }, _this), "Nome (email@gmail.com)"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 3
  }, _this);
};

_c5 = Participant;
function Participants(_ref3) {
  var showButton = _ref3.showButton;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(H4, {
      children: "Participantes:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Participant, {
        showButton: showButton
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
_c6 = Participants;

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "H4");
$RefreshReg$(_c2, "Container");
$RefreshReg$(_c3, "ParticipantDiv");
$RefreshReg$(_c4, "ParticipantDelete");
$RefreshReg$(_c5, "Participant");
$RefreshReg$(_c6, "Participants");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGFydGljaXBhbnRzLmpzIl0sIm5hbWVzIjpbIkg0Iiwic3R5bGVkIiwiaDQiLCJDb250YWluZXIiLCJkaXYiLCJQYXJ0aWNpcGFudERpdiIsIlBhcnRpY2lwYW50RGVsZXRlIiwidGhlbWUiLCJjb2xvcnMiLCJwcmltYXJ5IiwiUGFydGljaXBhbnQiLCJzaG93QnV0dG9uIiwiUGFydGljaXBhbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0MseURBQU0sQ0FBQ0MsRUFBVjtBQUFBO0FBQUE7QUFBQSwwQkFBUjtLQUFNRixFO0FBSU4sSUFBTUcsU0FBUyxHQUFHRix5REFBTSxDQUFDRyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdIQUFmO01BQU1ELFM7QUFTTixJQUFNRSxjQUFjLEdBQUdKLHlEQUFNLENBQUNHLEdBQVY7QUFBQTtBQUFBO0FBQUEsd0NBQXBCO01BQU1DLGM7QUFLTixJQUFNQyxpQkFBaUIsR0FBR0wseURBQU0sQ0FBQ0csR0FBVjtBQUFBO0FBQUE7QUFBQSxtQ0FDWjtBQUFBLE1BQUdHLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxPQUE1QjtBQUFBLENBRFksQ0FBdkI7TUFBTUgsaUI7O0FBS04sSUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxNQUFHQyxVQUFILFNBQUdBLFVBQUg7QUFBQSxzQkFDbEIscUVBQUMsY0FBRDtBQUFBLDRCQUNFLHFFQUFDLGlCQUFEO0FBQUEsNkJBQ0UscUVBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEa0I7QUFBQSxDQUFwQjs7TUFBTUQsVztBQVNTLFNBQVNFLFlBQVQsUUFBc0M7QUFBQSxNQUFkRCxVQUFjLFNBQWRBLFVBQWM7QUFDbkQsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyxTQUFEO0FBQUEsNkJBQ0UscUVBQUMsV0FBRDtBQUFhLGtCQUFVLEVBQUVBO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQSxrQkFERjtBQVFEO01BVHVCQyxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlY3JldC9baWRdLjFkZGM0OTVhM2IwNWVjMDBiMjI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBSaURlbGV0ZUJpbjJGaWxsIH0gZnJvbSBcInJlYWN0LWljb25zL3JpXCI7XHJcblxyXG5jb25zdCBINCA9IHN0eWxlZC5oNGBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYDtcclxuXHJcbmNvbnN0IFBhcnRpY2lwYW50RGl2ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBQYXJ0aWNpcGFudERlbGV0ZSA9IHN0eWxlZC5kaXZgXHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IFBhcnRpY2lwYW50ID0gKHsgc2hvd0J1dHRvbiB9KSA9PiAoXHJcbiAgPFBhcnRpY2lwYW50RGl2PlxyXG4gICAgPFBhcnRpY2lwYW50RGVsZXRlPlxyXG4gICAgICA8UmlEZWxldGVCaW4yRmlsbCAvPlxyXG4gICAgPC9QYXJ0aWNpcGFudERlbGV0ZT5cclxuICAgIE5vbWUgKGVtYWlsQGdtYWlsLmNvbSlcclxuICA8L1BhcnRpY2lwYW50RGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFydGljaXBhbnRzKHsgc2hvd0J1dHRvbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIND5QYXJ0aWNpcGFudGVzOjwvSDQ+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFBhcnRpY2lwYW50IHNob3dCdXR0b249e3Nob3dCdXR0b259IC8+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9