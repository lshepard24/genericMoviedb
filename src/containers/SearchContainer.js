import React, { Component } from 'react';
import axios from 'axios';
import history from '../history';

import { Search, Movie } from '../components/index';

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
  
  async componentDidMount() {
    console.log('component did mount state', this.state);
  }
  
  // async componentDidUpdate() {
  //   let input = this.state.input;
  //   let req = `https://api.themoviedb.org/3/movie/${input}?&api_key=6832af0b5adf0f6be66a81304f9fe064`;
  //   let res = await axios(req);
  //   let data = res.data;
  //   this.setState({ movieId: data.id, data: data });
  // }

  // componentDidUpdate(nextProps, nextState) {
  //   if (nextState.keyword.length && nextState.keyword !== this.state.keyword) {
  //     this.movies(nextState.keyword, res => (
  //       this.setState({ movies: res })
  //     ));
  //   }
  // }

  handleChange(event) {
    console.log('the event', event.target);
    event.preventDefault();
    this.setState({ input: event.target.value });
  }

  async handleSearch(event) {
    let query = this.state.input;
    let res = await axios(`https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&language=en-US&api_key=6832af0b5adf0f6be66a81304f9fe064&query=${query}`);
    let data = res.data;
    this.setState({ movies: data });
    console.log('the response', data);
  }

  render() {
    const input = this.state.input;

    return (
      <div>
        <Search
          handleChange={this.handleChange}
          input={input}
          getMovie={this.getMovie}
        />
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default SearchContainer;