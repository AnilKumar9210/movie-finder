import React, { useState } from "react";
import "./Search.css";

const Search = () => {
  const [recent, setRecent] = useState([])
  const [search,setSearch] = useState ("")

  const handleKeyDown = (e)=> {
    if(e.key === 'Enter') {
        console.log(search);
        let check = recent.find (val=> val===search);
        !check ? setRecent ((prev)=> [...prev,search]) : null;
        setSearch ("");
    }
  }

  const handleClear = (index)=> {
    let newVals = recent.filter ((val,i)=> i!=index);
    setRecent (newVals)
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
        onChange={(e)=>{setSearch(e.target.value)}}
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
    </div>
  );
};

export default Search;
