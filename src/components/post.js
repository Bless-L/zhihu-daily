import React, { Component } from 'react'

import {formatDate} from '../util'
import PostItem from './postItem'

export default class Post extends Component {
  render() {
    const postInfo = this.props.postInfo
    const posts = postInfo.map((post) => {
      return (
          <PostItem key={post.id} {...post}/>
        )
    })
    return (
      <div className="post">
        <p className="post_title">{formatDate(this.props.date)}</p>
        {posts}
      </div>
    )
  }
}