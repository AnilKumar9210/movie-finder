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
function App() {
  const { login } = useContext(AppContext);
  useEffect (()=> {},[login])
  return (
    <div className={`App ${!login?' ':'center'}`}>
      <LeftSec/>
      <div>
      <Routes>
        <Route path='/' element={<Onboarding/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default App
