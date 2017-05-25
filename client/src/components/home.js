import { Link } from 'react-router-dom' // navlink can be used with css
import React from 'react'

function Home(props) {
  return (
    <div className="home-container">
      <h1>Battle with friends</h1>
      <Link className='btn' to='/battle' >Battle</Link>
    </div>
  )
}

export default Home
