import React from 'react'
import Hero from '../components/Hero'
import USP from '../components/USP'
import Details from '../components/Details'
import Cards from '../components/Cards'

function Home() {
  return (
    <section className='home-page min-h-screen'>
      
        <Hero/>
        <USP/>
        <Details/>
        <Cards/>

    </section>
  )
}

export default Home
