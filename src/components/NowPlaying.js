import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Search } from './index';

const NowPlaying = (props) => {
  const nowPlaying = props.movies.results;
  return (
    <div>
      <h2>Now Playing in Theatres</h2>
      <div className="flex-container">
      {
        nowPlaying && nowPlaying.map(movie => (
          <div className="item" key={movie.id}>
          <Link to={`/now-playing/${movie.id}`}>
            <div className="caption">
              <h3>
                <span>{movie.title}</span>
              </h3>
            </div>
            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}/>
            </Link>
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default NowPlaying;
