import React from 'react';

const Search = props => {

  const handleChange = props.handleChange;
  const handleSearch = props.handleSearch;
  const input = props.input;

  return (
    <div>
      <form className='form-group' onSubmit={handleSearch}>
        <input
          onChange={handleChange}
          value={input}
          className='form-control'
          placeholder='Search a movie'
        />
      </form>
    </div>
  );
};

export default Search;
