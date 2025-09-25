import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [login, setLogin] = useState(localStorage.getItem ('login'));
  const [genres, setGenres] = useState([]);
  const [movieByGenre, setMovieByGenre] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect (()=> {
    async function getMovies () {
      try {
      const res = await fetch("http://localhost:5000/api/genres");
      const data = await res.json();
      setGenres(data.genres);

      const genreMovies = await Promise.all(
        data.genres.map(async (genre) => {
          const res = await fetch(`http://localhost:5000/api/movies/${genre.id}`);
          const movies = await res.json();
          return [genre.name, movies.results];
        })
      );

      const moviesByGenreObj = Object.fromEntries(genreMovies);
      setMovieByGenre(moviesByGenreObj);
    } catch (err) {
      console.error("Error fetching from proxy:", err);
    }
  }
    
    getMovies ();
  },[])

  return (
    <AppContext.Provider
      value={{
        login,
        setLogin,
        genres,
        movieByGenre,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
