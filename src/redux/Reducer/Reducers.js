import { combineReducers } from 'redux'
import {REQUEST_NEWS, RECEIVE_NEWS} from '../Action/Actions'

function fetchNewsData (state = {
  isFetching: false, 
  topInfo: [],
  postInfo: []
}, action) {
  switch (action.type) {
    case REQUEST_NEWS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_NEWS:
      return Object.assign({}, state, {
        isFetching: false,
        topInfo: action.topInfo,
        postInfo: action.postInfo
      })
    default:
      return state
  }
}

const rootReducers = combineReducers({
  newsInfo: fetchNewsData
})

export default rootReducers