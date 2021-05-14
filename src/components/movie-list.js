import React from "react";

const MovieList = ({ movies }) => {
  const movieClicked = (movie) => evt => {
    props.movieClicked(movie)
  }

  return (
    <div>
      {movies &&
        movies.map((movie) => {
          return (
            <div key={movie.id}>
              <h2 onClick={movieClicked(movie)}>{movie.title}</h2>
            </div>
          );
        })}
    </div>
  );
};

export default MovieList;
