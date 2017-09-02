import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchDetailInfo, initDetail } from '../redux/Action/Actions'
import * as styles from '../styles';
import Article from '../components/article'

class Detail extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props
    const id = match.params.id
    dispatch(fetchDetailInfo(id))
  }
  componentWillUnmount() {
    const { dispatch } = this.props
    dispatch(initDetail())
  }
  render() {
    const { detailInfo } = this.props
    return (
      <div className='Detail'>
        <link rel="stylesheet" href="http://news-at.zhihu.com/css/news_qa.auto.css?v=4b3e3" />
        <Article data={detailInfo.data}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    detailInfo: state.detailInfo,
  }
} 

export default connect(mapStateToProps)(Detail);