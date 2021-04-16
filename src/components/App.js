import React, { Component } from 'react';
import Scroll from './Scroll'
import CardList from './CardList';
import SearchBox from './SearchBox'
import ErrorBoundary from './ErrorBoundary'
import '../assets/App.css';

// the virtual DOM is just a javascript object that collects the state
// React then passes the state to child components as props
class App extends Component {
  // state represents properties that can change. They usually live in the parent component
  constructor() {
    // super() calls the constructor of component
    super();
    // the keyword this refers to class App
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}));
  }

  onSearchChange = (event) => {
    this.setState({
      searchfield: event.target.value
    });
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    
    return !robots.length ? <h1>Loading...</h1> : (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        {/* Since App is an object, we need to reference functions and properties as the keyword this */}
        <SearchBox searchChange={ this.onSearchChange }/>
        <Scroll>
          <ErrorBoundary>
            <CardList robots={ filteredRobots } />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
