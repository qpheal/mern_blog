import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../mern-blog-assets-main/logo.png'
/*import {Fabars} from 'react-icons/fa'*/
import {AiOutlineClose} from 'react-icons/ai'

const Header = () => {
  return (
    <nav>
       <div className='container nav_container'>
        <Link to= '/'  className= 'nav_logo'>
            <img src={logo} alt='Logo'/>
        </Link>

        <ul className='nav_menu'>
            <li><Link to= '/profile'>Ralph Adjei</Link></li>
            <li><Link to= '/create'>Create Post</Link></li>
            <li><Link to= '/authors'>Authors</Link></li>
            <li><Link to= '/logout'>Log Out</Link></li>
        </ul>

        <button className='nav_toggle_btn'>
            <AiOutlineClose/>
        </button>
       </div>
    </nav>
  )
}

export default Header