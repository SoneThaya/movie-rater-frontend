import React, { useState, useEffect } from "react";
import MovieList from "./components/movie-list";
import "./App.css";
import MovieDetails from "./components/movie-details";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/movies/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token b41fa5e9613329067b81bf277092e59820a1081a",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setMovies(resp))
      .catch((error) => console.log(error));
  }, []);

  const movieClicked = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
      </header>
      <div className="layout">
        <MovieList movies={movies} movieClicked={movieClicked} />
        <MovieDetails movie={selectedMovie} />
      </div>
    </div>
  );
}

export default App;
