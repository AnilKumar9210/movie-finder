import React, { useContext, useEffect, useState } from "react";
import "./Search.css";
import bgImages from '../index.js'
import Footer from "./Footer.jsx";
import { AppContext } from "../Context/Context.jsx";
import Movie from "./Movie.jsx";

const Search = () => {
  const [recent, setRecent] = useState([]);
  // const [search,setSearch] = useState ("");
  const [open,setOpen] = useState (false);
  const [movie,setMovie] = useState ('');
  const [found,setFound] = useState (false);
  const {result,setResult,search,setSearch} = useContext (AppContext)

  // useEffect (()=> {},[movie]) 


 

  const handleKeyDown = async(e)=> {
    if(e.key === 'Enter') {
        console.log(search);
        let check = recent.find (val=> val===search);
        !check ? setRecent ((prev)=> [...prev,search]) : null;

        console.log(bgImages.filter ((val)=> val[1].toLowerCase().includes (search.toLowerCase())));
        
      try {
      const res = await fetch (`http://www.omdbapi.com/?t=${search}&apikey=817695c5`);
      const data = await res.json ();
      setResult ((prev)=> ([...prev,data]));
      setFound (true);
      // setResult (data);
      console.log (result,data);
    } catch (e) {
      console.error ('Error fetching data',e);
    }
        setSearch ("");
      }
    }
    
    const handleSearch = async(e)=> {
      setResult ([])
      setSearch (e.target.value);
      
      // setResult (bgImages.filter ((val)=> val[1].toLowerCase().replaceAll (" ", "").includes (search.toLowerCase().replaceAll (" ", "").trimEnd ())));

  }

  const handleClear = (index)=> {
    let newVals = recent.filter ((val,i)=> i!=index);
    setRecent (newVals)
  }

  const getRuntime=(runtime)=> {
    let time = runtime.split (" ");
    return ` ${Math.floor (time[0]/60)}hrs ${time[0]%60}mins`
  }

  const handleTrending = async(name)=> {
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
  

  return (
    <div className="search">
      <div className="search-box">
        <div>
          <svg
            class="w-8 h-8 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="none"
            viewBox="0 0 28 28"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input type="text" 
        onChange={(e)=>{handleSearch (e)}}
         onKeyDown={handleKeyDown} 
         placeholder="Movies Shows and more..."
         value={search}/>
      </div>

      <div className="recent">
        {recent.map ((val,i)=> (<div className="recent-item">
          <div className="clock">
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
                d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <span onClick={()=> {setSearch (val)}}>{val}</span>
          <div className="clear" onClick={()=>{handleClear (i)}}>
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
                d="M5 12h14"
              />
            </svg>
          </div>
        </div>))}
      </div>

      {found && <div className="result">
        {result.map ((movie)=> (<div className="result-item" onClick={()=>setOpen (true)}>
          <img src={movie.Poster} alt="" />
          <div className="info">
            <h3>{movie.Title}</h3>
            <ul>
              <li>{movie.Released}</li>
              <li>{getRuntime (movie.Runtime)}</li>
              <li>U/A 13+</li>
            </ul>
            <p>{movie.Plot}</p>
          </div>
        </div>))}
      </div>}
      <div className="trending" >
        <div className="action">
                <div className="action-title" style={{color:"white"}} >
                  Trending
                </div>
                <div className="cat-content">
                {bgImages.map ((src , i)=> (<div className="item" onClick={()=>{handleTrending (src[1])}}>
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
        
            </div></div>
            <Movie isOpen={open} onClose={() => setOpen(false)} />
            <div className="line"></div>
            <Footer/>
    </div>
  );
};

export default Search;
