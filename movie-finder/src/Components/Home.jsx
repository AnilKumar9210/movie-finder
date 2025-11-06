import React, { useRef, useState, useContext } from "react";
import "./Home.css";
import LeftSec from "./LeftSec";
import { AppContext } from "../Context/Context";
import retro from "../assets/backgrounds/retro.jpg";
import bgImages from '../index.js'
import Footer from "./Footer.jsx";
import Movie from "./Movie.jsx";

const Home = () => {
  const [open, setOpen] = useState(false);
  const countBg = bgImages.length;
  const [itemActive,setItemActive] = useState (0);
  const [tActive,setTActive] = useState (0);
  const bgRefs = useRef ([])
  const tRefs = useRef ([])
  const {result,setResult} = useContext (AppContext)


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

  const handleAction = async(name)=> {
    if (result.length > 0) {
      setResult ([]);
      result.length = 0
    }
    try {
      const res = await fetch (`http://www.omdbapi.com/?t=${name}&apikey=817695c5`);
      const data = await res.json ();
      setResult ((prev)=> ([...prev,data]));

      console.log (result,data);
      setOpen (true);
    } catch (e) {
      console.error ('Error fetching data',e);
    }
  }

  return (<>
  <LeftSec/>
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
                {src[2]}
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
          New Releases
        </div>
        <div className="cat-content">
        {bgImages.map ((src , i)=> (<div className="item" key={i} onClick={()=>{handleAction (src[1])}}>
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
    <Movie isOpen={open} onClose={() => setOpen(false)} />
    <div className="line"></div>
    <Footer/>
    </div></>

  );
};

export default Home;
