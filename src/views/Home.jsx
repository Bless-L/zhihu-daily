import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchNewsInfo, fetchBeforeInfo, initHome } from '../redux/Action/Actions'
import * as styles from '../styles'
import Post from '../components/post'
import Banner from '../components/banner'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { fetchNewsInfo } = this.props
    fetchNewsInfo()
    window.addEventListener('scroll', this.getScrollData, false)
  }

  getScrollData = () => {
    const { newsInfo } = this.props
    const scrollTop = window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop
      || 0
    if ((document.documentElement.clientHeight + scrollTop) + 100 > 
      document.body.scrollHeight && !newsInfo.isFetching) {
      this.getSectionNext()
    }
  }

  getSectionNext() {
    const { fetchBeforeInfo, newsInfo } = this.props
    fetchBeforeInfo(newsInfo.date)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.getScrollData, false)
    const { initHome } = this.props
    initHome()
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

const mapStateToProps = (state) => ({
  newsInfo: state.newsInfo
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNewsInfo() {
      dispatch(fetchNewsInfo())
    },
    fetchBeforeInfo(date) {
      dispatch(fetchBeforeInfo(date))
    },
    initHome() {
      dispatch(initHome())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)