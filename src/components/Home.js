import React, { Component } from 'react';
import { Search } from './index';

const Home = (props) => {
  const nowPlaying = props.nowPlaying ? props.nowPlaying : [];
  return (
    <div>
      <h2>Now Playing</h2>
      <div className="row">
      {
        nowPlaying && nowPlaying.map(movie => (
          <div className="col-xs-4" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
            <div className="caption">
              <h4>
                <span>{ movie.title }</span>
              </h4>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default Home;
