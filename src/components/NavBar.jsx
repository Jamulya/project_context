import React, { useContext } from 'react'
import {AiFillShopping} from 'react-icons/ai'
import CartContext from './context'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const {items} = useContext((CartContext))
  return (
    <div className='navbar'>
        <Link to='/homepage'> <span>Home</span></Link>
        <Link to='/about'> <span>About</span></Link>
        <Link to='/contacts'> <span>Contacts</span></Link>
        <Link to='/userPage'> <span>User Page</span></Link>
        <Link to={'/'}> <span>MacBook</span></Link>
        <Link to='/card'> <span>Card</span></Link>

        <div className='cart'>
        <AiFillShopping/>
            <p>{items.length}</p>

        </div>

    </div>
  )
}

export default NavBar