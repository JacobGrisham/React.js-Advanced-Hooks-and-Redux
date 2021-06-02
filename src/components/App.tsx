// React
import React from 'react';
// Redux
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { setSearchfield, requestUsers } from '../actions/actions';
// Components
import Main from './Main';

export interface IRobot {
  name: string;
  id: number;
  email: string;
}

interface IAppProps {
  searchField: any;
  onSearchChange: any;
  users: any;
  isPending: boolean;
  onRequestOfUsers: any;
}

interface IAppState {
  robots: Array<IRobot>;
  searchRobots: any;
  requestUsers: any;
  searchfield: string;
}

// Redux connect() parameter definitions
const mapStateToProps = (state: IAppState) => {
  // These states come from reducers.js
  // The key is the state and the value is the property
  return {
    searchField: state.searchRobots.searchField,
    users: state.requestUsers.users,
    isPending: state.requestUsers.isPending,
    error: state.requestUsers.error
  }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<IAppState, void, AnyAction>) => {
  return {
    onSearchChange: (event: React.SyntheticEvent<HTMLInputElement>) => dispatch(setSearchfield((event.target as HTMLInputElement).value)),
    onRequestOfUsers: () => dispatch(requestUsers())
  }
}

function App(props: IAppProps) {
  
  return (
    <Main {...props}/>
  );
}

// Connect App component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(App);
