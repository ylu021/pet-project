import React, { Component } from 'react';

class Shelf extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        'shampoo',
        'chocolate',
      ]
    }
    this.addItem = this.addItem.bind(this)
  }

  addItem = (item) => {
    console.log('im clicked', item)
    this.props.addToCart(item)
  }

  render() {
    const Items = this.state.items.map(
      (item, idx) => {
        return <li key={idx}><button onClick={ () => this.addItem(item) }>[+]</button>{item}</li>
      })
    return (
      <div className="Shelf">
          <div>
            <h2>Shelf</h2>
            <ul>{ Items }</ul>
          </div>
      </div>
    );
  }
}

export default Shelf;
