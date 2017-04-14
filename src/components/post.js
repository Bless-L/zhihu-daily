import React, { Component } from 'react'

import PostItem from './postItem'

export default class Post extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)
    const postInfo = this.props.newsInfo.postInfo
    const posts = postInfo.map((post) => {
      return (
          <PostItem key={post.id} {...post}/>
        )
    })
    return (
      <div className="post">
        {}
      </div>
    )
  }
}