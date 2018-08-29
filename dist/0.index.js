/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/0.index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/0.index.ts":
/*!************************!*\
  !*** ./src/0.index.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 数字类型\r\n */\r\nvar decLiteral = 6;\r\nvar hexLiteral = 0xf00d;\r\nvar binaryLiteral = 10;\r\nvar octalLiteral = 484;\r\n/**\r\n * 布尔类型\r\n */\r\nvar isDone = false;\r\n/**\r\n * 字符串\r\n */\r\nvar str0 = 'str0';\r\n/**\r\n * 字符串模板\r\n */\r\nvar sentence = \"Hello, my name is \" + str0;\r\n/**\r\n * 数组\r\n */\r\nvar list = [1, 2, 3];\r\n/**\r\n * 数组泛型 但是这个被tslint禁止了，简单类型没必要\r\n */\r\n// let list2: Array<number> = [1, 2, 3];\r\n/**\r\n * 多类型数组 元组 数组越界赋值以后会用联合类型 即string+number类型\r\n */\r\nvar x = ['hello', 10];\r\n/**\r\n * 枚举\r\n */\r\nvar Color;\r\n(function (Color) {\r\n    Color[Color[\"Red\"] = 0] = \"Red\";\r\n    Color[Color[\"Green\"] = 1] = \"Green\";\r\n    Color[Color[\"Blue\"] = 2] = \"Blue\";\r\n})(Color || (Color = {}));\r\nvar c = Color.Green;\r\n// c=1\r\nconsole.log(c);\r\nvar Color2;\r\n(function (Color2) {\r\n    Color2[Color2[\"Red\"] = 1] = \"Red\";\r\n    Color2[Color2[\"Green\"] = 2] = \"Green\";\r\n    Color2[Color2[\"Blue\"] = 3] = \"Blue\";\r\n})(Color2 || (Color2 = {}));\r\nvar c2 = Color2.Green;\r\n// c2=2\r\nconsole.log(c2);\r\nvar Color3;\r\n(function (Color3) {\r\n    Color3[Color3[\"Red\"] = 1] = \"Red\";\r\n    Color3[Color3[\"Green\"] = 5] = \"Green\";\r\n    Color3[Color3[\"Blue\"] = 9] = \"Blue\";\r\n})(Color3 || (Color3 = {}));\r\nvar c3 = Color3.Green;\r\n// c3=5\r\nconsole.log(c3);\r\nvar Color4;\r\n(function (Color4) {\r\n    Color4[Color4[\"Red\"] = 1] = \"Red\";\r\n    Color4[Color4[\"Green\"] = 2] = \"Green\";\r\n    Color4[Color4[\"Blue\"] = 3] = \"Blue\";\r\n})(Color4 || (Color4 = {}));\r\nvar colorName4 = Color4[2];\r\n// colorName4 = Green\r\nconsole.log(colorName4);\r\n\n\n//# sourceURL=webpack:///./src/0.index.ts?");

/***/ })

/******/ });