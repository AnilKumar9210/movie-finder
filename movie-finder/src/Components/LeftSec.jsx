import React, { useEffect } from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context/Context'
import './LeftSec.css'
import categories from '../assets/icons/categories.png'
import home from '../assets/icons/home.png'
import search from '../assets/icons/search.png'
import user from '../assets/icons/user.png'
import television from '../assets/icons/television.png'
import love from '../assets/icons/love.png'
import media_player from '../assets/media-player.png'

const LeftSec = () => {
    const { login } = useContext(AppContext);
    useEffect(()=> {},[login])
  return (
    <div className={`${login ? 'leftSec' : 'none'}`}>
        <div className='logo'>
        <img src={media_player} alt="" style={{width:50, height:60}} />
        </div>
      <div className="icon">
        <img className='white' src={home} alt="" />
        <img className='white' src={search} alt="" />
        <img className='white' src={categories} alt="" />
        <img className='white' src={television} alt="" />
        <img className='white' src={love} alt="" />
        <img className='white' src={user} alt="" />
      </div>
      <button class="end">
  
  <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
  
  <div class="text">Logout</div>
</button>
    </div>
  )
}

export default LeftSec
