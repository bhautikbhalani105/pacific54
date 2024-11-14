import React from 'react';

import { Flex } from 'antd';

import styled from 'styled-components';

import { theming } from '../../../style/Theme';
import { BedIcon, ShowerIcon, Straighten } from '../../../svg';

interface IProps {
  beds: number;
  baths: number;
  area: string;
}

const AmenitiesStyle = styled(Flex)`
  padding: 12px 0;

  p {
    font-size: 12px;
    line-height: 16px;
    color: ${theming?.color?.gray8};
  }
`;

const Amenities: React.FC<IProps> = ({ beds, baths, area }) => {
  return (
    <AmenitiesStyle gap={16} className="amenities">
      <Flex gap={4} align="center">
        <BedIcon />
        <p>{beds}bds</p>
      </Flex>
      <Flex gap={4} align="center">
        <ShowerIcon />
        <p>{baths}ba</p>
      </Flex>
      <Flex gap={4} align="center">
        <Straighten />
        <p>{area} sqft</p>
      </Flex>
    </AmenitiesStyle>
  );
};

export default Amenities;
