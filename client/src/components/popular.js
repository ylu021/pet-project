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
        {!this.state.repos
          ? <p>Loading</p>
          : <Repos repos={ this.state.repos } />}
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

function Repos(props) {
  console.log('repos', props.repos)
  return (
    <ul className='repo-list'>
      {
        props.repos.map((repo, idx) => {
          return (
            <li key={ repo.name }>
              <RepoItem repo={ repo } rank={ idx+1 } owner={ repo.owner } />
            </li>
          )
        })
      }
    </ul>
  )
}

Repos.PropTypes = {
  repos: PropTypes.array.isRequired
}

function RepoItem (props) {
  return (
    <div>
      <div className='repo-item-rank'>
        [{ props.rank }]
      </div>
      <ul className='repo-list-detail'>
        <li>
          <img className='avatar' src={ props.owner.avatar_url } alt={ 'Avatar for ' + props.owner.login } />
        </li>
        <li>
          <a href={ props.repo.html_url }>{ props.repo.name }</a>
        </li>
        <li>@{ props.owner.login }</li>
        <li>{ props.repo.stargazers_count } stars</li>
      </ul>
    </div>
  )
}

export default Popular;
