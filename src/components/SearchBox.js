import React from 'react';

function SearchBox({ searchfield, searchChange }) {
  return (
    <div className="pa2">
      <input
        type='search'
        placeholder='search robots'
        className='pa3 ba b--white'
        onChange={ searchChange }>
      </input>
    </div>
  )
}

export default SearchBox;