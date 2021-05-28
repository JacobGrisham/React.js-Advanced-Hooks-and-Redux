import { 
  CHANGE_SEARCHFIELD, 
  REQUEST_USERS_PENDING, 
  REQUEST_USERS_SUCCESS, 
  REQUEST_USERS_FAILED 
} from '../constants/constants.js';

const initialStateSearch: object = {
  searchField: ''
}

// solution from https://simplernerd.com/typescript-dynamic-json/
interface actionObject {
  [key: string]: any
}

export const searchRobots = (state: object = initialStateSearch, action: actionObject = {}) => {
  switch(action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, { searchField: action.payload });
      // Can also do the following: return {...state, searchField: action.payload}}
    default:
      return state;
  }
}

const initialStateUsers = {
  isPending: false,
  users: [],
  error: ''
}

export const requestUsers = (state: object = initialStateUsers, action: actionObject = {}) => {
  switch(action.type) {
    case REQUEST_USERS_PENDING:
      return Object.assign({}, state, { isPending: true })
    case REQUEST_USERS_SUCCESS:
      return Object.assign({}, state, { users: action.payload, isPending: false })
    case REQUEST_USERS_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false })
    default:
      return state
  }
}