import React from "react";

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies &&
        movies.map((movie) => {
          return <h2>{movie.title}</h2>;
        })}
    </div>
  );
};

export default MovieList;
