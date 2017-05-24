import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Cart from './components/cart'

class App extends Component {
  state = { users: [] }

  componentDidMount() {
    // fetch('/users')
    // .then(res => res.json())
    // .then(res => this.setState({ users: res }) )
  }

  render() {
    return (
      <div className="App">
          <h1>User table</h1>
          <ul>
            {
              this.state.users.map((user) => {
                return <li key={ user.id }>{ user.username }</li>
              })
            }
          </ul>
          <h1>Cart</h1>
          <Cart />
      </div>
    );
  }
}

export default App;
