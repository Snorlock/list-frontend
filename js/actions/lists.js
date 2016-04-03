import * as types from '../constants/ActionTypes'
import * as RequestActions from './request'
import request from 'superagent'
import config from '../config'

function recieveList(json) {
  return { type: types.RECIEVE_LIST, json }
}

function recieveLists(json) {
  return { type: types.RECIEVE_LISTS, json }
}

export function saveList(text) {
  return dispatch => {
    dispatch(RequestActions.requesting())
    return request
    .post(config.api.host+'/add/list')
    .send({'Title':text})
    .withCredentials()
    .set('Authorization', 'bearer '+localStorage.getItem('token'))
    .accept('json')
    .end((err, res) => {
      if(err) {
        if(res.statusCode === 401) dispatch(RequestActions.requestUnauthorized(err))
        else dispatch(RequestActions.requestFailed(err))
        return;
      }
      if(res.statusCode == 204) dispatch(recieveList({}))
      else if(res.statusCode == 200) dispatch(recieveList(res.body))
    })
  }
}

export function fetchList(id) {
  return dispatch => {
    dispatch(RequestActions.requesting())
    return request
    .get(config.api.host+'/lists/'+id)
    .withCredentials()
    .set('Authorization', 'bearer '+localStorage.getItem('token'))
    .accept('json')
    .end((err, res) => {
      if(err) {
        if(res.statusCode == 401) dispatch(RequestActions.requestUnauthorized(err))
        else dispatch(RequestActions.requestFailed(err))
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
    .get(config.api.host+'/lists')
    .withCredentials()
    .set('Authorization', 'bearer '+localStorage.getItem('token'))
    .accept('json')
    .end((err, res) => {
      if(err) {
        if(res.statusCode == 401) dispatch(RequestActions.requestUnauthorized(err))
        else dispatch(RequestActions.requestFailed(err))
        return;
      }

      if(res.statusCode == 204) dispatch(recieveLists({}))
      else if(res.statusCode == 200) dispatch(recieveLists(res.body))
    })
  }

}
