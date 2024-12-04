import { Card, Col, Flex, Row } from 'antd';

import ValuationCard from '../../../components/ValuationCard';

import HistorySalesChart from './HistorySalesChart';
import HitoryList from './HitoryList';

const HistorySales = () => {
  return (
    <Card className="detail-card">
      <Row>
        <Col xs={10}>
          <HitoryList />
        </Col>
        <Col xs={14}>
          <Flex justify="space-between" gap={0}>
            <ValuationCard extraClass="c-3" valHeading="Last sale price" mainVal={308000} />
            <ValuationCard extraClass="c-3" valHeading="Compared to previous" mainSignVal={16} />
            <ValuationCard extraClass="c-3" valHeading="Avr sales trend" mainSignVal={7} />
          </Flex>
          <HistorySalesChart />
        </Col>
      </Row>
    </Card>
  );
};

export default HistorySales;
