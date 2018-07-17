import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Movie extends Component {

  constructor() {
    super();
    this.state = {
      movieId: 659,
      data: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    let req = `https://api.themoviedb.org/3/movie/${this.state.movieId}?&api_key=6832af0b5adf0f6be66a81304f9fe064`;
    let res = await axios(req);
    let data = res.data;
    this.setState({ movieId: data.id, data: data });
  }

  render() {
    const movie = this.state.data ? this.state.data : [];
    console.log('the state in movie', this.state);
    return (
      <div>
        <h2>{movie.title}</h2>
        <h2>{movie.original_title}</h2>
        <h4>{movie.vote_average}</h4>
        <img src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`} />
        <div>Release Date: {movie.release_date}</div>
        <div>Runtime: {movie.runtime}</div>
        <div>{movie.tagline}</div>
        <p>{movie.overview}</p>
      </div>
    );
  }
}

export default Movie;
