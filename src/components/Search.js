import React from 'react';

const Search = props => {
  const handleChange = props.handleChange;
  const input = props.input;
  console.log('props', props);
  return (
    <form className='form-group'>
      <input
        onChange={handleChange}
        value={input}
        className='form-control'
        placeholder='Search a movie'
      />
    </form>
  );
}

export default Search;
