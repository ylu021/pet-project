import React, { Component } from 'react';

const langs = ['All', 'JS', 'Ruby', 'Java', 'Python', 'HTML', 'CSS']

class Popular extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedLang: 'All'
    }
  }

  updateLang = (lang) => (e) => {
    console.log(lang)
    this.setState({
      selectedLang: lang
    })
  }

  render() {
    return (
      <div>
        <Selected selectedLang={ this.state.selectedLang } onSelect={ this.updateLang } />
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

export default Popular;
