import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Components/Nav'

const Error = () => {
  return (
    <div>
      <Nav />
      <Link to="/">Go back to home page</Link>
    </div>
  )
}

export default Error
