var React  = require('react');
var FocusTrap = require('../dist/focus-trap');

var Component = React.createClass({

  render() {
    return (
      <FocusTrap onExit={ this._onExit }>
        <p>Hello!</p>
      </FocusTrap>
    );
  },

  _onExit() {
    console.log("yep")
  }

});

React.render(<Component />, document.body);
