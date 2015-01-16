var React  = require('react');
var Dragon = require('../src/index');

var Component = React.createClass({

  getInitialState() {
    return {
      items: [
        { id: 1, text: 'Ground patrol' },
        { id: 2, text: 'to Major Tom'  }
      ]
    }
  },

  makeDragon(record, i) {
    return (
      <Dragon key={ record.id } message={ i } onDrop={ this._onDrop }>
        <div contentEditable dangerouslySetInnerHTML={{ __html: record.text }} />
        <input defaultValue={ record.text } />
      </Dragon>
    );
  },

  render() {
    return (
      <div>{ this.state.items.map(this.makeDragon) }</div>
    );
  },

  _onDrop(transmission, receiver) {
    var items = this.state.items.concat();

    var a = items[transmission];
    var b = items[receiver];

    items[transmission] = b;
    items[receiver] = a;

    this.setState({ items })
  }

});

React.render(<Component />, document.getElementById('app'));
