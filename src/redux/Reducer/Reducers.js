import { combineReducers } from 'redux'
import {REQUEST_NEWS, RECEIVE_NEWS, 
  REQUEST_BEFORE_NEWS, RECEIVE_BEFORE_NEWS, 
  INIT_HOME, REQUEST_DETAIL, RECEIVE_DETAIL, INIT_DETAIL} from '../Action/Actions'

const initState = {
  isFetching: false,
  date: '',
  topInfo: [],
  allInfo: []
}

const initDetail = {
  isFetching: false,
  id: 0,
  data: []
}

function fetchNewsData (state = initState, action) {
  switch (action.type) {
    case INIT_HOME:
      return Object.assign({}, initState)
    case REQUEST_NEWS:
    case REQUEST_BEFORE_NEWS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_NEWS:
      return Object.assign({}, state, {
        isFetching: false,
        topInfo: action.topInfo,
        date: action.date,
        allInfo: state.allInfo.concat(action.data)
      })
    case RECEIVE_BEFORE_NEWS:
      return Object.assign({}, state, {
        isFetching: false,
        date: action.data.date,
        allInfo: state.allInfo.concat(action.data)
      })
    default:
      return state
  }
}

function fetchDetail (state = initDetail, action) {
  switch (action.type) {
    case INIT_DETAIL: 
      return Object.assign({}, initDetail)
    case REQUEST_DETAIL:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_DETAIL:
      return Object.assign({}, state, {
        isFetching: false,
        id: action.data.id,
        data: action.data
      })
    default:
      return state
  }
}


const rootReducers = combineReducers({
  newsInfo: fetchNewsData,
  detailInfo: fetchDetail
})

export default rootReducers