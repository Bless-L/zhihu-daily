import React, { Component } from 'react'

import * as API from '../config/API'
import PostItem from './postItem'

export default class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topInfo: [],
      postInfo: []
    }
  }

  componentDidMount() {
    fetch(API.NEWS_API)
    .then((res) => { return res.json()})
    .then((res) => {
      const data = res.query.results.json
      this.setState({
        topInfo: data.top_stories,
        postInfo: data.stories
      })
    })
  }

  render() {
    const posts = this.state.postInfo.map((post) => {
      return (
          <PostItem key={post.id} {...post}/>
        )
    })
    return (
      <div className="post">
        {posts}
      </div>
    )
  }
}