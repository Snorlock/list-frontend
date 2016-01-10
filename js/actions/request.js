import * as types from '../constants/ActionTypes'

export function requestFailed(error) {
  return { type: types.REQUEST_FAILED, error}
}

export function requesting() {
  return { type: types.REQUESTING}
}
