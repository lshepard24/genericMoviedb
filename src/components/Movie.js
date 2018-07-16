import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 

class Movie extends Component {

  constructor() {
    super();
    this.state = {
      movieId: 659
    };
  }

  async componentDidMount() {
    let req = `https://api.themoviedb.org/3/movie/${this.state.movieId}?&api_key=6832af0b5adf0f6be66a81304f9fe064`;
    let res = await axios(req);
    let data = res.data;
    console.log('data', res.data)
    this.setState({ movieId: data.id });
  }

  render() {
    const movie = this.props;
    console.log('the state in movie', this.state);
    return (
      <div>
        Movie movie movie
        {/* <h2>{movie.title}</h2> */}
      </div>
    );
  }
}

export default Movie;
