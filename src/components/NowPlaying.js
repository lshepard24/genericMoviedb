import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Search } from './index';

const NowPlaying = (props) => {
  const nowPlaying = props.movies.results;
  return (
    <div>
      <h2>Now Playing</h2>
      <div className="flex-container">
      {
        nowPlaying && nowPlaying.map(movie => (
          <div className="item" key={movie.id}>
          <Link to={`/now-playing/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}/>
            <div className="caption">
              <h4>
                <span>{movie.title}</span>
              </h4>
            </div>
            </Link>
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default NowPlaying;
