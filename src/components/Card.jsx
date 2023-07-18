import React, { useContext } from 'react'
import { AiFillShopping } from 'react-icons/ai'
import CartContext from './context'

const Card = ({name, price, img}) => {
    const {addToCart} = useContext(CartContext)
  return (
    <div onClick={() => addToCart(name, price, img)} className='card'>
        <div className='products'>
            <img src={img} alt="" />
        </div>
        <div className='basket'>
            <h3>{name}</h3>
            <AiFillShopping/>
        </div>
        <span>${price}</span>

    </div>
  )
}

export default Card