import React from 'react'
import Card from './Card'

const Products = () => {
    const products = [
        {name: 'Macbook Air', price: 1000},
        {name: 'Macbook Air', price: 1000},
        {name: 'Macbook Air', price: 1000},
        {name: 'Macbook Air', price: 1000},
    ]
  return (
    <div className='product__list'>
        {products.map((products) => (
              <Card name={products.name} price={products.price}/>
        ))}
            
      
    </div>
  )
}

export default Products