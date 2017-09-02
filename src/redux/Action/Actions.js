import * as API from '../../config/API'

export const REQUEST_NEWS = 'REQUEST_NEWS'
export const RECEIVE_NEWS = 'RECEIVE_NEWS'
export const REQUEST_BEFORE_NEWS = 'REQUEST_BEFORE_NEWS'
export const RECEIVE_BEFORE_NEWS = 'RECEIVE_BEFORE_NEWS'
export const INIT_HOME = 'INIT_HOME'

export const REQUEST_DETAIL = 'REQUEST_DETAIL'
export const RECEIVE_DETAIL = 'RECEIVE_DETAIL'
export const INIT_DETAIL = 'INIT_DETAIL'

function requestNews() {
  return {
    type: REQUEST_NEWS
  }
}
function receiveNews(newsInfo) {
  return {
    type: RECEIVE_NEWS,
    data: [{
      date: newsInfo.date,
      stories: newsInfo.stories
    }],
    date: newsInfo.date,
    topInfo: newsInfo.top_stories,
  }
}
function requestBefore() {
  return {
    type: REQUEST_BEFORE_NEWS
  }
}
function receiveBefore(data) {
  return {
    type: RECEIVE_BEFORE_NEWS,
    data
  }
}


export function fetchNewsInfo() {
  return function(dispatch) {
    dispatch(requestNews())
    return fetch(API.NEWS_API)
      .then((res) => { return res.json()})
      .then((res) => {
        const data = res.query.results.json
        dispatch(receiveNews(data))
      })
  }
}

export function fetchBeforeInfo(key) {
  return function(dispatch) {
    dispatch(requestBefore())
    return fetch(API.NEWS_BEFORE_API.replace('{date}', key))
      .then((res) => { return res.json()})
      .then((res) => {
        const data = res.query.results.json
        dispatch(receiveBefore(data))
      })
  }
}

export function initHome () {
  return {
    type: INIT_HOME
  }
}


function requestDetail() {
  return {
    type: REQUEST_DETAIL
  }
}

function receiveDetail(data) {
  return {
    type: RECEIVE_DETAIL,
    data
  }
}

export function initDetail () {
  return {
    type: INIT_DETAIL
  }
}

export function fetchDetailInfo (id) {
  return function(dispatch) {
    dispatch(requestDetail())
    return fetch(API.NEWS_DETAIL_API.replace('{id}', id))
    .then((res) => {return res.json()})
    .then((res) => {
      const data = res.query.results.json
      dispatch(receiveDetail(data))
    })
  }
}