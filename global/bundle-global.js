/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/scripts.js":
/*!**********************************!*\
  !*** ./src/assets/js/scripts.js ***!
  \**********************************/
/***/ (() => {

eval("var html = document.getElementsByTagName('html')[0];\nvar toggle = document.getElementById('theme-toggle');\nvar notch = document.getElementById('circle');\nvar dark = localStorage.getItem('dark') ? localStorage.getItem('dark') : 'false';\nhtml.setAttribute('data-theme', dark);\nlocalStorage.setItem('dark', dark);\n\nfunction toggleClick() {\n  html.setAttribute('data-theme', !dark);\n  dark = !dark;\n  localStorage.setItem('dark', dark);\n}\n\ntoggle.addEventListener('click', toggleClick);\n\n//# sourceURL=webpack://one-more-webpack/./src/assets/js/scripts.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/scripts.js"]();
/******/ 	
/******/ })()
;