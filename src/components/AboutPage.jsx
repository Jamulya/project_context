import React, { useContext } from 'react'
import CartContext from './context'

const AboutPage = () => {
  const {theme} = useContext(CartContext)
  return (
    <div className={`page-color ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <h1 className={theme === 'dark' ? 'dark-text' : ''}>AboutPage</h1>
      <img src="https://hips.hearstapps.com/hmg-prod/images/close-up-of-purple-crocus-flowers-united-kingdom-uk-royalty-free-image-1674159456.jpg" alt="" />
    </div>
  )
}

export default AboutPage