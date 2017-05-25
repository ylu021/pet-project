import React, { Component } from 'react';
import PropTypes from 'prop-types'
import api from '../utils/api'

const langs = ['All', 'JS', 'Ruby', 'Java', 'Python', 'HTML', 'CSS']

class Popular extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedLang: 'All',
      repos: null
    }
  }

  componentDidMount() {
    // initial call
    this.fetchRepos(this.state.selectedLang)
  }

  fetchRepos = (lang) => {
    api.fetchPopRepos(lang).then((repos) => {
      console.log(repos)
      this.setState({
        repos
      })
    })
  }

  updateLang = (lang) => (e) => {
    console.log(lang)
    this.setState({
      selectedLang: lang,
      repos: null
    })
    this.fetchRepos(lang)
  }

  render() {
    return (
      <div>
        <Selected selectedLang={ this.state.selectedLang } onSelect={ this.updateLang } />
        <Repo repos={ this.state.repos } />
      </div>
    )
  }
}

function Selected (props) {
  return (
    <ul className="lang-list">
      {langs.map((lang, idx) => {
        return (
          <li
            key={ idx }
            onClick={ props.onSelect(lang) }
            style= { lang === props.selectedLang ? { color: 'tomato' } : null }
          >
            { lang }
          </li>
        )
      })}
    </ul>
  )
}

// typecheck
Selected.PropTypes = {
  onSelect: PropTypes.func.isRequired,
  selectedLang: PropTypes.string.isRequired
}

export default Popular;
