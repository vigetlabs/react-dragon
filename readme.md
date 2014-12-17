# React Dragon

A very simple drag and drop component. Did I mention it was simple?

## Usage

Dragon requires two properties:

- **message**: This is the token that will be passed when a `<Dragon />` is dropped onto another `<Dragon />` it must be JSON serialization compatible.
- **onDrop**: This is the callback that executes when an item is dropped onto a `<Dragon />`

```javascript
React.createClass({

  render() {
    return (
      <Dragon message={ 'something' } onDrop={ this._onDrop }>
        { this.props.children }
      </Dragon>
    )
  },

  _onDrop(transmission, receiver) {
    // the transmission is the message from the dragged element
    // the receiver is the message from the dropped element
  }
})
```
