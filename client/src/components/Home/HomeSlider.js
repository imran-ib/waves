import React, { Component } from "react";
import Slider from "react-slick";
import MyButton from "./../../Utills/Button/MyButton";

export class HomeSlider extends Component {
  state = {
    sliders: [
      {
        image: "/images/featured/featured_home.jpg",
        lineOne: "Fender",
        lineTwo: "Custome Shop",
        linkTitle: "Shop Now",
        linkTo: "/shop"
      },
      {
        image: "/images/featured/featured_home_2.jpg",
        lineOne: "B-Guitar",
        lineTwo: "Used Guitar Shop",
        linkTitle: "Shop Now",
        linkTo: "/shop"
      }
    ]
  };
  rendedrSlides = () =>
    this.state.sliders.map((item, i) => (
      <div key={i}>
        <div
          className="featured_image"
          style={{
            background: `url(${item.image})`,
            height: `${window.innerHeight}px`,
            innerWidth: `${window.innerWidth}px`,
            backgroundSize: "cover"
          }}
        >
          <div className="featured_action">
            <div className="tag title">{item.lineOne}</div>
            <div className="tag low_title">{item.lineTwo}</div>
            <MyButton
              type="default"
              linkTo={item.linkTo}
              title={item.linkTitle}
              style={{ padding: "10px 0 0 0 " }}
            />
          </div>
        </div>
      </div>
    ));
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };
    return (
      <div className="featured_container">
        <Slider {...settings}>{this.rendedrSlides()}</Slider>
      </div>
    );
  }
}

export default HomeSlider;
