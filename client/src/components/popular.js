import React, { Component } from 'react';

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
    const langs = ['All', 'JS', 'Ruby', 'Java', 'Python', 'HTML', 'CSS']
    return (
      <ul className="lang-list">
        {langs.map((lang, idx) => {
          return (
            <li
              key={ idx }
              onClick={ this.updateLang(lang) }
              style= { lang === this.state.selectedLang ? { color: 'tomato' } : null }
            >
              { lang }
            </li>
          )
        })}
      </ul>
    );
  }
}

export default Popular;
