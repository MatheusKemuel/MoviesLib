import React from 'react'
import Banner from '../components/home/Banner'
import Carousel from '../components/home/Carousel'
import Trailers from '../components/home/Trailers'
import Movies from '../components/home/Movies'
import Series from '../components/home/Series'

const Home = () => {
  return (
    <div className='container text-white'>
      
      <Banner />
      <Carousel />
      <Trailers />
      <Movies />
      <hr className='my-16 w-1/2 mx-auto'/>
      <Series />
    </div>
  )
}

export default Home
