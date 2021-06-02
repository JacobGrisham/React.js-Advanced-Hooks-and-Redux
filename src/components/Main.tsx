// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
// Had to debug standard import statement. See https://github.com/emotion-js/emotion/issues/2041#issuecomment-708263981
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import '../assets/styles/Main.css';
// React
import React, { useEffect } from 'react';
// Components
import Header from './Header';
import Scroll from './Scroll';
import CardList from './CardList';
import SearchBox from './SearchBox';
import ErrorBoundary from './ErrorBoundary';

export interface IRobot {
  name: string;
  id: number;
  email: string;
}

interface IMainProps {
  searchField: any;
  onSearchChange: any;
  users: any;
  isPending: boolean;
  onRequestOfUsers: any;
}

// emotion styling for practice and reference
const center = css`
  text-align: center;
`

// the virtual DOM is just a javascript object that collects the state
// React then passes the state to child components as props
function Main(props: IMainProps) {

  const { searchField, onSearchChange, users, isPending, onRequestOfUsers } = props

  useEffect(() => {
    onRequestOfUsers();
    // The second argument tells useEffect what to listen for to trigger an update
    // An empty array is a shortcut for componentDidMount
  }, [onRequestOfUsers])

  const filteredRobots = users.filter((robot: IRobot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })
  
  return isPending ? <h1 css={center} className='sega-font'>Loading...</h1> : (
    <div css={center}>
      <Header />
      <SearchBox aria-label='searchbox' searchChange={ onSearchChange }/>
      <Scroll>
        <ErrorBoundary>
          <CardList robots={ filteredRobots }/>
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}

export default Main;
