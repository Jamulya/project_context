import React, { useContext } from 'react'
import CartContext from './context'

export const Checkout = () => {
    const {items} = useContext(CartContext);
  return (
    <div>
        <h1>Checkout</h1>
        <div className='shopping__macbook'>
            {items.map((item) => (
                <div>
                    <h2>{item.name}</h2>
                    <h3>{item.price}</h3>
                    <img src={item.img} alt="" />
                </div>
            ))}

        </div>

    </div>
  )
}
