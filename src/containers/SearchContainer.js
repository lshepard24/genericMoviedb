import React, { Component } from 'react';
import axios from 'axios';

import { Search, Movie } from '../components/index';

class SearchContainer extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.searchMovie = this.searchMovie.bind(this);
  }
  
  handleChange(event) {
    this.setState({ input: event.target.value });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    console.log('submitted form');
  }

  // async searchMovie() {
  //   console.log('the state', this.state);
  //   const query = this.state.input;
  //   const res = await axios (`https://api.themoviedb.org/3/search/movie?api_key=6832af0b5adf0f6be66a81304f9fe064&query=${query}`);
  // }
  
  render() {
    console.log('the state in search container', this.state)
    const input = this.state.input;
    // const filteredMovies = this.props.movies.filter(movie => movie.name.match(input));
    return (
      <div>
        <Search
          handleChange={this.handleChange}
          input={input}
        />
        <Movie/>
      </div>
    );
  }
}

export default SearchContainer;