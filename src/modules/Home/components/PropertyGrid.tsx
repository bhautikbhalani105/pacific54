import React from 'react';

import { Pagination, Row } from 'antd';
import type { PaginationProps } from 'antd';

import { DataType } from '../Buy/types';
import PropertyCard from './PropertyCard';

interface IProps {
  data: DataType[];
}

const onChange: PaginationProps['onChange'] = (pageNumber) => {
  console.log('Page: ', pageNumber);
};

const PropertyGrid: React.FC<IProps> = ({ data }) => {
  return (
    <>
      <Row gutter={[16, 16]}>
        {data.map((card) => (
          <PropertyCard
            key={card.key}
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
        ))}
      </Row>
      <Pagination
        className="separate-paginaion"
        size="small"
        responsive={true}
        showQuickJumper
        defaultCurrent={2}
        total={500}
        onChange={onChange}
      />
    </>
  );
};

export default PropertyGrid;
