import React, { Component } from 'react';
import axios from 'axios';
import history from '../history';

import { TopRated } from '../components/index';

class TopRatedContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topRated: ''
    };
  }

  async componentDidMount() {
      const res = await axios('https://api.themoviedb.org/3/movie/top_rated?page=1&language=en-US&api_key=6832af0b5adf0f6be66a81304f9fe064');
      const data = await res.data;
      this.setState({ topRated: data });
  }

  render() {
    let topMovies = this.state.topRated;
    return(
      <div>
        <TopRated movies={topMovies}/>
      </div>
    );
  }
}

export default TopRatedContainer;