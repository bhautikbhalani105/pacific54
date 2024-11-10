import React from 'react';

import { Row } from 'antd';

import { DataType } from '../Buy/types';
import PropertyCard from './PropertyCard';

interface IProps {
  data: DataType[];
}

const PropertyGrid: React.FC<IProps> = ({ data }) => {
  return (
    <>
      <Row gutter={[16, 16]}>
        {data.map((card) => (
          <>
            <PropertyCard
              key={card.key}
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
          </>
        ))}
      </Row>
    </>
  );
};

export default PropertyGrid;
