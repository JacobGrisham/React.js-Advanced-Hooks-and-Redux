import React, { useState, useEffect } from 'react';
import Scroll from './Scroll'
import CardList from './CardList';
import SearchBox from './SearchBox'
import ErrorBoundary from './ErrorBoundary'
import '../assets/App.css';

// the virtual DOM is just a javascript object that collects the state
// React then passes the state to child components as props
function App() {

  // Create states using React Hooks
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setRobots(users));
    // The second argument tells useEffect what to listen for to trigger an update
    // An empty array is a shortcut for componentDidMount
  }, [])

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  }

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  })
  
  return !robots.length ? <h1>Loading...</h1> : (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      {/* Since App is an object, we need to reference functions and properties as the keyword this */}
      <SearchBox searchChange={ onSearchChange }/>
      <Scroll>
        <ErrorBoundary>
          <CardList robots={ filteredRobots }/>
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}

export default App;
