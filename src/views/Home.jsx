import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchNewsInfo, fetchBeforeInfo, initHome } from '../redux/Action/Actions'
import * as styles from '../styles'
import Post from '../components/post'
import Banner from '../components/banner'

class Home extends Component {
  constructor(props) {
    super(props);
    this.getScrollData = this.getScrollData.bind(this)
  }
  componentDidMount() {
    const {dispatch} = this.props
    dispatch(fetchNewsInfo())
    window.addEventListener('scroll', this.getScrollData, false)
  }

  getScrollData() {
    const {newsInfo} = this.props
    if ((window.document.documentElement.clientHeight + window.document.body.scrollTop) + 100 > 
      window.document.body.scrollHeight && !newsInfo.isFetching) {
      this.getSectionNext()
    }
  }

  getSectionNext() {
    const {dispatch, newsInfo} = this.props
    dispatch(fetchBeforeInfo(newsInfo.date))
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.getScrollData, false)
    const {dispatch} = this.props
    dispatch(initHome())
  }

  render() {
    const {allInfo, topInfo} = this.props.newsInfo
    const postSections = allInfo.map((item) => {
      return (
        <Post key={item.date}  date={item.date} postInfo={item.stories}/>
      )
    })
    return (
      <div className='Home'>
        <Banner />
        <div className="section">
          {postSections}
        </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    newsInfo: state.newsInfo,
  }
} 

export default connect(mapStateToProps)(Home);