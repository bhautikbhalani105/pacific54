import { Card, Col, Flex, Row } from 'antd';

import ValuationCard from '../../../components/ValuationCard';

import NeighborhoodChart from './NeighborhoodChart';

const Summary: React.FC = () => {
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
              tooltipinfo="The median value represents the middle point of all property values in a dataset. Half of the properties are valued above the median, and half are below, providing a more accurate reflection of the typical property value compared to the average."
            />
            <ValuationCard
              extraClass="c-2"
              valHeading="Value trend"
              mainVal={196580}
              rateVal="Last 30 days"
              tooltipinfo="Property value have decreased by 3% over the past 3 years, indicating a reduction in local value or a decline in property."
            />
            <ValuationCard
              extraClass="c-2 mt-16"
              valHeading="Average Sale Price"
              mainVal={196580}
              rateVal="All time"
              tooltipinfo="Property Sale Price have remained stable over the past few years, with no significant increases or decreases."
            />
            <ValuationCard
              extraClass="c-2 mt-16"
              valHeading="Median Property Age"
              mainVal="71 years"
              rateVal="Current property: 54 years"
              tooltipinfo="The median property age is 71 years, meaning half of the properties are older and half are younger. This property is 54 years old, making it younger than the median age of properties in the area."
            />
            <ValuationCard
              extraClass="c-2 mt-16"
              valHeading="Occupied By Owners"
              mainSignVal={86}
              tooltipinfo="Indicates the percentage of properties in the area that are owned and occupied by their owners, rather than being rented out."
            />
            <ValuationCard
              extraClass="c-2 mt-16 border-right-o"
              valHeading="Occupied By Renters"
              mainSignVal={14}
              tooltipinfo="Indicates the percentage of properties in the area that are rented and occupied by tenants, rather than being owned by the residents."
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
