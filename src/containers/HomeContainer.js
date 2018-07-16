import React, { Component } from 'react';
import axios from 'axios';
import history from '../history';

import { SearchContainer } from './index';
import { Home } from '../components/index';

// Example Request (for this purpose, API key will be pushed to repository)
// https://api.themoviedb.org/3/movie/550?api_key=6832af0b5adf0f6be66a81304f9fe064

// Search Example
// https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher

class HomeContainer extends Component {
  constructor() {
    super();
    this.state = {
      nowPlaying: ''
    };
  }

  async componentDidMount() {
      const res = await axios('https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=6832af0b5adf0f6be66a81304f9fe064');
      const data = await res.data;
      this.setState({ nowPlaying: data });
  }

  render() {
    let playingMovies = this.state.nowPlaying;
    return(
      <div>
        <SearchContainer />
        <Home movies={playingMovies}/>
      </div>
    );
  }
}

export default HomeContainer;