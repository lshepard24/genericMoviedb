import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NowPlaying = (props) => {

  const nowPlaying = props.movies.results;
  console.log('now playing', props)
  return (
    <div>
      <h2>Now Playing in Theaters</h2>
      <div className="flex-container">
      {
        nowPlaying && nowPlaying.map(movie => (
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

export default NowPlaying;
