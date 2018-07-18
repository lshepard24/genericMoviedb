import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const TopRated = (props) => {

  const topRated = props.movies.results;

  return (
    <div>
      <h2>Top Rated Movies</h2>
      <div className="flex-container">
      {
        topRated && topRated.map(movie => (
          <div className="item" key={movie.id}>
            <div className="caption">
              <h3>
                <span>{movie.title}</span>
              </h3>
            </div>
            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}/>
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default TopRated;
