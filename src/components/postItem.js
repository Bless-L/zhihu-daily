import React, { Component } from 'react';

export default class PostItem extends Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return (
      <div className="post_item">
        <p className="post_item_name">{this.props.title}</p>
        <div className="post_item_pic">
          <img src={this.props.images} alt=""/>
        </div>
      </div>
    )
  }
}