import React, { Component } from 'react';

class SearchResults extends Component {
  render() {
    const handleSearch = this.props.handleSearch;
    const movies = this.props.movie.movies.results;
    console.log('search results props', movies);

    return (
      <div>
        <button onClick={handleSearch}>Search</button>
        <div>
          {
            movies && movies.map(movie => (
              <div key={movie.id}>
              <h2>{movie.title}</h2>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default SearchResults;
