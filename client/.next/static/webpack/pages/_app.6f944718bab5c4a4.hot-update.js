"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/build-client */ \"./api/build-client.js\");\n\n\n\nconst AppComponent = (param)=>{\n    let { Component, pageProps, currentUser } = param;\n    return(//<Header>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps,\n        currentUser: currentUser\n    }, void 0, false, {\n        fileName: \"C:\\\\Microservices\\\\ticketing\\\\client\\\\pages\\\\_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined));\n};\n_c = AppComponent;\nAppComponent.getInitialProps = async (appContext)=>{\n    // this is getting executed from the server side\n    //const cookies = req.cookie;\n    const { data } = await (0,_api_build_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(appContext.ctx.req).get(\"/api/users/currentuser\");\n    const pageProps = await appContext.Component.getInitialProps(appContext.ctx.req);\n    console.log(pageProps);\n    return data;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppComponent);\nvar _c;\n$RefreshReg$(_c, \"AppComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMEM7QUFDSTtBQUU5QyxNQUFNQyxlQUFlO1FBQUMsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRTtJQUN6RCxPQUNFLFVBQVU7a0JBQ1YsOERBQUNGO1FBQVcsR0FBR0MsU0FBUztRQUFFQyxhQUFhQTs7Ozs7O0FBRzNDO0tBTk1IO0FBUU5BLGFBQWFJLGVBQWUsR0FBRyxPQUFPQztJQUNwQyxnREFBZ0Q7SUFDaEQsNkJBQTZCO0lBRTdCLE1BQU0sRUFBQ0MsSUFBSSxFQUFDLEdBQUcsTUFBTVAsNkRBQVdBLENBQUNNLFdBQVdFLEdBQUcsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLENBQ3REO0lBRUYsTUFBTVAsWUFBWSxNQUFNRyxXQUFXSixTQUFTLENBQUNHLGVBQWUsQ0FBQ0MsV0FBV0UsR0FBRyxDQUFDQyxHQUFHO0lBQy9FRSxRQUFRQyxHQUFHLENBQUNUO0lBRVosT0FBT0k7QUFDVDtBQUVBLCtEQUFlTixZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzc1wiO1xyXG5pbXBvcnQgYnVpbGRDbGllbnQgZnJvbSBcIi4uL2FwaS9idWlsZC1jbGllbnRcIjtcclxuXHJcbmNvbnN0IEFwcENvbXBvbmVudCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzLCBjdXJyZW50VXNlciB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIC8vPEhlYWRlcj5cclxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gY3VycmVudFVzZXI9e2N1cnJlbnRVc2VyfSAvPlxyXG4gICAgLy88L0hlYWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuQXBwQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChhcHBDb250ZXh0KSA9PiB7XHJcbiAgLy8gdGhpcyBpcyBnZXR0aW5nIGV4ZWN1dGVkIGZyb20gdGhlIHNlcnZlciBzaWRlXHJcbiAgLy9jb25zdCBjb29raWVzID0gcmVxLmNvb2tpZTtcclxuXHJcbiAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYnVpbGRDbGllbnQoYXBwQ29udGV4dC5jdHgucmVxKS5nZXQoXHJcbiAgICBcIi9hcGkvdXNlcnMvY3VycmVudHVzZXJcIlxyXG4gICk7XHJcbiAgY29uc3QgcGFnZVByb3BzID0gYXdhaXQgYXBwQ29udGV4dC5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQuY3R4LnJlcSk7XHJcbiAgY29uc29sZS5sb2cocGFnZVByb3BzKTtcclxuICBcclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcENvbXBvbmVudDtcclxuIl0sIm5hbWVzIjpbImJ1aWxkQ2xpZW50IiwiQXBwQ29tcG9uZW50IiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY3VycmVudFVzZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJhcHBDb250ZXh0IiwiZGF0YSIsImN0eCIsInJlcSIsImdldCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});