import { Card, Col, Flex, Row } from 'antd';

import MapBox from '../../../components/MapBox';
import ValuationCard from '../../../components/ValuationCard';

import CrimeTrendChart from './CrimeTrendChart';

const Crime: React.FC = () => {
  return (
    <Card className="detail-card">
      <Row gutter={[16, 16]}>
        <Col xs={16}>
          <Flex className="mb-16" justify="space-between" gap={0}>
            <ValuationCard extraClass="c-2" valHeading="Crimes rate" mainVal="High" />
            <ValuationCard extraClass="c-2" valHeading="Crimes reported (12M)" mainSignVal={1134} />
          </Flex>
          <CrimeTrendChart />
        </Col>
        <Col xs={8}>
          <MapBox />
        </Col>
      </Row>
    </Card>
  );
};

export default Crime;
