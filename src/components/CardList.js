import React, {Fragment} from 'react';
import Card from './Card';

function CardList({ robots }) {

  return (
    // Using Fragment to avoid unneccssary nesting of the DOM
    <Fragment>
      {
        // Using the ES6 map function to iterate over the robots object
        // map has two parameters, the object name and the index
        robots.map((user, i) => {
          return (
            <Card
              // These are the properties that get passed to the Card component
              // The key prop shouldn't change. Therefore we'll use id instead of index or i
              // The key prop is required for React to effeiciently target specific DOM elements
              key={ robots[i].id }
              id={ robots[i].id }
              name={ robots[i].name }
              email={ robots[i].email }
            />
          );
        })
      }
    </Fragment>
  );
}

export default CardList;