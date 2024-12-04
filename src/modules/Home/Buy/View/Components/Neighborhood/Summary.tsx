import { Card, Col, Flex, Row } from 'antd';

import ValuationCard from '../../../components/ValuationCard';

import NeighborhoodChart from './NeighborhoodChart';

const Summary = () => {
  return (
    <Card className="detail-card">
      <Row>
        <Col xs={10}>
          <Flex justify="space-between" gap={0} wrap>
            <ValuationCard
              extraClass="c-2"
              valHeading="Median Value"
              mainVal={588000}
              highLow={['$456.000', '$720.000']}
            />
            <ValuationCard
              extraClass="c-2"
              valHeading="Value trend"
              mainVal={196580}
              rateVal="Last 30 days"
            />
            <ValuationCard
              extraClass="c-2 mt-16"
              valHeading="Average Sale Price:"
              mainVal={196580}
              rateVal="All time"
            />
            <ValuationCard
              extraClass="c-2 mt-16"
              valHeading="Median Property Age"
              mainVal="71 years"
              rateVal="Current property: 54 years"
            />
            <ValuationCard
              extraClass="c-2 mt-16"
              valHeading="Occupied By Owners"
              mainSignVal={86}
            />
            <ValuationCard
              extraClass="c-2 mt-16"
              valHeading="Occupied By Renters"
              mainSignVal={14}
            />
          </Flex>
        </Col>
        <Col xs={14}>
          <NeighborhoodChart />
        </Col>
      </Row>
    </Card>
  );
};

export default Summary;
