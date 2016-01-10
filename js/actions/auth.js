import * as types from '../constants/ActionTypes'

export function loggedIn(token) {
  return { type: types.LOGGED_IN, token}
}

export function loggedOut(token) {
  return { type: types.LOGGED_OUT}
}
