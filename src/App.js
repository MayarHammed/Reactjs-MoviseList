import { Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import NavBar from "./Componets/Navbar";
import MoviesList from "./Componets/MoviesList";
import MovieDetails from "./Componets/MovieDetails";

import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // All Movies
  const [movies, setMovies] = useState([]);
  // page Current
  const [pageCount, setpageCount] = useState(0);

  //get all movies
  const getAllMovies = async () => {
    try {
      const APIAllMovies =
        "https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=en";
      const res = await axios.get(APIAllMovies);
      setMovies(res.data.results);
      setpageCount(res.data.total_pages);
    } catch (error) {
      console.log(" Error In getAllMovies ");
    }
  };

  //get page
  const getPage = async (page) => {
    try {
      const APIcurrent = `https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=en&page=${page}`;
      const res = await axios.get(APIcurrent);
      setMovies(res.data.results);
      setpageCount(res.data.total_pages);
    } catch (error) {
      console.log("Error In get page");
    }
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  //to search
  const search = async (word) => {
    try {
      const APISearch = `https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=en`;
      if (word !== "") {
        const res = await axios.get(APISearch);
        setMovies(res.data.results);
        setpageCount(res.data.total_pages);
      } else {
        getAllMovies();
      }
      
    } catch (error) {
      console.log("Error In Api search ");
      
    }
   
  };
  return (
    <div className="font color-body ">
      <NavBar search={search} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MoviesList
                  movies={movies}
                  getPage={getPage}
                  pageCount={pageCount}
                />
              }
            />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
