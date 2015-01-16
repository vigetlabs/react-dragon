/**
 * Draggable
 * A draggability component helper
 */

import React    from 'react';
import cx       from './utils/classSet';
import hasChild from './utils/hasChild';

let Types = React.PropTypes;

let Draggable = React.createClass({

  propTypes: {
    draggableChildren : Types.bool,
    message           : Types.any.isRequired,
    onDrop            : Types.func.isRequired
  },

  getDefaultProps() {
    return {
      draggableChildren : false,
      dropEffect        : 'copy',
      effectAllowed     : 'all'
    }
  },

  getInitialState() {
    return {
      draggable : true,
      dragging  : false,
      droppable : false
    }
  },

  render() {
    let className = cx(this.props.className, cx({
      'dragon'           : true,
      'dragon-dragging'  : this.state.dragging,
      'dragon-droppable' : this.state.droppable
    }));

    return (
      <div className={ className }
           draggable={ this.state.draggable }
           onDragOver={ this._onDragOver }
           onDragLeave={ this._onDragLeave }
           onDrop={ this._onDrop }
           onDragStart={ this._onDragStart }
           onDragEnd={ this._onDragEnd }>

        <div ref="children" className="dragon-children" onFocus={ this._onFocus } onBlur={ this._onBlur }>
          { this.props.children }
        </div>

      </div>
    );
  },

  _isDraggableAt(x, y) {
    if (this.props.draggableChildren) return true;

    let element   = document.elementFromPoint(x, y);
    let container = this.refs.children.getDOMNode();

    return element == container || hasChild(element, container);
  },

  _onFocus() {
    this.setState({ draggable: false })
  },

  _onBlur() {
    this.setState({ draggable: true })
  },

  _onDragStart(e) {
    if (this._isDraggableAt(e.pageX, e.pageY)) return e.preventDefault();

    e.dataTransfer.setData('text/plain', JSON.stringify(this.props.message));
    e.dataTransfer.dropEffect = this.props.dropEffect;
    e.dataTransfer.effectAllowed = this.props.effectAllowed;

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

    let message  = JSON.parse(e.dataTransfer.getData('text/plain'));
    let receiver = this.props.message;

    this.props.onDrop(message, receiver);
    this.setState({ droppable: false, dragging: false });
  }

});

export default Draggable;
