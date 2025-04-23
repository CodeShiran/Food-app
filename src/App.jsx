import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Food from './components/Food'
import Categories from './components/Categories'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Categories />
    </div>
  )
}

export default App