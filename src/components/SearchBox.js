import React, { memo } from 'react';

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

// Prevent re-rendering of Searchbox using React.memo when there are no changes
export default memo(SearchBox);