import React from 'react';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import PropertyCard from '../../components/PropertyCard';

import { DataType } from '../../types';

interface IProps {
  data: DataType[]; // Todo: Change comparable data types as per grid view
}

const ComparePropGrid: React.FC<IProps> = (props) => {
  const { data } = props;

  return (
    <>
      {/* <PropertyCard
        endUrl={card.key}
        address={card.address}
        beds={card.beds}
        baths={card.baths}
        capRate={card.capRate}
        estRent={card.estimatedRent}
        estValue={card.estimatedValue}
        liDate={card.listingDate}
        pictures={card.pictures}
        status={card.status}
        sqFt={card.sqFt}
        roi={card.roi}
        thumb={card.thumb}
      /> */}
      {/* <div className="carousel-wrapper">
        <Carousel arrows dots={false} infinite={true}>
          {data.map((card) => (
            <div className="carousel-slide">
              <PropertyCard
                endUrl={card.key}
                address={card.address}
                beds={card.beds}
                baths={card.baths}
                capRate={card.capRate}
                estRent={card.estimatedRent}
                estValue={card.estimatedValue}
                liDate={card.listingDate}
                pictures={card.pictures}
                status={card.status}
                sqFt={card.sqFt}
                roi={card.roi}
                thumb={card.thumb}
              />
            </div>
          ))}
        </Carousel>
      </div> */}
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((card) => (
          <SwiperSlide key={card.key}>
            <PropertyCard
              endUrl={card.key}
              address={card.address}
              beds={card.beds}
              baths={card.baths}
              capRate={card.capRate}
              estRent={card.estimatedRent}
              estValue={card.estimatedValue}
              liDate={card.listingDate}
              pictures={card.pictures}
              status={card.status}
              sqFt={card.sqFt}
              roi={card.roi}
              thumb={card.thumb}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ComparePropGrid;
