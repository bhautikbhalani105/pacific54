import { Tabs, Typography } from 'antd';
import type { TabsProps } from 'antd';

import Crime from './Crime';
import Schools from './Schools';
import Summary from './Summary';

const { Title } = Typography;

const Neighborhood: React.FC = () => {
  const neighborhoodItems: TabsProps['items'] = [
    {
      key: 'summary',
      label: 'Summary',
      children: <Summary />
    },
    {
      key: 'schools',
      label: 'Schools',
      children: <Schools />
    },
    {
      key: 'crime',
      label: 'Crime',
      children: <Crime />
    }
  ];

  return (
    <Tabs
      tabBarExtraContent={
        <Title level={3} className="card-heading">
          Neighborhood
        </Title>
      }
      items={neighborhoodItems}
      className="tab-card"
    />
  );
};

export default Neighborhood;
