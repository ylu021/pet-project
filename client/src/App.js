import React, { Component } from 'react';
import './index.css';
import Popular from './components/popular'
import Nav from './components/nav'
import Home from './components/home'
import Battle from './components/battle'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/popular' component={ Popular } />
            <Route exact path='/battle' component={ Battle } />
            {/* add 404 */}
            <Route render={ () => {
              return <p>Not Found</p>
            } } />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
