import * as types from '../constants/ActionTypes'
import * as RequestActions from './request'
import request from 'superagent'

function recieveList(json) {
  return { type: types.RECIEVE_LIST, json }
}

function recieveLists(json) {
  return { type: types.RECIEVE_LISTS, json }
}

export function fetchList(id) {
  console.log(id)
  return dispatch => {
    dispatch(RequestActions.requesting())
    return request
    .get('http://localhost:8000/lists/'+id)
    .withCredentials()
    .set('Authorization', 'bearer '+localStorage.getItem('token'))
    .accept('json')
    .end((err, res) => {
      if(err) {
        dispatch(RequestActions.requestFailed(err))
        return;
      }
      if(res.statusCode == 204) dispatch(recieveList({}))
      else if(res.statusCode == 200) dispatch(recieveList(res.body))
    })
  }
}

export function fetchLists() {
  return dispatch => {
    dispatch(RequestActions.requesting())
    return request
    .get('http://localhost:8000/lists')
    .withCredentials()
    .set('Authorization', 'bearer '+localStorage.getItem('token'))
    .accept('json')
    .end((err, res) => {
      if(err) {
        dispatch(RequestActions.requestFailed(err))
        return;
      }
      if(res.statusCode == 204) dispatch(recieveLists({}))
      else if(res.statusCode == 200) dispatch(recieveLists(res.body))
    })
  }

}
