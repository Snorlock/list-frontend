import { RECIEVE_LIST, RECIEVE_LISTS } from '../constants/ActionTypes'

const initialState = [
]

export default function lists(state = initialState, action) {
  switch (action.type) {
    case RECIEVE_LIST:
      console.log(action.json)
      return action.json
    case RECIEVE_LISTS:
      console.log(action.json)
      return action.json

    default:
      return state
  }
}
