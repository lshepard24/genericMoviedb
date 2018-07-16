import React from 'react';

const Search = props => {

  const handleChange = props.handleChange;
  const input = props.input;

  return (
    <div>
      <form className='form-group'>
        <input
          onChange={handleChange}
          value={input}
          className='form-control'
          placeholder='Search a movie (e.g. name, keyword, director)'
        />
      </form>
    </div>
  );
};

export default Search;
