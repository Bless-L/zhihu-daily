import * as API from '../../config/API'

export const REQUEST_NEWS = 'REQUEST_NEWS'
export const RECEIVE_NEWS = 'RECEIVE_NEWS'

function requestNews() {
  return {
    type: REQUEST_NEWS
  }
}

function receiveNews(newsInfo) {
  return {
    type: RECEIVE_NEWS,
    topInfo: newsInfo.top_stories,
    postInfo: newsInfo.stories
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