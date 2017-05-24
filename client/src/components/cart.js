// where redux got hooked up
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/action';
import Shelf from './shelf'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  render() {
    const cartItems = this.props.items.map((item, idx) => {
      return <li key={idx}>{item}</li>
    })
    return (
      <div className="Cart">
          <div>
            <Shelf addToCart={ this.props.actions.addToCart }/>
            <h2>Shopping Bag</h2>
            <ol>
              { cartItems }
            </ol>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  console.log('state', state)
  return {
    items: state.reducer.items
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
