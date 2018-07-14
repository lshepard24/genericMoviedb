import React, { Component } from 'react';
import { Search } from '../components/index';

class SearchContainer extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const input = this.state.input;
    // const filteredMovies = this.props.movies.filter(movie => movie.name.match(input));
    return (
      <div>
        <Search
          handleChange={this.handleChange}
          input={input}
        />
        {/* <Movies movies={filteredMovies} /> */}
      </div>
    );
  }
}

export default SearchContainer;