import { Card, Col, Descriptions, Row } from 'antd';
import type { DescriptionsProps } from 'antd';

import MapBox from '../../../components/MapBox';

const Schools: React.FC = () => {
  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'School',
      span: 3,
      children: (
        <ul className="description-ul">
          <li>Martin Luther King Elementary School</li>
          <li>Martin Luther King Elementary School</li>
          <li>Martin Luther King Elementary School</li>
          <li>Martin Luther King Elementary School</li>
        </ul>
      )
    },
    {
      key: '2',
      label: 'Rating',
      children: (
        <ul className="description-ul">
          <li>9/10</li>
          <li>9/10</li>
          <li>9/10</li>
          <li>9/10</li>
        </ul>
      )
    },
    {
      key: '3',
      label: 'Grade',
      children: (
        <ul className="description-ul">
          <li>PK - 2</li>
          <li>PK - 2</li>
          <li>PK - 2</li>
          <li>PK - 2</li>
        </ul>
      )
    },
    {
      key: '4',
      label: 'Distance',
      children: (
        <ul className="description-ul">
          <li>0.18mi</li>
          <li>0.18mi</li>
          <li>0.18mi</li>
          <li>0.18mi</li>
        </ul>
      )
    },
    {
      key: '5',
      label: 'Source',
      children: (
        <ul className="description-ul">
          <li>GreatSchools</li>
          <li>GreatSchools</li>
          <li>GreatSchools</li>
          <li>GreatSchools</li>
        </ul>
      )
    }
  ];

  const items2: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'School',
      span: 3,
      children: (
        <ul className="description-ul">
          <li>Martin Luther King Elementary School</li>
          <li>Martin Luther King Elementary School</li>
        </ul>
      )
    },
    {
      key: '2',
      label: 'Rating',
      children: (
        <ul className="description-ul">
          <li>9/10</li>
          <li>9/10</li>
        </ul>
      )
    },
    {
      key: '3',
      label: 'Grade',
      children: (
        <ul className="description-ul">
          <li>PK - 2</li>
          <li>PK - 2</li>
        </ul>
      )
    },
    {
      key: '4',
      label: 'Distance',
      children: (
        <ul className="description-ul">
          <li>0.18mi</li>
          <li>0.18mi</li>
        </ul>
      )
    },
    {
      key: '5',
      label: 'Source',
      children: (
        <ul className="description-ul">
          <li>GreatSchools</li>
          <li>GreatSchools</li>
        </ul>
      )
    }
  ];

  return (
    <Card className="detail-card">
      <Row gutter={[16, 16]}>
        <Col xs={16}>
          <Descriptions
            column={7}
            colon={false}
            title="Assigned Schools"
            layout="vertical"
            items={items}
            style={{ paddingBottom: 36 }}
          />
          <Descriptions column={7} colon={false} title="Nearest" layout="vertical" items={items2} />
        </Col>
        <Col xs={8}>
          <MapBox />
        </Col>
      </Row>
    </Card>
  );
};

export default Schools;
