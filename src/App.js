import React from 'react'
import NavbarComponent from './components/navbar'
import MyNavbar from './components/header'
import SidebarCarousel from './components/sidebar'
import Card from './components/cards'
import TopCategories from './components/topcategories'
import FeatureSection from './components/helpline'
import Premier from './components/Premier'
import Brands from './components/brands'
import Footer from './components/footer'
import Reviews from './components/reviews'
import CardLayout from './components/bestseling'
import CardLayout1 from './components/topcllection'
import CardLayout2 from './components/featured'
import CardLayout5 from './components/bestshops'


const App = () => {
  return (
    <div>
      <NavbarComponent/>
      <MyNavbar/>
      <br></br>
      <SidebarCarousel/>
      <Card/>
   <FeatureSection/>
    <TopCategories/>
    <CardLayout/>
    <Premier/>
    <br></br>
    <CardLayout1/>
    <CardLayout5/>
    <CardLayout2/>
    
    <Reviews/>
    <Brands/>
    <Footer/>
    </div>
  )
}

export default App
