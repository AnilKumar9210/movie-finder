import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Onboarding from './Components/Onboarding'
import Login from './Components/Login'
import Home from './Components/Home'
import {Route,Routes } from 'react-router-dom'
import './App.css'
import LeftSec from './Components/LeftSec'
import { AppContext } from './Context/Context'
import { useContext } from 'react'
import Search from './Components/Search'
import Profile from './Components/Profile'
function App() {
  const { login } = useContext(AppContext);
  useEffect (()=> {},[login])
  return (<>{!login?<Onboarding/>:
      <div className='main-content' style={{height:100+'vh',background:'black'}}>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      </div>}
  </>)
}

export default App
