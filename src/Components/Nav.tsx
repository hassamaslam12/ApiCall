import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {

    const s ={
        color:'white',
        textDecoration:'none'
    }
  return (
    <div className='nav'>
      <div>
      
        <ul>
            <li>
                <Link style={s} to="/">Home</Link>
            </li>
            <li>
                <Link style={s} to="/contact">Contact</Link>
            </li>
            <li>
                <Link style={s} to="/about">About</Link>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
