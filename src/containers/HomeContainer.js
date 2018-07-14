import React, { Component } from 'react';
import axios from 'axios';
import history from '../history';

// Example Request (for this purpose, API key will be pushed to repository)
// https://api.themoviedb.org/3/movie/550?api_key=6832af0b5adf0f6be66a81304f9fe064

// Search Example
// https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher

class HomeContainer extends Component {
  constructor() {
    super();
    this.state = {
      response: ''
    };
  }

  async componentDidMount() {
      const res = await axios('https://api.themoviedb.org/3/movie/550?api_key=6832af0b5adf0f6be66a81304f9fe064');
      const data = await res.data;
      this.setState({ response: data });
  }

  render() {
    console.log('this.state', this.state);
    return(
      <div>
        Something here
      </div>
    );
  }
}

export default HomeContainer;