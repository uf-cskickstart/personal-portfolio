import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"


const Navbar = () => {

  return (

    <div className = "navbar">
        <div className = "links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/experience">Experience</Link>
        </div>
    </div>
  )
}

export default Navbar