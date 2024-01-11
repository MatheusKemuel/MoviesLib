import React from 'react'
import Banner from '../components/home/Banner'
import Carousel from '../components/home/Carousel'
import Trailers from '../components/home/Trailers'
import Movies from '../components/home/Movies'
import Series from '../components/home/Series'
import Trending from '../components/home/Trending'
import PlayingNow from '../components/home/PlayingNow'

const Home = () => {
  return (
    <div className='container text-white'>
      <Banner />
      <Trending />
      <PlayingNow />
      <Movies />
      <Series />
      <Carousel />
      <hr className='my-16 w-1/2 mx-auto'/>
  
    </div>
  )
}

export default Home
