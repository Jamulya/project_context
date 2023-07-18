import React, { useContext } from 'react'
import {AiFillShopping} from 'react-icons/ai'
import CartContext from './context'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const {items,  ChangeTheme} = useContext((CartContext))

    const ChangeToDarkMode = () => {
      ChangeTheme()
    }
  return (
    <div className='navbar'>
        <Link to='/homepage'> <span>Home</span></Link>
        <Link to='/about'> <span>About</span></Link>
        <Link to='/contacts'> <span>Contacts</span></Link>
        <Link to='/userPage'> <span>User Page</span></Link>
        <Link to={'/'}> <span>MacBook</span></Link>
        <Link to='/checkout'> 
        <div className='cart'>
        <AiFillShopping/>
            <p>{items.length}</p>

        </div>
          </Link>
          <button onClick={ChangeToDarkMode}>Dark mode</button>

    </div>
  )
}

export default NavBar