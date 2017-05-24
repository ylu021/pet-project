import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { users: [] }

  componentDidMount() {
    fetch('/users')
    .then(res => res.json())
    .then(res => this.setState({ users: res }) )
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
      </div>
    );
  }
}

export default App;
