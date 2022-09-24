import React, { Component } from "react";
import Slider from "react-slick";


export default class Fade extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="fading">
        
        <Slider {...settings}
          autoplay={true}
          autoplaySpeed={1500}
          >
          <div>
            <h2 className="join">JOIN THE UNMANNED SYSTEMS REVALUTION</h2>
          </div>
          <div>
            <h2>AUGMENT HUMAN PERFORMANCE</h2>
          </div>
          <div>
            <h2>UNLEASH TRUE INTEROPERABIITY</h2>
          </div>
        </Slider>
      </div>
    );
  }
}