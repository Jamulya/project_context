import React, { useContext } from 'react'
import { AiFillShopping } from 'react-icons/ai'
import CartContext from './context'

const Card = ({name, price}) => {
    const {addToCart} = useContext(CartContext)
  return (
    <div onClick={() => addToCart(name, price)} className='card'>
        <div className='products'>
            <img src="https://images.macrumors.com/t/MwgTEggiztXrvIN2l8bZny1f93M=/1600x/article-new/2013/09/2023-macbook-pro-transparent.png" alt="" />
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