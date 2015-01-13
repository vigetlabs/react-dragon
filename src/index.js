/**
 * @jsx React.DOM
 * Draggable
 * A draggability component helper
 */

var React    = require('react');
var Types    = React.PropTypes;
var cx       = require('./utils/classSet');
var hasChild = require('./utils/hasChild');

var Draggable = React.createClass({

  propTypes: {
    onDrop  : Types.func.isRequired,
    message : Types.any.isRequired
  },

  getDefaultProps() {
    return {
      dropEffect    : 'copy',
      effectAllowed : 'all'
    }
  },

  getInitialState() {
    return {
      dragging  : false,
      droppable : false
    }
  },

  render() {
    var className = cx(this.props.className, cx({
      'dragon'           : true,
      'dragon-dragging'  : this.state.dragging,
      'dragon-droppable' : this.state.droppable
    }));

    return (
      <div className={ className }
           onDragOver={ this._onDragOver }
           onDragLeave={ this._onDragLeave }
           onDrop={ this._onDrop }
           onDragStart={ this._onDragStart }
           onDragEnd={ this._onDragEnd }
           draggable>
      <div ref="children" className="dragon-children">{ this.props.children }</div>
      </div>
    );
  },

  _onDragStart(e) {
    var target   = document.elementFromPoint(e.pageX, e.pageY)
    var children = this.refs.children.getDOMNode()

    if (target == children || hasChild(target, children)) {
      return e.preventDefault();
    }

    var { message, dropEffect, effectAllowed } = this.props;

    e.dataTransfer.setData('text/plain', JSON.stringify(message));
    e.dataTransfer.dropEffect = dropEffect;
    e.dataTransfer.effectAllowed = effectAllowed;

    this.setState({ dragging: true });
  },

  _onDragEnd(e) {
    e.preventDefault();
    this.setState({ droppable: false, dragging: false });
  },

  _onDragOver(e) {
    e.preventDefault();
    this.setState({ droppable: true });
  },

  _onDragLeave(e) {
    e.preventDefault();
    this.setState({ droppable: false });
  },

  _onDrop(e) {
    e.preventDefault();

    var message  = JSON.parse(e.dataTransfer.getData('text/plain'));
    var receiver = this.props.message;

    this.props.onDrop(message, receiver);
    this.setState({ droppable: false, dragging: false });
  }

});

module.exports = Draggable;
