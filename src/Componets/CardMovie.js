import React from "react";

import { Link } from 'react-router-dom'
const CardMovie = ({ item }) => {
  return (
   
        <div className="card">
          <img src={`https://image.tmdb.org/t/p/w500/` + item.poster_path} className="card__image" alt="hu" />
          <div className="card-App">
            <div className="card-mov">
              <p>Name Movies: {item.original_title}</p>
              <p>Release Date:{item.release_date}</p>
              <p> The number of residents: {item.vote_count}</p>
              <p>Evaluation:{item.vote_average} </p>
            </div>
          </div>
        <Link to={`/movie/${item.id}`}> <button className="btn" type="#"> Details Movie </button> </Link>
        </div>
     
 
  );
};

export default CardMovie;