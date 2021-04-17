import React, { useState, useEffect } from 'react';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';

// Destructuring the properties and placing it in the parameters of the function for cleaner code
// These properties, or props, were passed down from the parent component
function Card({ id, name, email }) {

  const [favorite, setFavorite] = useState(false);

  const onClickFavorite = () => {
    setFavorite(true)
  }

  useEffect(() => {
    console.log(favorite);
    // The second argument tells useEffect what to listen for to trigger an update
    // Only run when favorite changes
  }, [favorite])

  return(
    <div className='bg-gray dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
      <button onClick={ onClickFavorite } style={{ marginLeft: 'auto',  border: 'none', outline: 'none', backgroundColor: 'transparent'}}>
        { favorite ? <FavoriteRoundedIcon style={{ color: 'red' }} /> : <FavoriteBorderRoundedIcon/>}
      </button>
      <img alt='robot' src={`https://robohash.org/${ id }?200x200`}></img>
      <div style={{ color: 'white' }}>
        <h2>{ name }</h2>
        <p>{ email }</p>
      </div>
    </div>
  )
}

export default Card;