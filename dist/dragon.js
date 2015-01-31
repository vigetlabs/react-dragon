"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = _interopRequire(require("react"));

var cx = _interopRequire(require("react-classset"));

var Dragon = React.createClass({
  displayName: "Dragon",


  propTypes: {
    onDrop: React.PropTypes.func.isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      allow: "all",
      className: "",
      effect: "copy",
      element: "div",
      message: {}
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
    var dragging = this.state.dragging;
    var draggable = this.state.draggable;
    var droppable = this.state.droppable;
    var className = this.props.className;
    var children = this.props.children;
    var element = this.props.element;
    var onDrop = this.props.onDrop;
    var message = this.props.message;
    var allow = this.props.allow;
    var effect = this.props.effect;
    var safe = _objectWithoutProperties(this.props, ["className", "children", "element", "onDrop", "message", "allow", "effect"]);

    var modifiers = cx({
      "dragon-dragging": dragging,
      "dragon-droppable": droppable
    });

    return React.createElement(element, _extends({
      className: cx("dragon", cx(className), modifiers),
      draggable: draggable,
      onBlur: this._handle({ draggable: true }),
      onFocus: this._handle({ draggable: false }),
      onDragEnd: this._handle({ droppable: false, dragging: false }, true),
      onDragLeave: this._handle({ droppable: false }, true),
      onDragOver: this._handle({ droppable: true }, true),
      onDragStart: this._onDragStart,
      onDrop: this._onDrop }, safe), children);
  },

  _handle: function _handle(state, prevent) {
    var _this = this;
    return function (event) {
      if (prevent) event.preventDefault();
      _this.setState(state);
    };
  },

  _onDragStart: function _onDragStart(e) {
    var effect = this.props.effect;
    var allow = this.props.allow;
    var message = this.props.message;


    e.dataTransfer.setData("text/plain", JSON.stringify(message));
    e.dataTransfer.dropEffect = effect;
    e.dataTransfer.effectAllowed = allow;

    this.setState({ dragging: true });
  },

  _onDrop: function _onDrop(e) {
    e.preventDefault();

    var message = JSON.parse(e.dataTransfer.getData("text/plain"));
    var receiver = this.props.message;

    this.props.onDrop(message, receiver);

    this.setState({ droppable: false, dragging: false });
  }

});

module.exports = Dragon;

//# sourceMappingURL=dragon.js.map