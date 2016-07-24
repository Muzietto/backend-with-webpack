require("source-map-support").install();
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	eval("import express from 'express';\nimport index from './index';\nimport page from './page';\n\nvar app = express();\napp.get('/', index);\napp.get('/page', page);\n\nconsole.log(\"Listening on port 4000...\");\napp.listen(4000);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcz8zNDc5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sT0FBUCxNQUFvQixTQUFwQjtBQUNBLE9BQU8sS0FBUCxNQUFrQixTQUFsQjtBQUNBLE9BQU8sSUFBUCxNQUFpQixRQUFqQjs7QUFFQSxJQUFJLE1BQU0sU0FBVjtBQUNBLElBQUksR0FBSixDQUFRLEdBQVIsRUFBYSxLQUFiO0FBQ0EsSUFBSSxHQUFKLENBQVEsT0FBUixFQUFpQixJQUFqQjs7QUFFQSxRQUFRLEdBQVIsQ0FBWSwyQkFBWjtBQUNBLElBQUksTUFBSixDQUFXLElBQVgiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgaW5kZXggZnJvbSAnLi9pbmRleCc7XHJcbmltcG9ydCBwYWdlIGZyb20gJy4vcGFnZSc7XHJcblxyXG52YXIgYXBwID0gZXhwcmVzcygpO1xyXG5hcHAuZ2V0KCcvJywgaW5kZXgpO1xyXG5hcHAuZ2V0KCcvcGFnZScsIHBhZ2UpO1xyXG5cclxuY29uc29sZS5sb2coXCJMaXN0ZW5pbmcgb24gcG9ydCA0MDAwLi4uXCIpO1xyXG5hcHAubGlzdGVuKDQwMDApO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tYWluLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);