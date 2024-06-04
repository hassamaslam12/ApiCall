import { Button } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Nav from '../Components/Nav'

const Contact = () => {
    const navigate = useNavigate()
    const navigateToHome =()=>{
        navigate('/')
    }

  return (
    <>
 <Nav />
 this is contact page
    </>
  )
}

export default Contact
