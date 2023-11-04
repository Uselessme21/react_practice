import React from 'react'
import { Link } from 'react-router-dom'
import "./css/styles.css"
const Navbar = () => {
  return (
    <>
    <nav className="navbar">
    <Link to="/"> Home</Link>
    <Link to="/about"> About</Link>
    <Link to="/restaurant"> Restaurant</Link>
   
    </nav>
   
    </>
    
  )
}

export default Navbar