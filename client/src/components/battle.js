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

  handleReset = (player) => {
    console.log('inher', player)
    this.setState({
      [player]: {
        username: '',
        img: null
      }
    })
  }

  render() {
    console.log('playerOne', this.state.playerOne)
    return (
      <div>
        <div className="battle-container">
          {!this.state.playerOne.username
            ? <PlayerInput id='playerOne' label='Player One' onSubmit={ this.handleSubmit } />
            : <PlayerTile player={ this.state.playerOne } onReset={ this.handleReset.bind(null, 'playerOne') }/>
            }
          {!this.state.playerTwo.username
            ? <PlayerInput id='playerTwo' label='Player Two' onSubmit={ this.handleSubmit } />
            : <PlayerTile player={ this.state.playerTwo } onReset={ this.handleReset.bind(null, 'playerTwo') } />
            // onreset this.bind(null) means do not call it now, since it would be called later
          }
        </div>
        <div>
          { this.state.playerOne.username && this.state.playerTwo.username
            ? <button className='btn battle-btn'>Battle</button>
            : null
          }
        </div>
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
    this.props.onSubmit(this.props.id, this.state.username)
    this.setState({ username: ''})
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit } className='battle-form'>
        <label className='battle-label'>
          { this.props.label }
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
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

function PlayerTile (props) {
  return (
    <div>
      <div className='battle-form'>
      <li><img className='avatar' src={ props.player.img } /></li>
      <li><h2>{ '@'+ props.player.username }</h2></li>
      <li><button onClick={ props.onReset }>reset</button></li>
      </div>
    </div>
  )
  //bind null so the parent do not have to go through this context confusion
}

PlayerInput.PropTypes = {
  player: PropTypes.object.isRequired,
  onReset: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
}

export default Battle;
