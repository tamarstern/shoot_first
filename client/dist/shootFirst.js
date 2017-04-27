/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Device = __webpack_require__(/*! ./Device.js */ 1);
	
	var _Device2 = _interopRequireDefault(_Device);
	
	var _Player = __webpack_require__(/*! ./Player.js */ 3);
	
	var _Player2 = _interopRequireDefault(_Player);
	
	var _State = __webpack_require__(/*! ./State.js */ 4);
	
	var _State2 = _interopRequireDefault(_State);
	
	var _constants = __webpack_require__(/*! ./constants.js */ 2);
	
	var _ServerHandler = __webpack_require__(/*! ./ServerHandler.js */ 5);
	
	var _ServerHandler2 = _interopRequireDefault(_ServerHandler);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Game = function () {
	    'use strict';
	
	    var player = void 0;
	    var device = void 0;
	    var gameElement = document.querySelector('#game');
	
	    function init() {
	        var player = new _Player2.default();
	        var device = new _Device2.default();
	        var state = new _State2.default();
	        var server = new _ServerHandler2.default();
	        var button = void 0;
	
	        state.setState('init');
	        device.init();
	
	        server.sendRequest(state.getCurrentState()).then(function (res) {
	            gameElement.innerHTML = res;
	            button = document.querySelector('#start_game');
	            button.addEventListener('click', function () {
	                alert('start!');
	            });
	        });
	    }
	
	    return {
	        init: init
	    };
	}();
	
	Game.init();

/***/ },
/* 1 */
/*!***********************!*\
  !*** ./src/Device.js ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _constants = __webpack_require__(/*! ./constants.js */ 2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Device = function () {
	    function Device() {
	        _classCallCheck(this, Device);
	    }
	
	    _createClass(Device, [{
	        key: 'init',
	        value: function init() {
	            window.addEventListener('deviceorientation', this.handleOrientation.bind(this));
	        }
	    }, {
	        key: 'handleOrientation',
	        value: function handleOrientation(event) {
	            var alpha = event.alpha; //x
	            var beta = event.beta; //y
	            var gamma = event.gamma; //z
	        }
	    }]);
	
	    return Device;
	}();
	
	exports.default = Device;

/***/ },
/* 2 */
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ function(module, exports) {

	"use strict";
	
	var deviceDownDegs = 90;
	var threshold = 15;
	var waitTime = 3;
	var state1 = "init";
	var state2 = "waiting";
	var state3 = "ready";
	var state4 = "fire";
	var state5 = "results";
	var serverURL = 'https://jeex.us/app/hadarim/shoot';

/***/ },
/* 3 */
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Player = function () {
	    function Player(id, user) {
	        _classCallCheck(this, Player);
	
	        this.id = id;
	        this.user = user;
	        this.isReady = false;
	    }
	
	    _createClass(Player, [{
	        key: "isReady",
	        value: function isReady() {
	            return this.isReady;
	        }
	    }]);
	
	    return Player;
	}();
	
	exports.default = Player;

/***/ },
/* 4 */
/*!**********************!*\
  !*** ./src/State.js ***!
  \**********************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var State = function () {
	    function State() {
	        _classCallCheck(this, State);
	
	        this.state = "";
	    }
	
	    _createClass(State, [{
	        key: "getCurrentState",
	        value: function getCurrentState() {
	            return this.state;
	        }
	    }, {
	        key: "setState",
	        value: function setState(state) {
	            this.state = state;
	        }
	    }]);
	
	    return State;
	}();
	
	exports.default = State;

/***/ },
/* 5 */
/*!******************************!*\
  !*** ./src/ServerHandler.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _constants = __webpack_require__(/*! ./constants.js */ 2);
	
	var _request = __webpack_require__(/*! ./request.js */ 6);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ServerHandler = function () {
	    function ServerHandler() {
	        _classCallCheck(this, ServerHandler);
	    }
	
	    _createClass(ServerHandler, [{
	        key: 'sendRequest',
	        value: function sendRequest(state) {
	            var request = new _request2.default(state);
	            return fetch('http://localhost:3000/api/games', request).then(function (res) {
	                return res.text();
	            });
	        }
	    }, {
	        key: 'renderResponse',
	        value: function renderResponse(el) {}
	    }]);
	
	    return ServerHandler;
	}();
	
	exports.default = ServerHandler;

/***/ },
/* 6 */
/*!************************!*\
  !*** ./src/request.js ***!
  \************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Request = function Request(state) {
	    _classCallCheck(this, Request);
	
	    this.method = 'GET';
	    this.url = 'https://jeex.us/app/hadarim/shoot/';
	};
	
	exports.default = Request;

/***/ }
/******/ ]);
//# sourceMappingURL=shootFirst.js.map