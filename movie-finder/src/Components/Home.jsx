import React, { useRef, useState, useContext } from "react";
import "./Home.css";
import LeftSec from "./LeftSec";
import { AppContext } from "../Context/Context";
import retro from "../assets/backgrounds/retro.jpg";
import bgImages from '../index.js'

const Home = () => {
  const [activeClass, setActiveClass] = useState(0);
  const countBg = bgImages.length;
  const [itemActive,setItemActive] = useState (0);
  const [tActive,setTActive] = useState (0);
  const bgRefs = useRef ([])
  const tRefs = useRef ([])

  const handleThumbnail = (index)=> {
    tRefs.current[index].classList.add ('active');
    tRefs.current[tActive].classList.remove ('active');
    bgRefs.current[index].classList.add ('active');
    bgRefs.current[itemActive].classList.remove ('active');
    setItemActive (index);
    setTActive (index);
  }

  
  
  const handleNextBg = (e)=> {
    const currentVal = itemActive;
    bgRefs.current[currentVal].classList.remove ('active');
    let nextActive = currentVal+1;
    if (nextActive >= countBg) 
      nextActive = 0
    bgRefs.current[nextActive].classList.add ('active');
    setItemActive (nextActive)
  }
  const handlePrevBg = ()=> {
    //  bgRefs.current[index]
    const currentVal = itemActive;
    bgRefs.current[currentVal].classList.remove ('active');
    let nextActive = currentVal-1 < 0?countBg:currentVal-1;
    
    bgRefs.current[nextActive].classList.add ('active');
    console.log(nextActive)
    setItemActive (nextActive)
  }

  return (
    <div className="home">
      <div className="slider">
        <div className="list">
          {bgImages.map ((src,i)=> (
          <div key={i} 
          ref={(el)=> (bgRefs.current[i] = el)} 
          className={`item ${i == 0 ? 'active' : ''}`
          }>
            <img src={src[0]} alt="" />
            <div className="content">
              <h2>{src[1]}</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
                odit ea quo soluta distinctio facilis, aliquid totam sapiente
                sunt itaque. Eligendi ex veritatis pariatur, error voluptas
                consequatur sapiente deserunt quos non minima.
              </p>
            </div>
          </div>))}
          
        </div>

        <div className="arrows">
          <div className="prevBtn" onClick={handlePrevBg}>
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m15 19-7-7 7-7"
              />
            </svg>
          </div>
          <div className="nextBtn" onClick={handleNextBg}>
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m9 5 7 7-7 7"
              />
            </svg>
          </div>
        </div>

        <div className="thumbnail">
          {bgImages.map ((src,i)=> (<div key={i}
          ref={(el)=> (tRefs.current[i] = el)}
           onClick={()=>{handleThumbnail (i)}} 
           className={`item ${i == 0?'active':''}`}>
            <img src={src[0]} alt="" />
            <div className="content">
              Heading
            </div>
          </div>))}
          
        </div>
      </div>

      {/* categories */}

      <div className="action">
        <div className="action-title" style={{color:"white"}}>
          Action
        </div>
        <div className="cat-content">
        {bgImages.map ((src , i)=> (<div className="item">
          <div className="cover">
          <img src={src[0]} alt="" />
          </div>
          <div className="title">
            <span>{src[1]}</span>
          </div>
          <div className="extra-content">
            <p>{src[2]}</p>
          </div>
        </div>))}
      </div>

    </div>
    </div>

  );
};

export default Home;
