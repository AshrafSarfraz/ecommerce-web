import React from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/hero-section/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/product-card/ProductCard'
import Track from '../../components/filter/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'

export default function Home() {
  return (
    <div>
      <Layout>
        <HeroSection/>
        <Filter/>
        <ProductCard/>
        <Track/>
        <Testimonial/>
      </Layout>
    </div>
  )
}
