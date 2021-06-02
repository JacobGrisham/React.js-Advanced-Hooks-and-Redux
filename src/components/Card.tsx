// React
import React, { useState, useEffect, Suspense } from 'react';
// Typescript
import { IRobot } from './App';
// Icons
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Destructuring the properties and placing it in the parameters of the function for cleaner code
// These properties, or props, were passed down from the parent component
const Card: React.FunctionComponent<IRobot> = ({ id, name, email }) => {

  // Creating state with React Hooks
  const [favorite, setFavorite] = useState(false);

  // Setting state with React Hooks
  const onClickFavorite = () => {
    setFavorite(true)
  }

  // Telling React when to update state with React Hooks
  useEffect(() => {
    // The second argument tells useEffect what to listen for to trigger an update
    // Only run when favorite changes
  }, [favorite])

  const DetailsLazy = React.lazy(() => import('./Details'))

  const onClickDetails = () => {
    console.log('clicked');
  }

  return(
    <div className='bg-gray dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
      <button aria-label="Favorite/Unfavorite" onClick={ onClickFavorite } style={{ marginLeft: 'auto',  border: 'none', outline: 'none', backgroundColor: 'transparent'}}>
        { favorite ? <FavoriteRoundedIcon aria-label="Favorite Icon" style={{ color: 'red' }} /> : <FavoriteBorderRoundedIcon aria-label="Favorite Icon"/>}
      </button>
      <img alt='robot' src={`https://robohash.org/${ id }?200x200`}></img>
      <div style={{ color: 'white' }}>
        <h2>{ name }</h2>
        <p>{ email }</p>
      </div>
      <button aria-label="Expand" onClick={ onClickDetails }>
        <ExpandMoreIcon style={{ border: 'none', outline: 'none', backgroundColor: 'transparent'}}>
          <Suspense fallback={<div>Loading...</div>}>
            <DetailsLazy />
          </Suspense>
        </ExpandMoreIcon>
      </button>
    </div>

  )
}

export default Card;