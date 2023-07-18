import React from 'react'
import Card from './Card'

const Products = () => {
    const products = [
        {name: 'Macbook Air', price: 1000, img: 'https://media.very.co.uk/i/very/RQK7C_SQ1_0000000674_SPACE_GREY_SLf/apple-macbook-pro-m1-pro-2021nbsp14-inchnbspwith-10-core-cpu-and-16-core-gpu-1tb-ssd-space-grey.jpg?$180x240_retinamobilex2$&$roundel_very$&p1_img=blank_apple&fmt=webp'},
        {name: 'Macbook Air', price: 1000,  img: 'https://media.very.co.uk/i/very/RQK7C_SQ1_0000000674_SPACE_GREY_SLf/apple-macbook-pro-m1-pro-2021nbsp14-inchnbspwith-10-core-cpu-and-16-core-gpu-1tb-ssd-space-grey.jpg?$180x240_retinamobilex2$&$roundel_very$&p1_img=blank_apple&fmt=webp'},
        {name: 'Macbook Air', price: 1000,  img: 'https://media.very.co.uk/i/very/RQK7C_SQ1_0000000674_SPACE_GREY_SLf/apple-macbook-pro-m1-pro-2021nbsp14-inchnbspwith-10-core-cpu-and-16-core-gpu-1tb-ssd-space-grey.jpg?$180x240_retinamobilex2$&$roundel_very$&p1_img=blank_apple&fmt=webp'},
        {name: 'Macbook Air', price: 1000,  img: 'https://media.very.co.uk/i/very/RQK7C_SQ1_0000000674_SPACE_GREY_SLf/apple-macbook-pro-m1-pro-2021nbsp14-inchnbspwith-10-core-cpu-and-16-core-gpu-1tb-ssd-space-grey.jpg?$180x240_retinamobilex2$&$roundel_very$&p1_img=blank_apple&fmt=webp'},
    ]
  return (
    <div className='product__list'>
        {products.map((products) => (
              <Card name={products.name} price={products.price} img={products.img}/>
        ))}
            
      
    </div>
  )
}

export default Products