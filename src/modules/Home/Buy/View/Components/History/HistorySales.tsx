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
            <ValuationCard
              extraClass="c-3"
              valHeading="Last sale price"
              mainVal={308000}
              tooltipinfo="January 15, 2024"
            />
            <ValuationCard
              extraClass="c-3"
              valHeading="Compared to previous"
              mainSignVal={16}
              tooltipinfo="6391 Elgin St. Celina"
            />
            <ValuationCard
              extraClass="c-3"
              valHeading="Avr sales trend"
              mainSignVal={7}
              tooltipinfo="The overall trend of property sales over a specific period, showing whether prices are increasing, decreasing, or remaining stable in the market."
            />
          </Flex>
          <HistorySalesChart />
        </Col>
      </Row>
    </Card>
  );
};

export default HistorySales;
