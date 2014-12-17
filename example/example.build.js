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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	var React  = __webpack_require__(/*! react */ 1);
	var FocusTrap = __webpack_require__(/*! ../dist/focus-trap */ 148);
	
	var Component = React.createClass({displayName: 'Component',
	
	  render:function() {
	    return (
	      React.createElement(FocusTrap, {onExit:  this._onExit}, 
	        React.createElement("p", null, "Hello!")
	      )
	    );
	  },
	
	  _onExit:function() {
	    console.log("yep")
	  }
	
	});
	
	React.render(React.createElement(Component, null), document.body);


/***/ },

/***/ 1:
/*!***************************!*\
  !*** ../~/react/react.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./lib/React\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));


/***/ },

/***/ 148:
/*!*****************************!*\
  !*** ../dist/focus-trap.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){if(true)module.exports=t(__webpack_require__(/*! react */ 1));else if("function"==typeof define&&define.amd)define(["react"],t);else{var o=t("object"==typeof exports?require("react"):e.react);for(var s in o)("object"==typeof exports?exports:e)[s]=o[s]}}(this,function(e){return function(e){function t(s){if(o[s])return o[s].exports;var r=o[s]={exports:{},id:s,loaded:!1};return e[s].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){var s=o(1),r=o(2),i=r.PropTypes,n=r.createClass({displayName:"FocusTrap",mixins:[s],propTypes:{onExit:i.func.isRequired,role:i.string.isRequired},getDefaultProps:function(){return{role:"dialog"}},render:function(){var e=this.props,t=e.role;return r.createElement("div",{className:"focus-trap",tabIndex:"0",role:t,onKeyUp:this._onKeyUp},r.createElement("div",{className:"focus-trap-backdrop","aria-hidden":!0,onClick:this.props.onExit}),r.createElement("section",{className:"focus-trap-inner"},this.props.children))},_onKeyUp:function(e){"Escape"===e.key&&this.props.onExit()}});e.exports=n},function(e){e.exports={_pushFocus:function(){this.setState({previousFocus:document.activeElement}),this.getDOMNode().focus()},_popFocus:function(){this.state.previousFocus&&(this.state.previousFocus.focus(),this._clearTrap())},_trapFocus:function(){this._focusTimer=setTimeout(function(){return this.getDOMNode().focus()}.bind(this),10)},_clearTrap:function(){clearTimeout(this._focusTimer)},componentDidMount:function(){var e=this.getDOMNode();e.addEventListener("focusin",this._clearTrap),e.addEventListener("focusout",this._trapFocus),this._pushFocus()},componentWillUnmount:function(){var e=this.getDOMNode();this._popFocus(),e.removeEventListener("focusin",this._clearTrap),e.removeEventListener("focusout",this._trapFocus)}}},function(t){t.exports=e}])});

/***/ }

/******/ })
//# sourceMappingURL=example.build.js.map