import { LOGGED_IN, LOGGED_OUT, REQUEST_UNAUTHORIZED } from '../constants/ActionTypes'

const initialState =
  {
    authorized: localStorage.getItem('token') ? true : false
  }

export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOGGED_IN:
      localStorage.setItem('token', action.token)
      return state =  { authorized: true }
    case LOGGED_OUT:
    case REQUEST_UNAUTHORIZED:
      localStorage.removeItem('token')
      return state =  { authorized: false }
    default:
      return state
  }
}
