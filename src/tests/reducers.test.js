import { 
  CHANGE_SEARCHFIELD, 
  REQUEST_USERS_PENDING, 
  REQUEST_USERS_SUCCESS, 
  REQUEST_USERS_FAILED 
} from '../constants/constants.js';

import * as reducers from '../reducers/reducers';

describe('searchRobots reducer', () => {
  const initialStateSearch = {
    searchField: ''
  }

  it('should return the initial state', () => {
    expect.assertions(1);
    expect(reducers.searchRobots(undefined, {})).toEqual({
      searchField: ''
    })
  })

  it('should handle CHANGE_SEARCHFIELD', () => {
    expect.assertions(1);
    expect(reducers.searchRobots(initialStateSearch, {
      type: CHANGE_SEARCHFIELD,
      payload: 'abc'
    })).toEqual({
      searchField: 'abc'
    })

  })
})

const initialStateRobots = {
  users: [],
  isPending: true
}

describe('requestUsers reducer', () => {
  it('should return the initial state', () => {
    expect.assertions(1);
    expect(reducers.requestUsers(undefined, {})).toEqual(
      {
        users: [],
        isPending: false,
        error: ''
      }
    )
  })

  it('should handle REQUEST_ROBOTS_PENDING action', () => {
    expect.assertions(1);
    expect(
      reducers.requestUsers(initialStateRobots, {
        type: REQUEST_USERS_PENDING,
        payload: {isPending: true}
      })
    ).toEqual(
      {
        users: [],
        isPending: true
      }
    )
  })
  it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
    expect.assertions(1);
    expect(
      reducers.requestUsers(initialStateRobots, {
        type: REQUEST_USERS_SUCCESS,
        payload: [{
            id: '123',
            name: 'test',
            email: 'j@jmail.com'
          }]
      })
    ).toEqual(
      {
        users: [{
          id: '123',
          name: 'test',
          email: 'j@jmail.com'
        }],
        isPending: false
      }
    )
  })
  it('should handle REQUEST_ROBOTS_FAILED action', () => {
    expect.assertions(1);
    expect(
      reducers.requestUsers(initialStateRobots, {
        type: REQUEST_USERS_FAILED,
        payload: 'NOOO'
      })
    ).toEqual(
      {
        error: 'NOOO',
        users: [],
        isPending: false
      }
    )
  })
})