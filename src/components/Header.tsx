// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
// Had to debug standard import statement. See https://github.com/emotion-js/emotion/issues/2041#issuecomment-708263981
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import '../assets/styles/App.css';
import React, { PureComponent, Fragment } from 'react';

const title = css `
  color: lightgrey;
  @media (min-width: 420px) {
      font-size: 50px;
  }
`

// Prevent re-rendering of component using Class-based Pure Component when there are no changes
class Header extends PureComponent {

  render() {
    return (
      <>
        <h1 css={title} className='sega-font'>RoboFriends</h1>
      </>
    )
  }
}

export default Header;