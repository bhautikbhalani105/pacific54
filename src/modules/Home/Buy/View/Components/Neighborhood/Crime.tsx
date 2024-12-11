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
            <ValuationCard
              extraClass="c-2"
              valHeading="Crimes rate"
              mainVal="High"
              tooltipinfo="The crime rate represents the number of reported crimes in a specific area over a given period, typically expressed per 1,000 residents. A higher crime rate indicates more incidents, while a lower rate suggests a safer area."
            />
            <ValuationCard
              extraClass="c-2"
              valHeading="Crimes reported (12M)"
              mainSignVal={1134}
              tooltipinfo="The total number of crimes reported in the past 12 months. This figure reflects the area's crime activity over the last year, helping assess safety trends."
            />
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
