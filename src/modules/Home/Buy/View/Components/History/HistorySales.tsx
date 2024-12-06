import { Card, Col, Flex, Row } from 'antd';

import ValuationCard from '../../../components/ValuationCard';

import HistorySalesChart from './HistorySalesChart';
import HistorySalesList from './HistorySalesList';

const HistorySales: React.FC = () => {
  return (
    <Card className="detail-card">
      <Row gutter={[16, 16]}>
        <Col xs={10}>
          <HistorySalesList />
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
