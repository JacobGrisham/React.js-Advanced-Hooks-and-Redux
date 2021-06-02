import { 
  CHANGE_SEARCHFIELD, 
  REQUEST_USERS_PENDING, 
  REQUEST_USERS_SUCCESS, 
  REQUEST_USERS_FAILED 
} from '../constants/constants.js';
import * as actions from '../actions/actions'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('Redux Actions', () => {
  it('should create an action to search', () => {
    expect.assertions(1);
    const text = 'this text should show up in the searchfield'
    const expectedAction = {
      type: CHANGE_SEARCHFIELD,
      payload: text
    }
    expect(actions.setSearchfield(text)).toEqual(expectedAction)
  })

  it('should successfully handle a bad request of the GET users API', () => {
    expect.assertions(2);
    const store = mockStore({});
    const wrongApiurl = "https://jsonplac"
    return store.dispatch(actions.requestUsers(wrongApiurl)).then(() => {
      const action = store.getActions();
      expect(action[0].type).toEqual(REQUEST_USERS_PENDING)
      console.log('action', action)
      expect(action[1].type).toEqual(REQUEST_USERS_FAILED)
    })
  })

  it('should successfully handle requesting the GET users API', () => {
    expect.assertions(3);
    const store = mockStore({});
    const testingAPIurl = 'https://jsonplaceholder.typicode.com/todos/1'
    return store.dispatch(actions.requestUsers(testingAPIurl)).then(() => {
      const action = store.getActions();
      expect(action[0].type).toEqual(REQUEST_USERS_PENDING)
      expect(action[1].type).toEqual(REQUEST_USERS_SUCCESS)
      expect(action[1].payload).toEqual({
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
        })
    })
  })

})