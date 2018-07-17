import React, { Component } from 'react';

class SearchResults extends Component {
  render() {
    const handleSearch = this.props.handleSearch;
    const movies = this.props.movie.movies.results;
    console.log('search results props', movies);

    return (
      <div>
        <button onClick={handleSearch}>Search</button>
        <div className="flex-container">
          { 
            movies && movies.length > 0 ? movies && movies.map(movie => ( 
              <div className="item" key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}/>
              <div className="caption">
                <h4>
                  <span>{movie.title}</span>
                </h4>
              </div>
              </div>
            ))
           : <h1>Your Search Yielded No Results</h1>
        }
        </div>
      </div>
    );
  }
}

export default SearchResults;
