import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchNewsInfo } from '../redux/Action/Actions'
import * as styles from '../styles';
import Post from './post'

class App extends Component {
  render() {
    const {dispatch} = this.props
    dispatch(fetchNewsInfo())
    return (
      <div className='app'>
        <h2>Hello, a你好</h2>
        <div>刷新双尼玛的新阿萨德阿萨德</div>
        <Post />
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    topInfo: state.topInfo,
    postInfo: state.postInfo
  }
} 

export default connect(mapStateToProps)(App);