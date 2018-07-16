import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 

class Movie extends Component {

  constructor() {
    super();
    this.state = {
      selectMovie: ''
    };
  }

  render() {
    const movie = this.props;

    return (
      <div>
        Movie movie movie
        {/* <h2>{movie.title}</h2> */}
      </div>
    );
  }
}

export default Movie;
