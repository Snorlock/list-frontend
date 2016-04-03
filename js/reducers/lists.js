import { RECIEVE_LIST, RECIEVE_LISTS } from '../constants/ActionTypes'
import _ from 'lodash'

const initialState = [
]

export default function lists(state = initialState, action) {
  switch (action.type) {
    case RECIEVE_LIST:
      return [action.json, ...state]
    case RECIEVE_LISTS:
      if (_.isEmpty(action.json)) return []
      else return action.json
    default:
      return state
  }
}
