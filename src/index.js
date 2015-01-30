/**
 * Draggable
 * A draggability component helper
 */

import React from 'react'
import cx    from './utils/classSet'

let Dragon = React.createClass({

  propTypes: {
    onDrop : React.PropTypes.func.isRequired
  },

  getDefaultProps() {
    return {
      allow     : 'all',
      className : '',
      effect    : 'copy',
      element   : 'div',
      message   : {}
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
    let { dragging, draggable, droppable } = this.state
    let { className, children, element, onDrop, message, allow, effect, ...safe } = this.props

    let modifiers = cx({
      'dragon-dragging'  : dragging,
      'dragon-droppable' : droppable
    })

    return React.createElement(element, {
      className   : cx('dragon', cx(className), modifiers),
      draggable   : draggable,
      onBlur      : this._handle({ draggable: true }),
      onFocus     : this._handle({ draggable: false }),
      onDragEnd   : this._handle({ droppable: false, dragging: false }, true),
      onDragLeave : this._handle({ droppable: false }, true),
      onDragOver  : this._handle({ droppable: true }, true),
      onDragStart : this._onDragStart,
      onDrop      : this._onDrop,
      ...safe
    }, children)
  },

  _handle(state, prevent) {
    return event => {
      if (prevent) event.preventDefault()
      this.setState(state)
    }
  },

  _onDragStart(e) {
    let { effect, allow, message } = this.props

    e.dataTransfer.setData('text/plain', JSON.stringify(message))
    e.dataTransfer.dropEffect    = effect
    e.dataTransfer.effectAllowed = allow

    this.setState({ dragging: true })
  },

  _onDrop(e) {
    e.preventDefault()

    let message  = JSON.parse(e.dataTransfer.getData('text/plain'))
    let receiver = this.props.message

    this.props.onDrop(message, receiver)

    this.setState({ droppable: false, dragging: false })
  }

})

export default Dragon
