import React from 'react'
import "../App.css"
// import FontAwesomeIcon from 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavBar = () => {
  return (
    <div>
    {/* NavBar Starts */}
      <nav className="nav-bar" id="nav-bar">
        <div className='nav-center'>
          {/* Nav bar header */}
          <div className='nav-header'>
            {/* Nav logo */}
            <h3>Reycle<span className='LastName'>Mate</span></h3>
            <button className='nav-btn'>
            {/* <FontAwesomeIcon icon="fa-solid fa-bars" />
             */}
            click
            </button>
          </div>
          {/* Nav bar links */}
          <ul className='nav-links'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li className='SignUp'>Sign up</li>
          </ul>
        </div>
      </nav>
    {/* Nav Bars End */} 
    </div>
  )
}

export default NavBar;
