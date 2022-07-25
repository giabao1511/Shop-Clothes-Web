import React from 'react'
import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import sliderData from '../assets/fake-data/hero-slider'

const Home = () => {
  return (
    <Helmet title="Trang chủ">
      <HeroSlider
        data={sliderData}
        control={true}
        auto={false}
        timeOut={3000} />
    </Helmet>
  )
}

export default Home