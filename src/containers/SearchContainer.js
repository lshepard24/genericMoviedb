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