import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Battle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerOne: {
        username: '',
        label: 'Player One',
        img: null
      },
      playerTwo: {
        username: '',
        label: 'Player Two',
        img: null
      }
    }
  }

  handleSubmit = (player, username) => {
    console.log(player, username);
    this.setState({
      [player]: {
        username: username,
        img: 'https://github.com/' + username + '.png?size=200'
      }
    })
  }

  render() {
    return (
      <div className="battle-container">
        {!this.state.playerOne.username
          ? <PlayerInput label={ 'playerOne' } presentation={ this.state.playerOne.label } onSubmit={ this.handleSubmit } />
          // : <PlayerTile player={ this.state.playerOne }/>
          : <div>yo</div>
          }
        {!this.state.playerTwo.username
          ? <PlayerInput label={ 'playerTwo' } presentation={ this.state.playerTwo.label } onSubmit={ this.handleSubmit } />
          // : <PlayerTile player={ this.state.playerTwo } />
          : <div>yo</div>
        }
      </div>
    )
  }
}

class PlayerInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.props.label, this.state.username)
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit } className='battle-form'>
        <label className='battle-label'>
          { this.props.presentation }
          <input
            id='username'
            placeholder='github username'
            type='text'
            name='username'
            className='username-input'
            value={ this.state.username }
            onChange={ this.handleChange }
          />
        </label>
        <button className='btn' type='submit'>Submit</button>
      </form>
    )
  }
}

PlayerInput.PropTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

export default Battle;
