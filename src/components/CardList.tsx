// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
// Had to debug standard import statement. See https://github.com/emotion-js/emotion/issues/2041#issuecomment-708263981
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// React
import React from 'react';
// Components
import Card from './Card';
// Typescript
import { IRobot } from './App';

const cardListBackground = css `
  background-color: #000000;
  background-image: url('https://www.transparenttextures.com/patterns/escheresque-dark.png');
`

function CardList({ robots }: { robots: Array<IRobot> }) {

  return (
    <div css={cardListBackground}>
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
    </div>
  );
}

export default CardList;