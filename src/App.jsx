import React from 'react'
import Navbar from './components/navbar'
import { HeroSection } from './components/heroSection'
import Banner from './components/banner'
import Products from './components/products'
import Footer from './components/footer'

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Banner />
      <Products />
      <Footer />
    </>
  )
}

export default App
