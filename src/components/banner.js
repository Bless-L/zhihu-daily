import React, { Component } from 'react'
import Swiper from 'swiper'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

window.Swiper = Swiper

class Banner extends Component {
  componentDidUpdate () {
    new window.Swiper ('.swiper-container', {
      loop: true,
      autoplay: 3000,
      pagination: '.swiper-pagination',
      autoplayDisableOnInteraction: false,
      paginationClickable :true,
    })
  }
  render() {
    const slides = this.props.topInfo
    return (
      <div className="swiper-container banner">
        <div className="swiper-wrapper banner_wp">
          {slides.map((item) => {
              return (
                <div className="swiper-slide" key={item.id}>
                  <Link to={`/detail/${item.id}`}>
                    <img className="banner_bg"  src={item.image} alt={item.title}/>
                    <p className="banner_title">{item.title}</p>
                  </Link>
                </div>
              )
            })
          }
        </div>
        <div className="swiper-pagination"></div>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    topInfo: state.newsInfo.topInfo,
  }
} 

export default connect(mapStateToProps)(Banner);