"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/Note.tsx":
/*!*************************************!*\
  !*** ./src/app/components/Note.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Note; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"(app-pages-browser)/./node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_BiSolidPencil_BiSolidTrash_react_icons_bi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=BiSolidPencil,BiSolidTrash!=!react-icons/bi */ \"(app-pages-browser)/./node_modules/react-icons/bi/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var pocketbase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pocketbase */ \"(app-pages-browser)/./node_modules/pocketbase/dist/pocketbase.es.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction formatDateAndTime(inputDate) {\n    var dateObj = new Date(inputDate);\n    var day = String(dateObj.getDate()).padStart(2, \"0\");\n    var month = String(dateObj.getMonth() + 1).padStart(2, \"0\"); // January is month 0\n    var year = dateObj.getFullYear();\n    return formatDate(\"\".concat(day, \"-\").concat(month, \"-\").concat(year));\n}\nfunction formatDate(inputDate) {\n    var _inputDate_split = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)(inputDate.split(\"-\"), 3), day = _inputDate_split[0], month = _inputDate_split[1], year = _inputDate_split[2];\n    return \"\".concat(new Date(year, month - 1, day).toLocaleDateString(\"en-US\", {\n        month: \"long\",\n        day: \"numeric\",\n        year: \"numeric\"\n    }));\n}\nfunction Note(param) {\n    var note = param.note, bgColor = param.bgColor, noteId = param.noteId;\n    _s();\n    var _ref = note || {}, id = _ref.id, title = _ref.title, content = _ref.content, created = _ref.created;\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(content), 2), textContent = _useState[0], setTextContent = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), showTextArea = _useState1[0], setShowTextArea = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), deleteButtonClicked = _useState2[0], setDeleteButtonClicked = _useState2[1];\n    var textAreaRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var deleteButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    function editNote() {\n        console.log(\"edit the note\");\n        setShowTextArea(!showTextArea);\n    }\n    function handleBlur() {\n        return _handleBlur.apply(this, arguments);\n    }\n    function _handleBlur() {\n        _handleBlur = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_5__._)(function() {\n            var pb, data;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        if (!deleteButtonClicked) return [\n                            3,\n                            1\n                        ];\n                        setDeleteButtonClicked(false);\n                        return [\n                            2\n                        ];\n                    case 1:\n                        console.log(\"Textarea lost focus!\");\n                        console.log(\"Note ID: \" + noteId);\n                        pb = new pocketbase__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"https://joodle.pockethost.io/\");\n                        // Example update data\n                        data = {\n                            content: textContent\n                        };\n                        return [\n                            4,\n                            pb.collection(\"notes\").update(noteId, data)\n                        ];\n                    case 2:\n                        _state.sent();\n                        setShowTextArea(!showTextArea);\n                        router.refresh();\n                        _state.label = 3;\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _handleBlur.apply(this, arguments);\n    }\n    function handleDelete() {\n        return _handleDelete.apply(this, arguments);\n    }\n    function _handleDelete() {\n        _handleDelete = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_5__._)(function() {\n            var pb;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        setDeleteButtonClicked(true);\n                        console.log(\"Delete the note\");\n                        pb = new pocketbase__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"https://joodle.pockethost.io/\");\n                        return [\n                            4,\n                            pb.collection(\"notes\")[\"delete\"](noteId)\n                        ];\n                    case 1:\n                        _state.sent();\n                        router.refresh();\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _handleDelete.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n        initial: {\n            x: -1000\n        },\n        animate: {\n            x: 0\n        },\n        transition: {\n            type: \"spring\",\n            stiffness: 50,\n            damping: 12,\n            duration: 0.5\n        },\n        className: \"\".concat(bgColor, \" bg-opacity-70 relative flex flex-col text-gray-800 rounded-3xl p-4 pb-1 w-60 h-60\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"contents\",\n                className: \"flex-1\",\n                children: [\n                    showTextArea && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        ref: textAreaRef,\n                        autoFocus: true,\n                        value: textContent,\n                        onChange: function(e) {\n                            return setTextContent(e.target.value);\n                        },\n                        className: \"h-44 resize-none bg-transparent border-none outline-none\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\maria\\\\Downloads\\\\sticky_notes-main\\\\Joodle\\\\src\\\\app\\\\components\\\\Note.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, this),\n                    !showTextArea && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"text-base pr-4 font-semibold hover:overflow-y-auto overflow-y-hidden h-44\",\n                        children: textContent\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\maria\\\\Downloads\\\\sticky_notes-main\\\\Joodle\\\\src\\\\app\\\\components\\\\Note.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\maria\\\\Downloads\\\\sticky_notes-main\\\\Joodle\\\\src\\\\app\\\\components\\\\Note.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"dateAndEdit\",\n                className: \"bottom-4 flex items-center mt-auto mb-2 justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xs \".concat(showTextArea ? \"text-transparent\" : \"text-black\"),\n                        children: formatDateAndTime(created)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\maria\\\\Downloads\\\\sticky_notes-main\\\\Joodle\\\\src\\\\app\\\\components\\\\Note.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center\",\n                        children: [\n                            showTextArea && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                ref: deleteButtonRef,\n                                onClick: handleDelete,\n                                className: \"flex items-center justify-center h-8 w-8 rounded-full bg-red-500 text-white hover:bg-transparent transition-all duration-300 ease-linear cursor-pointer mr-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BiSolidPencil_BiSolidTrash_react_icons_bi__WEBPACK_IMPORTED_MODULE_8__.BiSolidTrash, {\n                                    size: \"18\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\maria\\\\Downloads\\\\sticky_notes-main\\\\Joodle\\\\src\\\\app\\\\components\\\\Note.tsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\maria\\\\Downloads\\\\sticky_notes-main\\\\Joodle\\\\src\\\\app\\\\components\\\\Note.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: editNote,\n                                className: \"flex items-center justify-center h-8 w-8 rounded-full bg-black text-white hover:bg-transparent hover:text-black transition-all duration-300 ease-linear cursor-pointer\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BiSolidPencil_BiSolidTrash_react_icons_bi__WEBPACK_IMPORTED_MODULE_8__.BiSolidPencil, {\n                                    size: \"18\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\maria\\\\Downloads\\\\sticky_notes-main\\\\Joodle\\\\src\\\\app\\\\components\\\\Note.tsx\",\n                                    lineNumber: 129,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\maria\\\\Downloads\\\\sticky_notes-main\\\\Joodle\\\\src\\\\app\\\\components\\\\Note.tsx\",\n                                lineNumber: 123,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\maria\\\\Downloads\\\\sticky_notes-main\\\\Joodle\\\\src\\\\app\\\\components\\\\Note.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\maria\\\\Downloads\\\\sticky_notes-main\\\\Joodle\\\\src\\\\app\\\\components\\\\Note.tsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\maria\\\\Downloads\\\\sticky_notes-main\\\\Joodle\\\\src\\\\app\\\\components\\\\Note.tsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, this);\n}\n_s(Note, \"ru2IvzhPQuW+N9HZbnfKNapP8+4=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Note;\nvar _c;\n$RefreshReg$(_c, \"Note\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Ob3RlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUM2RDtBQUN0QjtBQUNFO0FBQ0w7QUFDUTtBQUU1QyxTQUFTTyxrQkFBa0JDLFNBQWM7SUFDdkMsSUFBTUMsVUFBVSxJQUFJQyxLQUFLRjtJQUN6QixJQUFNRyxNQUFNQyxPQUFPSCxRQUFRSSxPQUFPLElBQUlDLFFBQVEsQ0FBQyxHQUFHO0lBQ2xELElBQU1DLFFBQVFILE9BQU9ILFFBQVFPLFFBQVEsS0FBSyxHQUFHRixRQUFRLENBQUMsR0FBRyxNQUFNLHFCQUFxQjtJQUNwRixJQUFNRyxPQUFPUixRQUFRUyxXQUFXO0lBQ2hDLE9BQU9DLFdBQVcsR0FBVUosT0FBUEosS0FBSSxLQUFZTSxPQUFURixPQUFNLEtBQVEsT0FBTEU7QUFDdkM7QUFFQSxTQUFTRSxXQUFXWCxTQUFjO0lBQ2hDLElBQTJCQSxtQkFBQUEsK0RBQUFBLENBQUFBLFVBQVVZLEtBQUssQ0FBQyxVQUFwQ1QsTUFBb0JILHFCQUFmTyxRQUFlUCxxQkFBUlMsT0FBUVQ7SUFDM0IsT0FBTyxHQUlKLE9BSk8sSUFBSUUsS0FBS08sTUFBTUYsUUFBUSxHQUFHSixLQUFLVSxrQkFBa0IsQ0FBQyxTQUFTO1FBQ25FTixPQUFPO1FBQ1BKLEtBQUs7UUFDTE0sTUFBTTtJQUNSO0FBQ0Y7QUFFZSxTQUFTSyxLQUFLLEtBQThCO1FBQTVCQyxPQUFGLE1BQUVBLE1BQU1DLFVBQVIsTUFBUUEsU0FBU0MsU0FBakIsTUFBaUJBOztJQUM1QyxJQUF3Q0YsT0FBQUEsUUFBUSxDQUFDLEdBQXpDRyxLQUFnQ0gsS0FBaENHLElBQUlDLFFBQTRCSixLQUE1QkksT0FBT0MsVUFBcUJMLEtBQXJCSyxTQUFTQyxVQUFZTixLQUFaTTtJQUU1QixJQUFzQzFCLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQ3lCLGNBQXhDRSxjQUErQjNCLGNBQWxCNEIsaUJBQWtCNUI7SUFDdEMsSUFBd0NBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxZQUExQzZCLGVBQWlDN0IsZUFBbkI4QixrQkFBbUI5QjtJQUN4QyxJQUFzREEsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFlBQXhEK0Isc0JBQStDL0IsZUFBMUJnQyx5QkFBMEJoQztJQUV0RCxJQUFNaUMsY0FBY2hDLDZDQUFNQSxDQUFzQjtJQUNoRCxJQUFNaUMsa0JBQWtCakMsNkNBQU1BLENBQWlCO0lBQy9DLElBQU1rQyxTQUFTaEMsMERBQVNBO0lBRXhCLFNBQVNpQztRQUNQQyxRQUFRQyxHQUFHLENBQUM7UUFDWlIsZ0JBQWdCLENBQUNEO0lBQ25CO2FBRWVVO2VBQUFBOzthQUFBQTtRQUFBQSxjQUFmO2dCQVNVQyxJQUdBQzs7Ozs2QkFWSlYscUJBQUFBOzs7O3dCQUNGQyx1QkFBdUI7d0JBQ3ZCOzs7O3dCQUdBSyxRQUFRQyxHQUFHLENBQUM7d0JBQ1pELFFBQVFDLEdBQUcsQ0FBQyxjQUFjaEI7d0JBQ3BCa0IsS0FBSyxJQUFJdEMsa0RBQVVBLENBQUM7d0JBRTFCLHNCQUFzQjt3QkFDaEJ1QyxPQUFPOzRCQUNYaEIsU0FBU0U7d0JBQ1g7d0JBRUE7OzRCQUFNYSxHQUFHRSxVQUFVLENBQUMsU0FBU0MsTUFBTSxDQUFDckIsUUFBUW1COzs7d0JBQTVDO3dCQUNBWCxnQkFBZ0IsQ0FBQ0Q7d0JBQ2pCTSxPQUFPUyxPQUFPOzs7Ozs7OztRQUdsQjtlQXJCZUw7O2FBdUJBTTtlQUFBQTs7YUFBQUE7UUFBQUEsZ0JBQWY7Z0JBR1FMOzs7O3dCQUZOUix1QkFBdUI7d0JBQ3ZCSyxRQUFRQyxHQUFHLENBQUM7d0JBQ05FLEtBQUssSUFBSXRDLGtEQUFVQSxDQUFDO3dCQUUxQjs7NEJBQU1zQyxHQUFHRSxVQUFVLENBQUMsUUFBU0ksQ0FBQUEsU0FBTSxDQUFDeEI7Ozt3QkFBcEM7d0JBQ0FhLE9BQU9TLE9BQU87Ozs7OztRQUNoQjtlQVBlQzs7SUFTZixxQkFDRSw4REFBQzlDLGlEQUFNQSxDQUFDZ0QsR0FBRztRQUNUQyxTQUFTO1lBQUVDLEdBQUcsQ0FBQztRQUFLO1FBQ3BCQyxTQUFTO1lBQUVELEdBQUc7UUFBRTtRQUNoQkUsWUFBWTtZQUNWQyxNQUFNO1lBQ05DLFdBQVc7WUFDWEMsU0FBUztZQUNUQyxVQUFVO1FBQ1o7UUFDQUMsV0FBVyxHQUFXLE9BQVJuQyxTQUFROzswQkFFdEIsOERBQUMwQjtnQkFBSXhCLElBQUc7Z0JBQVdpQyxXQUFVOztvQkFDMUIzQiw4QkFDQyw4REFBQzRCO3dCQUNDQyxLQUFLekI7d0JBQ0wwQixTQUFTO3dCQUNUQyxPQUFPakM7d0JBQ1BrQyxVQUFVLFNBQUNDO21DQUFNbEMsZUFBZWtDLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7d0JBQzlDSixXQUFVOzs7Ozs7b0JBR2IsQ0FBQzNCLDhCQUNBLDhEQUFDbUM7d0JBQUdSLFdBQVU7a0NBQ1g3Qjs7Ozs7Ozs7Ozs7OzBCQUlQLDhEQUFDb0I7Z0JBQ0N4QixJQUFHO2dCQUNIaUMsV0FBVTs7a0NBRVYsOERBQUNTO3dCQUNDVCxXQUFXLFdBQ1IsT0FEbUIzQixlQUFlLHFCQUFxQjtrQ0FHekR6QixrQkFBa0JzQjs7Ozs7O2tDQUVyQiw4REFBQ3FCO3dCQUFJUyxXQUFVOzs0QkFDWjNCLDhCQUNDLDhEQUFDa0I7Z0NBQ0NXLEtBQUt4QjtnQ0FDTGdDLFNBQVNyQjtnQ0FDVFcsV0FBVTswQ0FJViw0RUFBQzFELDBHQUFZQTtvQ0FBQ3FFLE1BQUs7Ozs7Ozs7Ozs7OzBDQUd2Qiw4REFBQ3BCO2dDQUNDbUIsU0FBUzlCO2dDQUNUb0IsV0FBVTswQ0FJViw0RUFBQzNELDJHQUFhQTtvQ0FBQ3NFLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWhDO0dBOUd3QmhEOztRQVNQaEIsc0RBQVNBOzs7S0FURmdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Ob3RlLnRzeD8wOGVkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgQmlTb2xpZFBlbmNpbCwgQmlTb2xpZFRyYXNoIH0gZnJvbSBcInJlYWN0LWljb25zL2JpXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBvY2tldEJhc2UgZnJvbSBcInBvY2tldGJhc2VcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuZnVuY3Rpb24gZm9ybWF0RGF0ZUFuZFRpbWUoaW5wdXREYXRlOiBhbnkpIHtcbiAgY29uc3QgZGF0ZU9iaiA9IG5ldyBEYXRlKGlucHV0RGF0ZSk7XG4gIGNvbnN0IGRheSA9IFN0cmluZyhkYXRlT2JqLmdldERhdGUoKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICBjb25zdCBtb250aCA9IFN0cmluZyhkYXRlT2JqLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCBcIjBcIik7IC8vIEphbnVhcnkgaXMgbW9udGggMFxuICBjb25zdCB5ZWFyID0gZGF0ZU9iai5nZXRGdWxsWWVhcigpO1xuICByZXR1cm4gZm9ybWF0RGF0ZShgJHtkYXl9LSR7bW9udGh9LSR7eWVhcn1gKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0RGF0ZShpbnB1dERhdGU6IGFueSkge1xuICBjb25zdCBbZGF5LCBtb250aCwgeWVhcl0gPSBpbnB1dERhdGUuc3BsaXQoXCItXCIpO1xuICByZXR1cm4gYCR7bmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXkpLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICBtb250aDogXCJsb25nXCIsXG4gICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgfSl9YDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm90ZSh7IG5vdGUsIGJnQ29sb3IsIG5vdGVJZCB9OiBhbnkpIHtcbiAgY29uc3QgeyBpZCwgdGl0bGUsIGNvbnRlbnQsIGNyZWF0ZWQgfSA9IG5vdGUgfHwge307XG5cbiAgY29uc3QgW3RleHRDb250ZW50LCBzZXRUZXh0Q29udGVudF0gPSB1c2VTdGF0ZShjb250ZW50KTtcbiAgY29uc3QgW3Nob3dUZXh0QXJlYSwgc2V0U2hvd1RleHRBcmVhXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2RlbGV0ZUJ1dHRvbkNsaWNrZWQsIHNldERlbGV0ZUJ1dHRvbkNsaWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHRleHRBcmVhUmVmID0gdXNlUmVmPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBkZWxldGVCdXR0b25SZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBmdW5jdGlvbiBlZGl0Tm90ZSgpIHtcbiAgICBjb25zb2xlLmxvZyhcImVkaXQgdGhlIG5vdGVcIik7XG4gICAgc2V0U2hvd1RleHRBcmVhKCFzaG93VGV4dEFyZWEpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlQmx1cigpIHtcbiAgICAvLyBQcmV2ZW50IHVwZGF0ZSBpZiBkZWxldGUgYnV0dG9uIHdhcyBjbGlja2VkXG4gICAgaWYgKGRlbGV0ZUJ1dHRvbkNsaWNrZWQpIHtcbiAgICAgIHNldERlbGV0ZUJ1dHRvbkNsaWNrZWQoZmFsc2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiVGV4dGFyZWEgbG9zdCBmb2N1cyFcIik7XG4gICAgICBjb25zb2xlLmxvZyhcIk5vdGUgSUQ6IFwiICsgbm90ZUlkKTtcbiAgICAgIGNvbnN0IHBiID0gbmV3IFBvY2tldEJhc2UoXCJodHRwczovL2pvb2RsZS5wb2NrZXRob3N0LmlvL1wiKTtcblxuICAgICAgLy8gRXhhbXBsZSB1cGRhdGUgZGF0YVxuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgY29udGVudDogdGV4dENvbnRlbnQsXG4gICAgICB9O1xuXG4gICAgICBhd2FpdCBwYi5jb2xsZWN0aW9uKFwibm90ZXNcIikudXBkYXRlKG5vdGVJZCwgZGF0YSk7XG4gICAgICBzZXRTaG93VGV4dEFyZWEoIXNob3dUZXh0QXJlYSk7XG4gICAgICByb3V0ZXIucmVmcmVzaCgpO1xuXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlRGVsZXRlKCkge1xuICAgIHNldERlbGV0ZUJ1dHRvbkNsaWNrZWQodHJ1ZSk7IFxuICAgIGNvbnNvbGUubG9nKFwiRGVsZXRlIHRoZSBub3RlXCIpO1xuICAgIGNvbnN0IHBiID0gbmV3IFBvY2tldEJhc2UoXCJodHRwczovL2pvb2RsZS5wb2NrZXRob3N0LmlvL1wiKTtcblxuICAgIGF3YWl0IHBiLmNvbGxlY3Rpb24oXCJub3Rlc1wiKS5kZWxldGUobm90ZUlkKTtcbiAgICByb3V0ZXIucmVmcmVzaCgpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgaW5pdGlhbD17eyB4OiAtMTAwMCB9fVxuICAgICAgYW5pbWF0ZT17eyB4OiAwIH19XG4gICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgIHR5cGU6IFwic3ByaW5nXCIsXG4gICAgICAgIHN0aWZmbmVzczogNTAsXG4gICAgICAgIGRhbXBpbmc6IDEyLFxuICAgICAgICBkdXJhdGlvbjogMC41LFxuICAgICAgfX1cbiAgICAgIGNsYXNzTmFtZT17YCR7YmdDb2xvcn0gYmctb3BhY2l0eS03MCByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIHRleHQtZ3JheS04MDAgcm91bmRlZC0zeGwgcC00IHBiLTEgdy02MCBoLTYwYH1cbiAgICA+XG4gICAgICA8ZGl2IGlkPVwiY29udGVudHNcIiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAge3Nob3dUZXh0QXJlYSAmJiAoXG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICByZWY9e3RleHRBcmVhUmVmfVxuICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICB2YWx1ZT17dGV4dENvbnRlbnR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRleHRDb250ZW50KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNDQgcmVzaXplLW5vbmUgYmctdHJhbnNwYXJlbnQgYm9yZGVyLW5vbmUgb3V0bGluZS1ub25lXCJcbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7IXNob3dUZXh0QXJlYSAmJiAoXG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtYmFzZSBwci00IGZvbnQtc2VtaWJvbGQgaG92ZXI6b3ZlcmZsb3cteS1hdXRvIG92ZXJmbG93LXktaGlkZGVuIGgtNDRcIj5cbiAgICAgICAgICAgIHt0ZXh0Q29udGVudH1cbiAgICAgICAgICA8L2g1PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGlkPVwiZGF0ZUFuZEVkaXRcIlxuICAgICAgICBjbGFzc05hbWU9XCJib3R0b20tNCBmbGV4IGl0ZW1zLWNlbnRlciBtdC1hdXRvIG1iLTIganVzdGlmeS1iZXR3ZWVuXCJcbiAgICAgID5cbiAgICAgICAgPHBcbiAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXhzICR7c2hvd1RleHRBcmVhID8gXCJ0ZXh0LXRyYW5zcGFyZW50XCIgOiBcInRleHQtYmxhY2tcIlxuICAgICAgICAgICAgfWB9XG4gICAgICAgID5cbiAgICAgICAgICB7Zm9ybWF0RGF0ZUFuZFRpbWUoY3JlYXRlZCl9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIHtzaG93VGV4dEFyZWEgJiYgKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICByZWY9e2RlbGV0ZUJ1dHRvblJlZn1cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRGVsZXRlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLTggdy04IHJvdW5kZWQtZnVsbCBiZy1yZWQtNTAwIHRleHQtd2hpdGVcbiAgICAgICAgICAgICAgaG92ZXI6YmctdHJhbnNwYXJlbnRcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGVhc2UtbGluZWFyIGN1cnNvci1wb2ludGVyIG1yLTJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QmlTb2xpZFRyYXNoIHNpemU9XCIxOFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIG9uQ2xpY2s9e2VkaXROb3RlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC04IHctOCByb3VuZGVkLWZ1bGwgYmctYmxhY2sgdGV4dC13aGl0ZVxuICAgICAgICAgICAgaG92ZXI6YmctdHJhbnNwYXJlbnQgaG92ZXI6dGV4dC1ibGFja1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGVhc2UtbGluZWFyIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QmlTb2xpZFBlbmNpbCBzaXplPVwiMThcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJCaVNvbGlkUGVuY2lsIiwiQmlTb2xpZFRyYXNoIiwibW90aW9uIiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJQb2NrZXRCYXNlIiwidXNlUm91dGVyIiwiZm9ybWF0RGF0ZUFuZFRpbWUiLCJpbnB1dERhdGUiLCJkYXRlT2JqIiwiRGF0ZSIsImRheSIsIlN0cmluZyIsImdldERhdGUiLCJwYWRTdGFydCIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJmb3JtYXREYXRlIiwic3BsaXQiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJOb3RlIiwibm90ZSIsImJnQ29sb3IiLCJub3RlSWQiLCJpZCIsInRpdGxlIiwiY29udGVudCIsImNyZWF0ZWQiLCJ0ZXh0Q29udGVudCIsInNldFRleHRDb250ZW50Iiwic2hvd1RleHRBcmVhIiwic2V0U2hvd1RleHRBcmVhIiwiZGVsZXRlQnV0dG9uQ2xpY2tlZCIsInNldERlbGV0ZUJ1dHRvbkNsaWNrZWQiLCJ0ZXh0QXJlYVJlZiIsImRlbGV0ZUJ1dHRvblJlZiIsInJvdXRlciIsImVkaXROb3RlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUJsdXIiLCJwYiIsImRhdGEiLCJjb2xsZWN0aW9uIiwidXBkYXRlIiwicmVmcmVzaCIsImhhbmRsZURlbGV0ZSIsImRlbGV0ZSIsImRpdiIsImluaXRpYWwiLCJ4IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJ0eXBlIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsImR1cmF0aW9uIiwiY2xhc3NOYW1lIiwidGV4dGFyZWEiLCJyZWYiLCJhdXRvRm9jdXMiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImg1IiwicCIsIm9uQ2xpY2siLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Note.tsx\n"));

/***/ })

});