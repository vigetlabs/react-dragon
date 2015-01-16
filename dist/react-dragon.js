(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(to5Runtime) {"use strict";

	/**
	 * Draggable
	 * A draggability component helper
	 */

	var React = to5Runtime.interopRequire(__webpack_require__(1));

	var cx = to5Runtime.interopRequire(__webpack_require__(2));

	var hasChild = to5Runtime.interopRequire(__webpack_require__(3));

	var Types = React.PropTypes;

	var Draggable = React.createClass({
	  displayName: "Draggable",


	  propTypes: {
	    draggableChildren: Types.bool,
	    message: Types.any.isRequired,
	    onDrop: Types.func.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      draggableChildren: false,
	      dropEffect: "copy",
	      effectAllowed: "all"
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      draggable: true,
	      dragging: false,
	      droppable: false
	    };
	  },

	  render: function render() {
	    var className = cx(this.props.className, cx({
	      dragon: true,
	      "dragon-dragging": this.state.dragging,
	      "dragon-droppable": this.state.droppable
	    }));

	    return React.createElement(
	      "div",
	      { className: className,
	        draggable: this.state.draggable,
	        onDragOver: this._onDragOver,
	        onDragLeave: this._onDragLeave,
	        onDrop: this._onDrop,
	        onDragStart: this._onDragStart,
	        onDragEnd: this._onDragEnd },
	      React.createElement(
	        "div",
	        { ref: "children", className: "dragon-children", onFocus: this._onFocus, onBlur: this._onBlur },
	        this.props.children
	      )
	    );
	  },

	  _isDraggableAt: function IsDraggableAt(x, y) {
	    if (this.props.draggableChildren) return true;

	    var target = document.elementFromPoint(x, y);
	    var children = this.refs.children.getDOMNode();

	    return target == children || hasChild(target, children);
	  },

	  _onFocus: function OnFocus() {
	    this.setState({ draggable: false });
	  },

	  _onBlur: function OnBlur() {
	    this.setState({ draggable: true });
	  },

	  _onDragStart: function OnDragStart(e) {
	    if (this._isDraggableAt(e.pageX, e.pageY)) return e.preventDefault();

	    e.dataTransfer.setData("text/plain", JSON.stringify(this.props.message));
	    e.dataTransfer.dropEffect = this.props.dropEffect;
	    e.dataTransfer.effectAllowed = this.props.effectAllowed;

	    this.setState({ dragging: true });
	  },

	  _onDragEnd: function OnDragEnd(e) {
	    e.preventDefault();
	    this.setState({ droppable: false, dragging: false });
	  },

	  _onDragOver: function OnDragOver(e) {
	    e.preventDefault();
	    this.setState({ droppable: true });
	  },

	  _onDragLeave: function OnDragLeave(e) {
	    e.preventDefault();
	    this.setState({ droppable: false });
	  },

	  _onDrop: function OnDrop(e) {
	    e.preventDefault();

	    var message = JSON.parse(e.dataTransfer.getData("text/plain"));
	    var receiver = this.props.message;

	    this.props.onDrop(message, receiver);
	    this.setState({ droppable: false, dragging: false });
	  }

	});

	module.exports = Draggable;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule cx
	 */

	/**
	 * This function is used to mark string literals representing CSS class names
	 * so that they can be transformed statically. This allows for modularization
	 * and minification of CSS class names.
	 *
	 * In static_upstream, this function is actually implemented, but it should
	 * eventually be replaced with something more descriptive, and the transform
	 * that is used in the main stack should be ported for use elsewhere.
	 *
	 * @param string|object className to modularize, or an object of key/values.
	 *                      In the object case, the values are conditions that
	 *                      determine if the className keys should be included.
	 * @param [string ...]  Variable list of classNames in the string case.
	 * @return string       Renderable space-separated CSS className.
	 */
	function cx(classNames) {
	  if (typeof classNames == "object") {
	    return Object.keys(classNames).filter(function (className) {
	      return classNames[className];
	    }).join(" ");
	  } else {
	    return Array.prototype.join.call(arguments, " ");
	  }
	}

	module.exports = cx;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = within;
	function within(child, parent) {
	  var node = child;

	  while (node = node.parentNode) {
	    if (node == parent) return true;
	  }

	  return false;
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var global = {};

	(function(r){var e=r.to5Runtime={};e.inherits=function(r,e){if(typeof e!=="function"&&e!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof e)}r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:false,writable:true,configurable:true}});if(e)r.__proto__=e};e.defaults=function(e,t){for(var r in t){if(e[r]===undefined){e[r]=t[r]}}return e};e.prototypeProperties=function(e,r,t){if(r)Object.defineProperties(e,r);if(t)Object.defineProperties(e.prototype,t)};e.applyConstructor=function(r,n){var t=Object.create(r.prototype);var e=r.apply(t,n);return e!=null&&(typeof e=="object"||typeof e=="function")?e:t};e.taggedTemplateLiteral=function(e,r){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))};e.interopRequire=function(e){return e&&(e["default"]||e)};e.toArray=function(e){return Array.isArray(e)?e:Array.from(e)};e.slicedToArray=function(e,t){if(Array.isArray(e)){return e}else{var r=[];for(var o=e[Symbol.iterator](),n;!(n=o.next()).done;){r.push(n.value);if(t&&r.length===t)break}return r}};e.objectWithoutProperties=function(r,n){var t={};for(var e in r){if(n.indexOf(e)>=0)continue;if(!Object.prototype.hasOwnProperty.call(r,e))continue;t[e]=r[e]}return t};e.hasOwn=Object.prototype.hasOwnProperty;e.slice=Array.prototype.slice;e.bind=Function.prototype.bind;e.defineProperty=function(e,r,t){return Object.defineProperty(e,r,{value:t,enumerable:true,configurable:true,writable:true})};e.interopRequireWildcard=function(e){return e&&e.constructor===Object?e:{"default":e}};e._extends=function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t){r[n]=t[n]}}return r};e.get=function t(r,t,n){var e=Object.getOwnPropertyDescriptor(r,t);if(e===undefined){var o=Object.getPrototypeOf(r);if(o===null){return undefined}else{return t(o,t,n)}}else if("value"in e&&e.writable){return e.value}else{var i=e.get;if(i===undefined){return undefined}return i.call(n)}}})(typeof global==="undefined"?self:global);

	/*** EXPORTS FROM exports-loader ***/
	module.exports = global.to5Runtime

/***/ }
/******/ ])
});
