import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const MovieDetails = () => {
  const param = useParams();
  //   console.log(param);

  // storg movieDetails by useState
  const [movie, setMovie] = useState([]);

  //get >> movieDetails
  const getDetails = async () => {
    const APTParam = `https://api.themoviedb.org/3/movie/${param.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=en`;
    const res = await axios.get(APTParam);
    setMovie(res.data);
  };
  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div>
      <Row className="justify-content-center">
        <h1>DetailsMovie...</h1>
        <Col md="12" xs="12" sm="12" className="mt-4 ">
          <div className="card-detalis  d-flex align-items-center ">
            <img
              className="img-movie w-30"
              src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
              alt="ascad"
            />
            <div className="justify-content-center text-center  mx-auto">
              <h3>Details...</h3>
              <p className="card-text-details border-bottom">
                Name Movies {movie.title}
              </p>
              <p className="card-text-details border-bottom">
                Movie Data :{movie.release_date}
              </p>
              <p className="card-text-details border-bottom">
                The number of residents: {movie.vote_count}
              </p>
              <p className="card-text-details border-bottom">
                Evaluation :{movie.vote_average}
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-1 ">
          <div className="card-story  d-flex flex-column align-items-start">
            <div className="text-end p-4 ">
              <p className="story">story:</p>
            </div>
            <div className="text-end px-2">
              <p className="card-text-story">{movie.overview}</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col
          md="10"
          xs="12"
          sm="12"
          className="mt-2 d-flex justify-content-center "
        >
          <Link to="/">
            <button
              style={{
                backgroundColor: "greenyellow",
                color: "black",
                border: "none",
                marginBottom:"20px"
              }}
              className="btn btn-primary "
            >
              Back
            </button>
          </Link>
          <a href={movie.homepage}>
            <button
              style={{
                backgroundColor: "greenyellow",
                color: "black",
                fontSize: "15px",
                border: "none",
              }}
              className="btn btn-primary"
            >
              watching Movie
            </button>
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default MovieDetails;
