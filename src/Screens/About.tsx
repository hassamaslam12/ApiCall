import { Button } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Nav from '../Components/Nav'


const About = () => {
    const navigate = useNavigate()
    const navigateToHome =()=>{
        navigate('/')
    }
    return (
        <>
    <Nav />
    This is about page
        </>
  )
}

export default About
