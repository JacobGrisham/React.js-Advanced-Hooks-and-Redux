import React from 'react';

// Destructuring the properties and placing it in the parameters of the function for cleaner code
// These properties, or props, were passed down from the parent component
function Card({ id, name, email }) {

  return(
    <div className='bg-gray dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
      <img alt='robot' src={`https://robohash.org/${ id }?200x200`}></img>
      <div>
        <h2>{ name }</h2>
        <p>{ email }</p>
      </div>
    </div>
  )
}

export default Card;