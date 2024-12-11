import React, { lazy, useEffect, useRef, useState } from 'react';

import { ArrowLeftOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Button, Col, Dropdown, Flex, Row, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

import Amenities from '../components/Amenities';
import MapBox from '../components/MapBox';
import ValuationCard from '../components/ValuationCard';

import Comparable from './Components/Comparable';
import Diligence from './Components/Diligence';
import HistorySec from './Components/History';
import Neighborhood from './Components/Neighborhood';
import PropertyCarousel from './Components/PropertyCarousel';
import PropertyDetails from './Components/PropertyDetails';
import { Wrapper } from './style';

const InvestmentAnalysis = lazy(() => import('./Components/InvestmentAnalysis'));
const PrepareAuction = lazy(() => import('./Components/PrepareAuction'));
const Notes = lazy(() => import('../../../../components/common/Notes'));

const { Title } = Typography;

const BuyDetail: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const [colHeight, setColHeight] = useState<number>(0);

  const items = [
    {
      key: '1',
      label: '1st item'
    },
    {
      key: '2',
      label: '2nd item'
    },
    {
      key: '3',
      label: '3rd item'
    }
  ];

  useEffect(() => {
    setTimeout(() => {
      if (carouselRef.current) {
        setColHeight(carouselRef.current.offsetWidth - 16);
      }
    }, 500);
  }, []);

  return (
    <Wrapper className="view-property">
      <div className="view-header">
        <div className="top-header">
          <div className="container">
            <Flex align="center" justify="space-between" gap={12}>
              <Flex align="center" justify="flex-start" gap={12}>
                <Button icon={<ArrowLeftOutlined />} onClick={() => navigate(-1)} />
                <Flex align="center" justify="flex-start" gap={24}>
                  <Title level={3} className="heading">
                    1800 Sans Souci Blvd
                  </Title>
                  <Amenities beds={10} baths={10} area={'1111'} />
                </Flex>
              </Flex>
              <Flex align="center" justify="flex-start" gap={8}>
                <Button type="primary">Save</Button>
                <Dropdown menu={{ items }} trigger={['click']}>
                  <Button icon={<EllipsisOutlined />} />
                </Dropdown>
              </Flex>
            </Flex>
          </div>
        </div>
        <div className="valuations">
          <div className="container">
            <Flex justify="space-between" gap={0}>
              <ValuationCard
                tooltipinfo="Price listed for the property based on market trends"
                valHeading="Listing Value"
                mainVal={275000}
              />
              <ValuationCard
                tooltipinfo="The approximate market value of the property based on comparable sales and current trends."
                valHeading="Estimated Value"
                mainVal={264000}
              />
              <ValuationCard
                tooltipinfo="The difference between the property's estimated value and any outstanding mortgage or debt."
                valHeading="Estimated Equity"
                mainVal={64800}
              />
              <ValuationCard
                tooltipinfo="The expected monthly rental income the property could generate."
                valHeading="Estimated Rental"
                mainVal={1111}
                highLow={['$1000', '$1200']}
              />
              <ValuationCard
                tooltipinfo="The percentage increase or decrease in the property value over the past 30 days."
                valHeading="30 Days change"
                mainVal={15450}
                incRate={7}
              />
              <ValuationCard
                tooltipinfo="The annual return on investment (ROI) expressed as a percentage of the property's current value."
                valHeading="Cap Rate"
                mainSignVal={-9}
                rateVal={39870}
              />
              <ValuationCard
                tooltipinfo="The profit generated from the property as a percentage of the total investment cost."
                valHeading="ROI"
                mainSignVal={11}
                rateVal={45230}
              />
            </Flex>
          </div>
        </div>
      </div>
      <Row gutter={[16, 16]} className="location">
        <Col xs={16} style={{ height: colHeight }}>
          <MapBox />
        </Col>
        <Col xs={8} style={{ height: colHeight }} ref={carouselRef}>
          <PropertyCarousel />
        </Col>
      </Row>
      <PropertyDetails />
      <Comparable />
      <HistorySec />
      <Neighborhood />
      <InvestmentAnalysis />
      <Diligence />
      <PrepareAuction />
      <Notes />
    </Wrapper>
  );
};

export default BuyDetail;
