import React from 'react';

const SearchResults = (props) => {

  const movies = props.movie.movies.results;

  return (
    <div>
      <div className="flex-container">
      {
        movies && movies.length > 0 ? 
         movies.map(movie => (
            <div className="item" key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}/>
              <div className="caption">
              <h4>
                <span>{movie.title}</span>
              </h4>
              </div>
            </div>
          ))
          : 
          <h2 id="no-results">
            We're sorry! We couldn't find any movies with that name. 
          </h2>
      }
      </div>
    </div>
  );
};

export default SearchResults;
