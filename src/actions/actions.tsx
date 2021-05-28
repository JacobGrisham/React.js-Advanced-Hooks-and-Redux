import { Dispatch } from 'redux';
import { 
  CHANGE_SEARCHFIELD, 
  REQUEST_USERS_PENDING, 
  REQUEST_USERS_SUCCESS, 
  REQUEST_USERS_FAILED 
} from '../constants/constants.js';

export const setSearchfield = (text: string) => ({
  type: CHANGE_SEARCHFIELD,
  payload: text
})

// This is a higher order function: a function that returns a function
export const requestUsers = () => (dispatch: Dispatch) => {
  dispatch({ type: REQUEST_USERS_PENDING })
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => dispatch({ type: REQUEST_USERS_SUCCESS, payload: data }))
  .catch(error => dispatch({ type: REQUEST_USERS_FAILED, payload: error }))
}
