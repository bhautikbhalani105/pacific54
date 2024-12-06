import { Card, Col, Flex, Row } from 'antd';

import ValuationCard from '../../../components/ValuationCard';

import HistoryTaxesChart from './HistoryTaxesChart';
import HistoryTaxesList from './HistoryTaxesList';

const HistoryTaxes: React.FC = () => {
  return (
    <Card className="detail-card">
      <Row>
        <Col xs={10}>
          <HistoryTaxesList />
        </Col>
        <Col xs={14}>
          <Flex justify="space-between" gap={0}>
            <ValuationCard
              extraClass="c-3 border-left-o"
              valHeading="Last tax (2020)"
              mainVal={3622}
            />
            <ValuationCard extraClass="c-3" valHeading="Compared to previous" mainSignVal={4} />
            <ValuationCard extraClass="c-3" valHeading="Avr tax trend" mainSignVal={3} />
          </Flex>
          <HistoryTaxesChart />
        </Col>
      </Row>
    </Card>
  );
};

export default HistoryTaxes;
