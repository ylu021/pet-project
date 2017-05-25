import { NavLink } from 'react-router-dom' // navlink can be used with css
import React from 'react'

function Nav(props) {
  return (
    <div>
      <ul className='nav-list'>
        <li>
          <NavLink exact activeClassName='active' to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/battle'>Battle</NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/popular'>Popular</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Nav
