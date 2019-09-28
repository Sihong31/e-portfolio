import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './carousel-component.scss';
import CarouselItem from './carousel-item/carousel-item';

class CarouselComponent extends Component {

  renderContent = (slides) => {
    if (this.props.carouselType === "quote") {
      return (
        slides.map((slide, i) => {
          return (
            <div key={i}>
              <CarouselItem
                    type="quote"
                    headline={slide.headline}
                    description={slide.description} />
            </div>
          );
        })
      );
    } else if (this.props.carouselType === "image") {
      return (
        slides.map((slide, i) => {
          return (
            <div key={i}>
              <CarouselItem
                type="image"
                description={slide.description}
                leftImage={slide.leftImage}
                rightContent={slide.rightContent} />
            </div>
          )
        })
      );
    }
    return (
      <div></div>
    );
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="carousel-component">
        <Slider {...settings}>
          {this.renderContent(this.props.content)}
        </Slider>
      </div>
    );
  }
}


export default CarouselComponent;