import { REQUESTING, REQUEST_FAILED } from '../constants/ActionTypes'

const initialState =
  {
    requesting: false,
    requestFailed: {}
  }

export default function request(state = initialState, action) {
  switch (action.type) {
    case REQUESTING:
    return {
      requesting: true,
      requestFailed: {}
    }
    case REQUEST_FAILED:
      return {
        requesting: false,
        requestFailed: action.error
      }
    default:
      return state
  }
}
