import React from 'react';
import './navbar.css'
import logo from '../assets/logo.png'
import { useState } from 'react';
import {Link} from 'react-scroll'
import {Menu , Close} from '@mui/icons-material';
function Navbar() {

    const [click, setclick] = useState(true);
    const handleClick = ()=>{
        setclick(!click)
    }

  return <div className="nav_container">
      <div className='navbar'>
      <div className="main_logo">
          <img src={logo} alt="" />
      </div>
      <div className= "nav_links">
          <ul>
              <Link className='nav_link' to='Home' smooth={true} duration={1000} >HOME</Link>
              <Link className='nav_link'to='Contact' smooth={true} duration={1000}>CONTACT US</Link>
              <Link className='nav_link'to='Services' smooth={true} duration={1000}>SERVICES</Link>
              <Link className='nav_link'to='Projects' smooth={true} duration={1000}>PROJECTS</Link>
              <Link className='nav_link'to='About' smooth={true} duration={1000}>ABOUT US</Link>
          </ul>
      </div>

      {
          click? <i className='hamberger_icon' ><Menu onClick={handleClick} style={{fontSize:'2.2rem'}}></Menu></i>: <i className='hamberger_icon' ><Close  onClick={handleClick} style={{fontSize:'2.2rem'}}></Close></i>
      }

  </div>

  <div className=  {click?"hamberger_close":"hamberger_links"}>
          <ul>
              <Link className='nav_link' to='Home' smooth={true} duration={1000} >HOME</Link>
              <Link className='nav_link'to='Contact' smooth={true} duration={1000}>CONTACT US</Link>
              <Link className='nav_link'to='Services' smooth={true} duration={1000}>SERVICES</Link>
              <Link className='nav_link'to='Projects' smooth={true} duration={1000}>PROJECTS</Link>
              <Link className='nav_link'to='About' smooth={true} duration={1000}>ABOUT US</Link>
          </ul>
      </div>
  </div> 
}

export default Navbar;
