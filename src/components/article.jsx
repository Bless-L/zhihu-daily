import React, { Component } from 'react'

export default class Article extends Component {
  constructor(props) {
    super(props)
  }

  render() { 
    return (
      <div className="article">
        <div className="article_header">
          <img className="article_header_bg" src={this.props.data.image} alt={this.props.data.title}/>
          <p className="article_header_title">{this.props.data.title}</p>
          <span className="article_header_copyright">{this.props.data.image_source}</span>
        </div>
        <div className="article_content" dangerouslySetInnerHTML={{__html: this.props.data.body}}></div>
      </div>
    )
  }
}