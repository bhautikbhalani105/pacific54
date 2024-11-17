import { Carousel } from 'antd';

import { toAbsoluteUrl } from '../../../../utils/functions';

import { Wrapper } from './PropertyCarouselStyle';

const PropertyCarousel = () => {
  return (
    <Wrapper>
      <div className="carousel-wrapper">
        <Carousel arrows dots={false} infinite={true}>
          <div className="carousel-slide">
            <img src={toAbsoluteUrl('/Images/prop-1.jpg')} alt="" />
          </div>
          <div className="carousel-slide">
            <img src={toAbsoluteUrl('/Images/prop-1.jpg')} alt="" />
          </div>
          <div className="carousel-slide">
            <img src={toAbsoluteUrl('/Images/prop-1.jpg')} alt="" />
          </div>
          <div className="carousel-slide">
            <img src={toAbsoluteUrl('/Images/prop-1.jpg')} alt="" />
          </div>
        </Carousel>
      </div>
    </Wrapper>
  );
};

export default PropertyCarousel;
