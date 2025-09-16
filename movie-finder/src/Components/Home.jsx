import React, { useEffect } from "react";
import "./Home.css";
import LeftSec from "./LeftSec";

const Home = () => {
  const ACCESS_TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTQyN2U5NjhiOGYwZmRkZjIxNzc1OGIzMjNlMjM3NCIsIm5iZiI6MTc1ODAwMjAwNC42NTYsInN1YiI6IjY4YzhmYjU0ZTFlYjZmNjlhMTgwNGU3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VUQZF9wvWDSW2mCXHF4fwZSD5v6ZTv7ThBw-Sc805tI";

  useEffect(() => {
    document.title = "Movie Finder";
    async function getPopularMovies() {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
            accept: "application/json",
          },
        }
      );
      const data = await res.json ();
      console.log(data.results)
    }
    getPopularMovies ();
  }, []);
  return (
    <div className="home">
    </div>
  );
};

export default Home;
