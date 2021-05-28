import React, { memo } from 'react';

interface ISearchBoxProps {
  searchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
}

const SearchBox = ({ searchChange }: ISearchBoxProps) => {
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