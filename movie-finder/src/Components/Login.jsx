import React, { useEffect, useState } from 'react'
import './login.css'
import bg_poster from '../Assets/bg_poster.jpg'
import google from '../assets/google.png'
import facebook from '../assets/facebook-app-symbol.png'
import apple from '../assets/apple-logo.png'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../Context/Context'

const Login = () => {
    const { setLogin } = useContext(AppContext);
    const [active,setActive] = useState ({})
    const [signIn,setSignIn] = useState (false)
    const [signUp,setSignUp] = useState (false)
    const [name,setName] = useState ("")
    const [email,setEmail] = useState ("")
    const [pass,setPass] = useState ("")
    const [vName,setVname] = useState (false)
    const [vEmail,setVemail] = useState (false)
    const [vPass,setVpass] = useState (false)
    const navigate = useNavigate ();

    useEffect (()=> {
      localStorage.setItem ('login',Login);
    },[Login])

    useEffect (()=> {
      const savedLogin = localStorage.getItem ('login');
      if (savedLogin) {
        navigate ('/home')
      }
      setLogin (savedLogin);
    },[]);

    const toggleClass = (id)=> {
        setActive ((prev)=> ({
            ...prev,
            [id]:!prev[id],
        }))
    }

    const handleSignUp = ()=> {
      if (email.length<1) {
        setVemail(true);
      }
      if (pass.length<1) {
        setVpass(true);
      }
      if (name.length<1) {
        setVname(true);
        return;
      } else {
        navigate ('/home');
        setLogin (true);
      }
    }

    const handleName = (e)=> {
      setName (e.target.value);
      setVname(false);
    }
    const handleEmail = (e)=> {
      setEmail (e.target.value);
      setVemail(false);
    }
    const handlePass = (e)=> {
      setPass (e.target.value);
      setVpass(false);
    }
    

    const handleSignIn = ()=> {
      if (email.length<1) {
        setVemail(true);
      }
      if (pass.length<1) {
        setVpass(true);
        return;
      } else {
        navigate ('/home');
        setLogin(true)
      }
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
        {signUp && <input className='input' type="text" placeholder='Enter your name' onChange={(e)=>{handleName(e)}} />}
        <span className={`${vName?'show':'none'}`}>*enter valid name*</span>
        <input className='input' type='email' placeholder='Enter your email'onChange={(e)=> {handleEmail(e)}} />
        <span className={`${vEmail?'show':'none'}`}>*enter valid email*</span>
        <input className='input' type="password" placeholder='Enter your password' onChange={(e)=>{handlePass(e)}} />
        <span className={`${vPass?'show':'none'}`}>*enter valid password*</span>
        {!signUp && <div className='fPass'>forgot password?</div>}
        {signUp?<button className='btn-sin' onClick={handleSignUp}>Sign Up</button>:<button className='btn-sin' onClick={handleSignIn}>Sign In</button>}
        {!signUp && <span className='signUp-l' onClick={()=>(setSignUp(true))}>Don't have an account? Sign up</span>}
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
