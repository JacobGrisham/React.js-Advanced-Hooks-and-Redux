// React
import React, { useEffect } from 'react';
// Redux
import { connect } from 'react-redux';
import { setSearchfield, requestUsers } from '../actions/actions';
// Components
import Scroll from './Scroll'
import CardList from './CardList';
import SearchBox from './SearchBox'
// Stylesheets
import ErrorBoundary from './ErrorBoundary'
import '../assets/App.css';

// Redux connect() parameter definitions
const mapStateToProps = state => {
  // These states come from reducers.js
  // The key is the state and the value is the property
  return {
    searchField: state.searchRobots.searchField,
    users: state.requestUsers.users,
    isPending: state.requestUsers.isPending,
    error: state.requestUsers.error
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchfield(event.target.value)),
    onRequestOfUsers: () => dispatch(requestUsers())
  }
}

// the virtual DOM is just a javascript object that collects the state
// React then passes the state to child components as props
function App(props) {

  const { searchField, onSearchChange, users, isPending, onRequestOfUsers } = props

  useEffect(() => {
    onRequestOfUsers();
    // The second argument tells useEffect what to listen for to trigger an update
    // An empty array is a shortcut for componentDidMount
  }, [onRequestOfUsers])

  const filteredRobots = users.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })
  
  return isPending ? <h1 className='tc'>Loading...</h1> : (
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

// Connect App component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(App);
