// where redux got hooked up
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/action';
import Shelf from './shelf'

class Cart extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      const Items = this.props.cart.map((item, idx) => {
        return <li key={idx}>{item}</li>
      })
      <div className="Cart">
          <div>
            <Shelf addToCart={ this.props.actions.addToCart }/>
            <h2>Shopping Bag</h2>
            <ol>
              { Items }
            </ol>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    items: state.items
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
