import React, { Component } from 'react';
import axios from 'axios';
import history from '../history';

import { Search, Movie } from '../components/index';

class SearchContainer extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      selectedMovie: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    event.preventDefault();
    this.setState({ input: event.target.value });
  }

  // async searchMovie() {
  //   console.log('the state', this.state);
  //   const query = this.state.input;
  //   const res = await axios (`https://api.themoviedb.org/3/search/movie?api_key=6832af0b5adf0f6be66a81304f9fe064&query=${query}`);
  // }
  
  render() {
    const input = this.state.input;

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