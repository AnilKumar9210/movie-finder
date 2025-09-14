import React, { useState } from 'react'
import './login.css'
import bg_poster from '../Assets/bg_poster.jpg'
import google from '../assets/google.png'
import facebook from '../assets/facebook-app-symbol.png'
import apple from '../assets/apple-logo.png'

const Login = () => {

    const [active,setActive] = useState ({})
    const [signIn,setSignIn] = useState (false)
    const [signUp,setSignUp] = useState (false)

    const toggleClass = (id)=> {
        setActive ((prev)=> ({
            ...prev,
            [id]:!prev[id],
        }))
    }

  return (
    <div className='login'>
        {!signIn?<div className="genre">
        <h1>Choose your favorite genre</h1>
        <div className='container'>
      <img src={bg_poster} alt="Background Poster" />
      <div className='genres'>
        <span className={active['g1']?'selected':""} onClick={(e)=>{toggleClass('g1')}}>Action</span>
        <span className={active['g2']?'selected':""} onClick={(e)=>{toggleClass('g2')}}>Drama</span>
        <span className={active['g3']?'selected':""} onClick={(e)=>{toggleClass('g3')}}>Comedy</span>
        <span className={active['g4']?'selected':""} onClick={(e)=>{toggleClass('g4')}}>Thriller</span>
        <span className={active['g5']?'selected':""} onClick={(e)=>{toggleClass('g5')}}>Horror</span>
        <span className={active['g6']?'selected':""} onClick={(e)=>{toggleClass('g6')}}>Romance</span>
        <span className={active['g7']?'selected':""} onClick={(e)=>{toggleClass('g7')}}>Sci-Fi</span>
      </div>
        </div>
      <button className='next' onClick={()=>(setSignIn(true))}>next</button>
      <span className='skip' onClick={()=>(setSignIn(true))}>skip</span>
      </div>:<div className="signIn">
        {!signUp?<h1>Sign In</h1>:<h1>Sign Up</h1>}
        <input className='input' type='email' placeholder='Enter your email' />
        <input className='input' type="password" placeholder='Enter your password' />
        <div className='fPass'>forgot password?</div>
        <button className='btn-sin'>Sign In</button>
        <span className='signUp-l' onClick={()=>(setSignUp(true))}>Don't have an account? Sign up</span>
        <div className='or'>
            <div className="line"></div>
            or
            <div className="line"></div>
        </div>
        <div className="otherWay">
            <div className="icons"><img className='white' src={google} alt="" /></div>
            <div className="icons"><img className='white' src={facebook} alt="" /></div>
            <div className="icons"><img className='white' src={apple} alt="" /></div>
        </div>
        </div>}
    </div>
  )
}

export default Login
