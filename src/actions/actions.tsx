import { Dispatch } from 'redux';
import { apiCall } from '../api/api';
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
export const requestUsers = (apiURL = "https://jsonplaceholder.typicode.com/users") => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: REQUEST_USERS_PENDING })
    const data = await apiCall(apiURL)
    dispatch({ type: REQUEST_USERS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: REQUEST_USERS_FAILED, payload: error })
  }
}
