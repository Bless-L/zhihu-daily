const YAHOO_PROXY_BASE = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url=%22'
const YAHOO_PROXY_SUFFIX = '%22&format=json'

const NEWS = 'http://news-at.zhihu.com/api/4/news/latest'
const NEWS_DETAIL = 'http://news-at.zhihu.com/api/4/news/{id}'
const NEWS_EXTRA = 'http://news-at.zhihu.com/api/4/story-extra/#{id}'

export const NEWS_API = `${YAHOO_PROXY_BASE}${NEWS}${YAHOO_PROXY_SUFFIX}`
export const NEWS_DETAIL_API = `${YAHOO_PROXY_BASE}${NEWS_DETAIL}${YAHOO_PROXY_SUFFIX}`
export const NEWS_EXTRA_API = `${YAHOO_PROXY_BASE}${NEWS_EXTRA}${YAHOO_PROXY_SUFFIX}`