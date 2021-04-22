// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
// Had to debug standard import statement. See https://github.com/emotion-js/emotion/issues/2041#issuecomment-708263981
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { PureComponent, Fragment } from 'react';

const style = css`
  @font-face: {
    font-family: 'SEGA LOGO FONT';
    font-style: normal;
    font-weight: normal;
    src: local(''), url('/fonts/SEGA.woff') format('woff2');
  }

  h1 {
    font-family: 'SEGA LOGO FONT';
    font-weight: 200;
    color: lightgrey;
  }
`

// Prevent re-rendering of component using Class-based Pure Component when there are no changes
class Header extends PureComponent {

  render() {
    return (
      <>
        <h1 css={style}>RoboFriends</h1>
      </>
    )
  }
}

export default Header;