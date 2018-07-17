import React from 'react';
import { Link } from 'react-router-dom';

const Search = (props) => {

  const handleChange = props.handleChange;
  const handleSearch = props.handleSearch;
  const input = props.input;

  return (
    <div className="search-container">
      <form className='form-group'>
        <input
          onChange={handleChange}
          value={input}
          className='form-control'
          placeholder='Search a movie'
        />
      </form>
      <Link to="/movies" onClick={handleSearch} className="form-group">
        Search
      </Link>
    </div>
  );
};

export default Search;
