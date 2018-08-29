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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/3.classDemo.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/3.classDemo.ts":
/*!****************************!*\
  !*** ./src/3.classDemo.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    }\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar HelloWord = /** @class */ (function () {\r\n    function HelloWord(text) {\r\n        this.text = text;\r\n    }\r\n    HelloWord.prototype.toString = function () {\r\n        return this.text;\r\n    };\r\n    return HelloWord;\r\n}());\r\nvar demo = new HelloWord('world');\r\nconsole.log(demo.toString());\r\n/**\r\n * 继承\r\n */\r\nvar PersonDemo = /** @class */ (function () {\r\n    function PersonDemo() {\r\n    }\r\n    PersonDemo.prototype.eyes = function () {\r\n        console.log('two');\r\n    };\r\n    return PersonDemo;\r\n}());\r\nvar ParentDemo = /** @class */ (function (_super) {\r\n    __extends(ParentDemo, _super);\r\n    function ParentDemo() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    ParentDemo.prototype.move = function () {\r\n        console.log('go');\r\n    };\r\n    return ParentDemo;\r\n}(PersonDemo));\r\nvar BadyDemo = /** @class */ (function (_super) {\r\n    __extends(BadyDemo, _super);\r\n    function BadyDemo() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    BadyDemo.prototype.move = function () {\r\n        console.log('i cant');\r\n    };\r\n    return BadyDemo;\r\n}(PersonDemo));\r\nvar personD = new PersonDemo();\r\nvar parentD = new ParentDemo();\r\nvar badyD = new BadyDemo();\r\npersonD.eyes();\r\nparentD.eyes();\r\nbadyD.eyes();\r\n// personD.move();\r\nparentD.move();\r\nbadyD.move();\r\n/**\r\n * 重写\r\n */\r\nvar A = /** @class */ (function () {\r\n    function A() {\r\n    }\r\n    A.prototype.say = function () {\r\n        console.log('a');\r\n    };\r\n    return A;\r\n}());\r\nvar B = /** @class */ (function (_super) {\r\n    __extends(B, _super);\r\n    function B() {\r\n        var _this = _super !== null && _super.apply(this, arguments) || this;\r\n        _this.say = function () {\r\n            console.log('b');\r\n        };\r\n        return _this;\r\n    }\r\n    return B;\r\n}(A));\r\nvar AC = /** @class */ (function (_super) {\r\n    __extends(AC, _super);\r\n    function AC() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    AC.prototype.say = function () {\r\n        _super.prototype.say.call(this);\r\n        console.log('c');\r\n    };\r\n    return AC;\r\n}(A));\r\n/**\r\n * 注意 可以将实力成员方法重写成实例成员属性，但反过来不行\r\n * super只可调用实例成员方法，不可调用实例成员属性\r\n */\r\nvar a = new A();\r\na.say();\r\nvar b = new B();\r\nb.say();\r\nvar ac = new AC();\r\nac.say();\r\n/**\r\n * class四大权限\r\n * 共有的\r\n */\r\nvar PubiicDemo = /** @class */ (function () {\r\n    function PubiicDemo(theName) {\r\n        this.name = theName;\r\n    }\r\n    PubiicDemo.prototype.move = function (theNumber) {\r\n        console.log(this.name + \" name \" + theNumber + \".\");\r\n    };\r\n    return PubiicDemo;\r\n}());\r\nvar pubiicDemo = new PubiicDemo('public');\r\nconsole.log(pubiicDemo.name);\r\npubiicDemo.move(20);\r\npubiicDemo.name = 'changepublic';\r\nconsole.log(pubiicDemo.name);\r\npubiicDemo.move = function name(theNumber) {\r\n    console.log(this.name + \"  broke leg \" + theNumber + \".\");\r\n};\r\npubiicDemo.move(0);\r\n/**\r\n * 私有的\r\n */\r\nvar PrivateDemo = /** @class */ (function () {\r\n    function PrivateDemo(theName) {\r\n        this.name = theName;\r\n    }\r\n    return PrivateDemo;\r\n}());\r\nvar privateDemo = new PrivateDemo('private');\r\n// console.log(privateDemo.name)\r\n/**\r\n * 保护的\r\n */\r\nvar ProtectedDemo = /** @class */ (function () {\r\n    function ProtectedDemo(theName) {\r\n        this.name = theName;\r\n    }\r\n    ProtectedDemo.prototype.toString = function () {\r\n        console.log(this.name);\r\n    };\r\n    return ProtectedDemo;\r\n}());\r\nvar protectedDemo = new ProtectedDemo('protected');\r\n// console.log(protectedDemo.name)\r\n// protectedDemo.toString();\r\nvar ProtectedDemoChildren = /** @class */ (function (_super) {\r\n    __extends(ProtectedDemoChildren, _super);\r\n    function ProtectedDemoChildren(name) {\r\n        return _super.call(this, name) || this;\r\n    }\r\n    ProtectedDemoChildren.prototype.toString = function () {\r\n        console.log(this.name);\r\n    };\r\n    return ProtectedDemoChildren;\r\n}(ProtectedDemo));\r\nvar protectedDemoChildren = new ProtectedDemoChildren('protectedDemoChildren');\r\nprotectedDemoChildren.toString();\r\n/**\r\n * 只读的\r\n */\r\nvar ReadonlyDemo = /** @class */ (function () {\r\n    function ReadonlyDemo(name) {\r\n        this.name = name;\r\n    }\r\n    return ReadonlyDemo;\r\n}());\r\nvar readonlyDemo = new ReadonlyDemo('public');\r\nconsole.log(readonlyDemo.name);\r\n// readonlyDemo.name='aa';\r\n/**\r\n * getter和setter 注意 这个仅在es5以上的版本支持\r\n */\r\nvar GS = /** @class */ (function () {\r\n    function GS() {\r\n    }\r\n    Object.defineProperty(GS.prototype, \"fullName\", {\r\n        get: function () {\r\n            return this._fullName;\r\n        },\r\n        set: function (newName) {\r\n            this._fullName = newName;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    return GS;\r\n}());\r\nvar gs = new GS();\r\nconsole.log(gs.fullName);\r\ngs.fullName = 'set';\r\nconsole.log(gs.fullName);\r\n\n\n//# sourceURL=webpack:///./src/3.classDemo.ts?");

/***/ })

/******/ });