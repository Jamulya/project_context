import React, { createContext, useState } from 'react'

const CartContext = createContext();


export function CartProvider({children}) {
    const [items, setItems] = useState([])
    const [theme, setTheme] = useState('light')

    const addToCart = (name, price, img) => {
        setItems((prevState) => [...prevState, {name, price, img}])
    }
    const ChangeTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark': 'light'))
    }

return (
    <CartContext.Provider value={{
            items,
            addToCart,
            theme,
            ChangeTheme
    }}>
        {children}
    </CartContext.Provider>
)

}
export default CartContext;

 