import React from 'react'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <div className='topbarContainer bg-black flex justify-between h-16 items-center text-white px-10'>
        <div>
            <p className='text-4xl'><Link to="/">Movies<span className='text-purple-500'>Lib</span></Link></p>
        </div>
        <nav>
            <ul className='flex justify-between gap-10'>
                <li className='text-xl'><Link to="/movies">Filmes</Link></li>
                <li className='text-xl'><Link to="/series">Séries</Link></li>
                <li className='text-xl'><Link to="/favorites">Favoritos</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Topbar
