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
    this.handleSearch = this.handleSearch.bind(this);
  }
  
  handleChange(event) {
    event.preventDefault();
    this.setState({ input: event.target.value });
  }

  // async componentDidUpdate(prevProps) {
  //   let query = this.state.input;
  //   if (this.props.input !== prevProps.input) {
  //     let res = await axios(`https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&language=en-US&api_key=6832af0b5adf0f6be66a81304f9fe064&query=${query}`);
  //     let data = res.data;
  //     this.setState({ selectedMovie: data });
  //   }
  // }

  async handleSearch() {
    let query = this.state.input;
    let res = await axios(`https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&language=en-US&api_key=6832af0b5adf0f6be66a81304f9fe064&query=${query}`);
    let data = res.data;
    this.setState({ selectedMovie: data });
  }


  render() {
    const input = this.state.input;

    return (
      <div>
        <Search
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          input={input}
        />
      </div>
    );
  }
}

export default SearchContainer;