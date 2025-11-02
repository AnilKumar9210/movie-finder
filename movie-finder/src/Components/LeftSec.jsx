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
import { useNavigate } from 'react-router-dom'

const LeftSec = () => {
  const navigate = useNavigate ()
    const { login ,setLogin } = useContext(AppContext);
    useEffect(()=> {},[login])

    const handleSearch = ()=> {
      navigate ('./search')
    }

    const handleHome = ()=> {
      navigate ('./home')
    }

  return (
    <div className={`${login ? 'leftSec' : 'none'}`}>
        <div className='logo'>
        <img src={media_player} alt="" style={{width:50, height:60}} />
        </div>
      <div className="icon">
        <img className='white' src={home} alt=""  onClick={handleHome}/>
        <img className='white' src={search} alt="" onClick={handleSearch} />
        <img className='white' src={categories} alt="" />
        <img className='white' src={television} alt="" />
        <img className='white' src={love} alt="" />
        <img className='white' src={user} alt="" onClick={()=>navigate ('./profile')} />
      </div>
      
    </div>
  )
}

export default LeftSec
