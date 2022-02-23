import React from 'react'
import { Link } from 'react-router-dom'

<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"></link>
const Navbar = () => {
  return (
    <> 
 

    <nav className='navbar-menu'>
      <ul className="navbar-list">
        <Link className='navbar-item' to="/" >
          Home 
        </Link>
        <Link className='navbar-item' to="/favorites" >
          Favorites
        </Link>

      </ul>

    </nav>






    </>
  )
}

export default Navbar