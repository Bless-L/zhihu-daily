import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const PostItem = (props) => {
  return (
    <Link to={`/detail/${props.id}`}>
      <div className="post_item">
        <p className="post_item_name">{props.title}</p>
        <div className="post_item_pic">
          <img src={props.images} alt=""/>
        </div>
      </div>
    </Link>
  )
}

export default PostItem