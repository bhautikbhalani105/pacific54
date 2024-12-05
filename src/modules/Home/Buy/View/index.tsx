import React, { lazy, useEffect, useRef, useState } from 'react';

import { ArrowLeftOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Button, Card, Col, Divider, Dropdown, Flex, Row, Tabs, Typography } from 'antd';
import type { TabsProps } from 'antd';

import Amenities from '../components/Amenities';
import MapBox from '../components/MapBox';
import ValuationCard from '../components/ValuationCard';

import DueDiligence from './Components/DueDiligence';
import FinancingOptions from './Components/FinancingOptions';
import HistorySales from './Components/History/HistorySales';
import LoadList from './Components/LoadList';
import Summary from './Components/Neighborhood/Summary';
import PropertyCarousel from './Components/PropertyCarousel';
import Strategy from './Components/Strategy';
import { Wrapper } from './style';
import { useNavigate } from 'react-router-dom';

const CompareSales = lazy(() => import('./Components/CompareSales'));
const CompareRent = lazy(() => import('./Components/CompareRent'));

const { Title, Text } = Typography;
const { Meta } = Card;

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

  const comparableItems: TabsProps['items'] = [
    {
      key: 'sales',
      label: 'Sales',
      children: <CompareSales />
    },
    {
      key: 'rent',
      label: 'Rent',
      children: <CompareRent />
    }
  ];

  const historyItems: TabsProps['items'] = [
    {
      key: 'sales',
      label: 'Sales',
      children: <HistorySales />
    },
    {
      key: 'mortgages',
      label: 'Mortgages',
      children: <HistorySales />
    },
    {
      key: 'taxes',
      label: 'Taxes',
      children: <HistorySales />
    },
    {
      key: 'plantif',
      label: 'Plantif',
      children: <HistorySales />
    },
    {
      key: 'bidders',
      label: 'Bidders',
      children: <HistorySales />
    }
  ];

  const neighborhoodItems: TabsProps['items'] = [
    {
      key: 'summary',
      label: 'Summary',
      children: <Summary />
    },
    {
      key: 'schools',
      label: 'Schools',
      children: <Summary />
    },
    {
      key: 'crime',
      label: 'Crime',
      children: <Summary />
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
              <ValuationCard valHeading="Listing Value" mainVal={275000} />
              <ValuationCard valHeading="Estimated Value" mainVal={264000} />
              <ValuationCard valHeading="Estimated Equity" mainVal={64800} />
              <ValuationCard
                valHeading="Estimated Rental"
                mainVal={1111}
                highLow={['$1000', '$1200']}
              />
              <ValuationCard valHeading="30 Days change" mainVal={15450} incRate={7} />
              <ValuationCard valHeading="Cap Rate" mainSignVal={-9} rateVal={39870} />
              <ValuationCard valHeading="ROI" mainSignVal={11} rateVal={45230} />
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
      <Title level={3} className="card-heading">
        Property details
      </Title>
      <Card className="detail-card">
        <LoadList />
        <Divider style={{ margin: '24px -24px', width: 'calc(100% + 48px)' }} />
        <Meta
          title={<Text type="secondary">Remarks</Text>}
          description={
            <p>
              Amazing opportunity to own this charming old Spanish style home. As you walk in, it
              invites you to the spacious living/dining room area. Great for family fun & more!
              Expand your celebrations to the HUGE backyard for BBq's and outdoor activities. This
              home comes with 3 bedrooms and 2 full baths. Some TLC required.
            </p>
          }
        />
      </Card>
      <Tabs
        tabBarExtraContent={
          <Title level={3} className="card-heading">
            Comparable
          </Title>
        }
        items={comparableItems}
        className="tab-card"
      />
      <Tabs
        tabBarExtraContent={
          <Title level={3} className="card-heading">
            History
          </Title>
        }
        items={historyItems}
        className="tab-card"
      />
      <Tabs
        tabBarExtraContent={
          <Title level={3} className="card-heading">
            Neighborhood
          </Title>
        }
        items={neighborhoodItems}
        className="tab-card"
      />
      <Title level={3} className="card-heading">
        Investment Analysis
      </Title>
      <FinancingOptions />
      <Strategy />
      <Title level={3} className="card-heading">
        Due Diligence
      </Title>
      <DueDiligence />
      <Title level={3} className="card-heading">
        Prepare for Auction
      </Title>
    </Wrapper>
  );
};

export default BuyDetail;
