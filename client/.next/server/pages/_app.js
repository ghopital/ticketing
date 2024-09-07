"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./api/build-client.js":
/*!*****************************!*\
  !*** ./api/build-client.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst buildClient = (req, res, next)=>{\n    if (true) {\n        return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n            baseURL: `http://ingress-nginx-controller.ingress-nginx.svc.cluster.local`,\n            headers: req.headers\n        });\n    } else {}\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildClient);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvYnVpbGQtY2xpZW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBRTFCLE1BQU1DLGNBQWMsQ0FBQ0MsS0FBS0MsS0FBS0M7SUFDM0IsSUFBSSxJQUE2QixFQUFFO1FBQy9CLE9BQU9KLG9EQUFZLENBQUM7WUFDaEJNLFNBQVMsQ0FBQywrREFBK0QsQ0FBQztZQUMxRUMsU0FBU0wsSUFBSUssT0FBTztRQUN4QjtJQUNGLE9BQU8sRUFJTjtBQUNQO0FBRUEsaUVBQWVOLFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9hcGkvYnVpbGQtY2xpZW50LmpzP2M2ZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgYnVpbGRDbGllbnQgPSAocmVxLCByZXMsIG5leHQpID0+e1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICByZXR1cm4gYXhpb3MuY3JlYXRlKHtcclxuICAgICAgICAgICAgYmFzZVVSTDogYGh0dHA6Ly9pbmdyZXNzLW5naW54LWNvbnRyb2xsZXIuaW5ncmVzcy1uZ2lueC5zdmMuY2x1c3Rlci5sb2NhbGAsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gYXhpb3MuY3JlYXRlKHtcclxuICAgICAgICAgICAgYmFzZVVSTDogYC9gICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBidWlsZENsaWVudCJdLCJuYW1lcyI6WyJheGlvcyIsImJ1aWxkQ2xpZW50IiwicmVxIiwicmVzIiwibmV4dCIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/build-client.js\n");

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Header = ({ currentUser })=>{\n    const links = [\n        !currentUser && {\n            label: \"Sing Up\",\n            href: \"/auth/signup\"\n        },\n        !currentUser && {\n            label: \"Sing In\",\n            href: \"/auth/signin\"\n        },\n        currentUser && {\n            label: \"Sing Out\",\n            href: \"/auth/signout\"\n        }\n    ].filter((linkCongig)=>linkCongig).map((link, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: link.href,\n                className: \"nav-item\",\n                children: link.label\n            }, void 0, false, {\n                fileName: \"C:\\\\Microservices\\\\ticketing\\\\client\\\\components\\\\header.js\",\n                lineNumber: 12,\n                columnNumber: 11\n            }, undefined)\n        }, index, false, {\n            fileName: \"C:\\\\Microservices\\\\ticketing\\\\client\\\\components\\\\header.js\",\n            lineNumber: 11,\n            columnNumber: 9\n        }, undefined));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Ticketing App\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Microservices\\\\ticketing\\\\client\\\\components\\\\header.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"navbar navbar-light bg-light\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: \"navbar-brand\",\n                        href: \"/\",\n                        children: \"GitTik\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Microservices\\\\ticketing\\\\client\\\\components\\\\header.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"d-flex justify-content-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: links\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Microservices\\\\ticketing\\\\client\\\\components\\\\header.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Microservices\\\\ticketing\\\\client\\\\components\\\\header.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Microservices\\\\ticketing\\\\client\\\\components\\\\header.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Microservices\\\\ticketing\\\\client\\\\components\\\\header.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNkI7QUFFN0IsTUFBTUMsU0FBUyxDQUFDLEVBQUVDLFdBQVcsRUFBRTtJQUUzQixNQUFNQyxRQUFRO1FBQ1YsQ0FBQ0QsZUFBZTtZQUFFRSxPQUFNO1lBQVdDLE1BQUs7UUFBYztRQUN0RCxDQUFDSCxlQUFlO1lBQUVFLE9BQU07WUFBV0MsTUFBSztRQUFjO1FBQ3RESCxlQUFlO1lBQUVFLE9BQU07WUFBWUMsTUFBSztRQUFlO0tBQzFELENBQUNDLE1BQU0sQ0FBQ0MsQ0FBQUEsYUFBY0EsWUFDdEJDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDUiw4REFBQ0M7c0JBQ0MsNEVBQUNYLGtEQUFJQTtnQkFBQ0ssTUFBTUksS0FBS0osSUFBSTtnQkFBRU8sV0FBVTswQkFBWUgsS0FBS0wsS0FBSzs7Ozs7O1dBRGhETTs7Ozs7SUFNZixxQkFDRSw4REFBQ0c7OzBCQUNDLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBSUgsV0FBVTs7a0NBQ2IsOERBQUNaLGtEQUFJQTt3QkFBQ1ksV0FBVTt3QkFBZVAsTUFBSztrQ0FBSTs7Ozs7O2tDQUd4Qyw4REFBQ1E7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUNJO3NDQUNFYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNYjtBQUVBLGlFQUFlRixNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9oZWFkZXIuanM/YzA5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoeyBjdXJyZW50VXNlciB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgbGlua3MgPSBbXHJcbiAgICAgICAgIWN1cnJlbnRVc2VyICYmIHsgbGFiZWw6J1NpbmcgVXAnLCBocmVmOicvYXV0aC9zaWdudXAnfSxcclxuICAgICAgICAhY3VycmVudFVzZXIgJiYgeyBsYWJlbDonU2luZyBJbicsIGhyZWY6Jy9hdXRoL3NpZ25pbid9LFxyXG4gICAgICAgIGN1cnJlbnRVc2VyICYmIHsgbGFiZWw6J1NpbmcgT3V0JywgaHJlZjonL2F1dGgvc2lnbm91dCd9LFxyXG4gICAgXS5maWx0ZXIobGlua0NvbmdpZyA9PiBsaW5rQ29uZ2lnKVxyXG4gICAgLm1hcCgobGluaywgaW5kZXgpID0+IChcclxuICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtsaW5rLmhyZWZ9IGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+e2xpbmsubGFiZWx9PC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICkpXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPlRpY2tldGluZyBBcHA8L2gxPlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItbGlnaHQgYmctbGlnaHRcIj5cclxuICAgICAgICA8TGluayBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgR2l0VGlrXHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAge2xpbmtzfSAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwibmFtZXMiOlsiTGluayIsIkhlYWRlciIsImN1cnJlbnRVc2VyIiwibGlua3MiLCJsYWJlbCIsImhyZWYiLCJmaWx0ZXIiLCJsaW5rQ29uZ2lnIiwibWFwIiwibGluayIsImluZGV4IiwibGkiLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsIm5hdiIsInVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/header.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/build-client */ \"./api/build-client.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ \"./components/header.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_build_client__WEBPACK_IMPORTED_MODULE_2__]);\n_api_build_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst AppComponent = ({ Component, pageProps, currentUser })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                currentUser: currentUser\n            }, void 0, false, {\n                fileName: \"C:\\\\Microservices\\\\ticketing\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps,\n                currentUser: currentUser\n            }, void 0, false, {\n                fileName: \"C:\\\\Microservices\\\\ticketing\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Microservices\\\\ticketing\\\\client\\\\pages\\\\_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\nAppComponent.getInitialProps = async (appContext)=>{\n    // this is getting executed from the server side\n    //const cookies = req.cookie;\n    let pageProps = {};\n    try {\n        if (appContext.Component.getInitialProps) {\n            pageProps = await appContext.Component.getInitialProps(appContext.ctx);\n        }\n        const response = await (0,_api_build_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(appContext.ctx.req).get(\"/api/users/currentuser\");\n        return {\n            pageProps,\n            ...response.data\n        };\n    } catch (error) {\n        console.log(error);\n        return {\n            pageProps\n        };\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppComponent);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ0k7QUFDSjtBQUUxQyxNQUFNRSxlQUFlLENBQUMsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRTtJQUN6RCxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDTCwwREFBTUE7Z0JBQUNJLGFBQWFBOzs7Ozs7MEJBQ3JCLDhEQUFDRjtnQkFBVyxHQUFHQyxTQUFTO2dCQUFFQyxhQUFhQTs7Ozs7Ozs7Ozs7O0FBRzdDO0FBRUFILGFBQWFLLGVBQWUsR0FBRyxPQUFPQztJQUNwQyxnREFBZ0Q7SUFDaEQsNkJBQTZCO0lBQzdCLElBQUlKLFlBQVksQ0FBQztJQUNqQixJQUFJO1FBQ0YsSUFBSUksV0FBV0wsU0FBUyxDQUFDSSxlQUFlLEVBQUU7WUFDeENILFlBQVksTUFBTUksV0FBV0wsU0FBUyxDQUFDSSxlQUFlLENBQUNDLFdBQVdDLEdBQUc7UUFDdkU7UUFFQSxNQUFNQyxXQUFXLE1BQU1WLDZEQUFXQSxDQUFDUSxXQUFXQyxHQUFHLENBQUNFLEdBQUcsRUFBRUMsR0FBRyxDQUN4RDtRQUdGLE9BQU87WUFBRVI7WUFBVyxHQUFHTSxTQUFTRyxJQUFJO1FBQUM7SUFDdkMsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWixPQUFPO1lBQUVWO1FBQVU7SUFDckI7QUFDRjtBQUVBLGlFQUFlRixZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzXCI7XHJcbmltcG9ydCBidWlsZENsaWVudCBmcm9tIFwiLi4vYXBpL2J1aWxkLWNsaWVudFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlclwiO1xyXG5cclxuY29uc3QgQXBwQ29tcG9uZW50ID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIGN1cnJlbnRVc2VyIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWRlciBjdXJyZW50VXNlcj17Y3VycmVudFVzZXJ9IC8+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gY3VycmVudFVzZXI9e2N1cnJlbnRVc2VyfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkFwcENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoYXBwQ29udGV4dCkgPT4ge1xyXG4gIC8vIHRoaXMgaXMgZ2V0dGluZyBleGVjdXRlZCBmcm9tIHRoZSBzZXJ2ZXIgc2lkZVxyXG4gIC8vY29uc3QgY29va2llcyA9IHJlcS5jb29raWU7XHJcbiAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xyXG4gIHRyeSB7XHJcbiAgICBpZiAoYXBwQ29udGV4dC5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XHJcbiAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IGFwcENvbnRleHQuQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0LmN0eCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBidWlsZENsaWVudChhcHBDb250ZXh0LmN0eC5yZXEpLmdldChcclxuICAgICAgXCIvYXBpL3VzZXJzL2N1cnJlbnR1c2VyXCJcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHsgcGFnZVByb3BzLCAuLi5yZXNwb25zZS5kYXRhIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIHJldHVybiB7IHBhZ2VQcm9wcyB9O1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcENvbXBvbmVudDtcclxuIl0sIm5hbWVzIjpbImJ1aWxkQ2xpZW50IiwiSGVhZGVyIiwiQXBwQ29tcG9uZW50IiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY3VycmVudFVzZXIiLCJkaXYiLCJnZXRJbml0aWFsUHJvcHMiLCJhcHBDb250ZXh0IiwiY3R4IiwicmVzcG9uc2UiLCJyZXEiLCJnZXQiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/bootstrap"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();