import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../request";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          // Math.floor(Math.random() * (request.data.results.length - 2))
          Math.floor(Math.random() * 6)
        ]
      );
    }
    fetchData();
  }, []);
  console.log(movie);
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <div className="banner">
      <div className="banner__background">
        <img
          src={`http://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt=""
          className="banner__img"
        />
      </div>
      <div className="banner__content">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie.original_name}
        </h1>
        <div className="banner__button">
          <button>
            <img alt="" src="/play-icon-black.png" />
            <span>PLAY</span>
          </button>
          <button className="banner__buttonList">My List</button>
        </div>
        <div className="banner__description">
          {truncate(movie?.overview, 150)}
        </div>
        
      </div>
      <div className="banner--fadeTop" />
      <div className="banner--fadeBottom" />
    </div>
  );
}

export default Banner;
