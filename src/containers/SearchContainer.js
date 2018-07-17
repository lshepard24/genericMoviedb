import React, { Component } from 'react';
import axios from 'axios';
import history from '../history';

import { Search, Movie, SearchResults } from '../components/index';

class SearchContainer extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      movies: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  
  componentDidMount() {
    this.setState({ input: this.state.input, movies: this.state.movies });
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ input: event.target.value });
  }

  submitForm(event) {
    console.log('submitted form')
    event.preventDefault();
    this.props.history.push('/movies');
  }

  async handleSearch() {
    const query = this.state.input;
    const res = await axios(`https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&language=en-US&api_key=6832af0b5adf0f6be66a81304f9fe064&query=${query}`);
    const data = res.data;
    this.setState({ movies: data });
    await history.push('/movies');
  }

  render() {
    const input = this.state.input;

    return (
      <div className="search-control">
        <Search
          handleChange={this.handleChange}
          input={input}
          getMovie={this.getMovie} 
          movie={this.state}
          handleSearch={this.handleSearch}
          />
        <SearchResults
          movie={this.state}
        />
      </div>
    );
  }
}

export default SearchContainer;