![React Dragon NPM](https://nodei.co/npm/react-dragon.png)

A very simple drag and drop component. Did I mention it was simple?

## Usage

Properties | Description
:--------- | :----------
onDrop     | **Required**. This is the callback that executes when an item is dropped onto a `<Dragon />`
allow      | Directly translates to event.dataTransfer.effectAllowed. Defaults to "all"
className  | Additional css class names. This can be a string or an object. The value will be injected into the `classSet` React addon
effect     | Directly translates to event.dataTransfer.dropEffect. Defaults to "copy"
element    | What element to use as the wrapper for the dragon. Defaults to "div"
message    | This is the token that will be passed when a `<Dragon />` is dropped onto another `<Dragon />` it must be JSON serialization compatible.

```javascript
React.createClass({

  render() {
    return (
      <Dragon message={ 'something' } onDrop={ this._onDrop } element="p">
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
