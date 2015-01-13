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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @jsx React.DOM
	 * Draggable
	 * A draggability component helper
	 */
	
	var React    = __webpack_require__(/*! react */ 1);
	var Types    = React.PropTypes;
	var cx       = __webpack_require__(/*! ./utils/classSet */ 2);
	var hasChild = __webpack_require__(/*! ./utils/hasChild */ 3);
	
	var Draggable = React.createClass({displayName: "Draggable",
	
	  propTypes: {
	    onDrop            : Types.func.isRequired,
	    draggableChildren : Types.bool,
	    message           : Types.any.isRequired
	  },
	
	  getDefaultProps:function() {
	    return {
	      dropEffect        : 'copy',
	      draggableChildren : false,
	      effectAllowed     : 'all'
	    }
	  },
	
	  getInitialState:function() {
	    return {
	      dragging  : false,
	      droppable : false
	    }
	  },
	
	  render:function() {
	    var className = cx(this.props.className, cx({
	      'dragon'           : true,
	      'dragon-dragging'  : this.state.dragging,
	      'dragon-droppable' : this.state.droppable
	    }));
	
	    return (
	      React.createElement("div", {className: className, 
	           onDragOver:  this._onDragOver, 
	           onDragLeave:  this._onDragLeave, 
	           onDrop:  this._onDrop, 
	           onDragStart:  this._onDragStart, 
	           onDragEnd:  this._onDragEnd, 
	           draggable: true}, 
	      React.createElement("div", {ref: "children", className: "dragon-children"},  this.props.children)
	      )
	    );
	  },
	
	  _onDragStart:function(e) {
	    var target   = document.elementFromPoint(e.pageX, e.pageY)
	    var children = this.refs.children.getDOMNode()
	
	    if (this.props.draggableChildren === false && target == children || hasChild(target, children)) {
	      return e.preventDefault();
	    }
	
	    var $__0=      this.props,message=$__0.message,dropEffect=$__0.dropEffect,effectAllowed=$__0.effectAllowed;
	
	    e.dataTransfer.setData('text/plain', JSON.stringify(message));
	    e.dataTransfer.dropEffect = dropEffect;
	    e.dataTransfer.effectAllowed = effectAllowed;
	
	    this.setState({ dragging: true });
	  },
	
	  _onDragEnd:function(e) {
	    e.preventDefault();
	    this.setState({ droppable: false, dragging: false });
	  },
	
	  _onDragOver:function(e) {
	    e.preventDefault();
	    this.setState({ droppable: true });
	  },
	
	  _onDragLeave:function(e) {
	    e.preventDefault();
	    this.setState({ droppable: false });
	  },
	
	  _onDrop:function(e) {
	    e.preventDefault();
	
	    var message  = JSON.parse(e.dataTransfer.getData('text/plain'));
	    var receiver = this.props.message;
	
	    this.props.onDrop(message, receiver);
	    this.setState({ droppable: false, dragging: false });
	  }
	
	});
	
	module.exports = Draggable;


/***/ },
/* 1 */
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/*!*******************************!*\
  !*** ./src/utils/classSet.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

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
	  if (typeof classNames == 'object') {
	    return Object.keys(classNames).filter(function(className) {
	      return classNames[className];
	    }).join(' ');
	  } else {
	    return Array.prototype.join.call(arguments, ' ');
	  }
	}
	
	module.exports = cx;


/***/ },
/* 3 */
/*!*******************************!*\
  !*** ./src/utils/hasChild.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = function within (child, parent) {
	  var node = child;
	
	  while (node = node.parentNode) {
	    if (node == parent) return true;
	  }
	
	  return false;
	};


/***/ }
/******/ ])
});

//# sourceMappingURL=react-dragon.js.map