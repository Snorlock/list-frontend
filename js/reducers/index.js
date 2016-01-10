import { combineReducers } from 'redux'
import todos from './todos'
import auth from './auth'
import lists from './lists'
import request from './request'
import { routeReducer } from 'redux-simple-router'

const rootReducer = combineReducers(Object.assign({},
  {lists, todos, auth, request},
  {routing: routeReducer}
))

export default rootReducer
