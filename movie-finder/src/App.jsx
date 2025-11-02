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
  return (
    <div className={`App ${!login?'':'center'}`}>
      <LeftSec/>
      <div className='main-content' style={{height:100+'vh',background:'black'}}>
      <Routes>
        <Route path='/' element={<Onboarding/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default App
