import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const MovieDetails = (props) => {
  const [highlighted, setHighlighted] = useState(-1);
  const mov = props.movie;
  const highlightRate = (high) => (evt) => {
    setHighlighted(high);
  };

  const rateClicked = (rate) => (evt) => {
    fetch(`http://127.0.0.1:8000/api/movies/${mov.id}/rate_movie/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token b41fa5e9613329067b81bf277092e59820a1081a",
      },
      body: JSON.stringify({ stars: rate + 1 }),
    })
      .then((resp) => resp.json())
      .then((resp) => console.log(resp))
      .catch((error) => console.log(error));
  };

  return (
    <>
      {mov ? (
        <>
          <h1>{mov.title}</h1>
          <p>{mov.description}</p>
          <FontAwesomeIcon
            icon={faStar}
            className={mov.avg_rating > 0 ? "orange" : ""}
          />
          <FontAwesomeIcon
            icon={faStar}
            className={mov.avg_rating > 1 ? "orange" : ""}
          />
          <FontAwesomeIcon
            icon={faStar}
            className={mov.avg_rating > 2 ? "orange" : ""}
          />
          <FontAwesomeIcon
            icon={faStar}
            className={mov.avg_rating > 3 ? "orange" : ""}
          />
          <FontAwesomeIcon
            icon={faStar}
            className={mov.avg_rating > 4 ? "orange" : ""}
          />
          ({mov.no_of_ratings})
          <div className="rate-container">
            <h2>Rate it</h2>
            {[...Array(5)].map((e, i) => {
              return (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className={highlighted > i - 1 ? "purple" : ""}
                  onMouseEnter={highlightRate(i)}
                  onMouseLeave={highlightRate(-1)}
                  onClick={rateClicked(i)}
                />
              );
            })}
          </div>
        </>
      ) : null}
    </>
  );
};

export default MovieDetails;
