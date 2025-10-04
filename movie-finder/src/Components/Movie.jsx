import React, { useContext, useState } from "react";
import { AppContext } from "../Context/Context";
import retro from "../assets/backgrounds/retro.jpg";
import "./Movie.css";

const Movie = ({ isOpen, onClose }) => {
  const { result, setResult } = useContext(AppContext);

  if (!isOpen) return null; 
  const getRuntime=(runtime)=> {
    let time = runtime.split (" ");
    return ` ${Math.floor (time[0]/60)}hrs ${time[0]%60}mins`
  }

  return (
    <div className="movie-overlay" onClick={onClose}>
      <div
        className="movie-container"
        onClick={(e) => e.stopPropagation()} 
      >
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <img src={result[0].Poster} alt="Retro" />
        <div className="more-details">
          <h1>{result[0].Title}</h1>
          <ul className="movie-info">
            <li>{`Released on :${result[0].Released}`}</li>
            <li>{`Run time : ${getRuntime (result[0].Runtime)}`}</li>
            <li>{`Censor : ${result[0].Rated}`}</li>
          </ul>
          <p>
           {result[0].Plot}
          </p>

          <h4>More Info</h4>
          <ul className="more-info">
            <li>{`Actors : ${result[0].Actors}`}</li>
            <li>{`Director : ${result[0].Director}`}</li>
            <li>{`Awards: ${result[0].Awards}`}</li>
            <li>{`Box Office: ${result[0].BoxOffice}`}</li>
            <li>{`Genre: ${result[0].Genre}`}</li>
            <li>{`Language: ${result[0].Language}`}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Movie;
