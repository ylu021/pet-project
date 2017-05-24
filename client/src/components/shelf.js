import React, { Component } from 'react';
import logo from './logo.svg';
// import './Shelf.css';

class Shelf extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items = [
        'shampoo',
        'chocolate',
      ]
    }
  }

  render() {
    const Items = this.state.items.map(
      (item, idx) => <li key={idx}><button>[+]</button>{item}</li>
    )
    return (
      <div className="App">
          <div>
            <h2>Shelf</h2>
            <ul>{ Items }</ul>
          </div>
      </div>
    );
  }
}

export default App;
