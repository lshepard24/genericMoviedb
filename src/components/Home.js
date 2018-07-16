import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Search } from './index';

const Home = (props) => {
  const nowPlaying = props.movies.results;
  console.log('path', nowPlaying);
  return (
    <div>
      <h2>Now Playing</h2>
      <div className="flex-container">
      {
        nowPlaying && nowPlaying.map(movie => (
          <div className="item" key={movie.id}>
          <Link to={`/now-playing/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}/>
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

export default Home;
