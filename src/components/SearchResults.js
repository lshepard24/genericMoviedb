import React from 'react';

const SearchResults = (props) => {

  const movies = props.movie.movies.results;
  const sorted = movies && movies.sort((a, b) => {
    let textA = a.title.toLowerCase();
    let textB = b.title.toLowerCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });

console.log('movie ', props)

  return (
    <div>
    { movies && 
      <h2>Search Results: </h2>
    }
      <div className="flex-container">
      {
        sorted && sorted.length > 0 ? 
        sorted.map(movie => (
          <div className="item" key={movie.id}>
              <div className="caption">
              <h3>
                <span>{movie.title}</span>
                <span>{movie.vote_average}</span>
              </h3>
              </div>
              <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}/>
            </div>
          ))
          : 
          null
      }
      {
        sorted && sorted.length === 0 &&
        <h2 id="no-results">
        Sorry! We couldn't find any movie(s) with that name. 
        </h2>
      }
      </div>
    </div>
  );
};

export default SearchResults;
