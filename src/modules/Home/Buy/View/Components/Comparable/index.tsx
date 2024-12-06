import { Tabs, Typography } from 'antd';
import type { TabsProps } from 'antd';

import CompareRent from './CompareRent';
import CompareSales from './CompareSales';

const { Title } = Typography;

const Comparable: React.FC = () => {
  const comparableItems: TabsProps['items'] = [
    {
      key: 'sales',
      label: 'Sales',
      children: <CompareSales />
    },
    {
      key: 'rent',
      label: 'Rent',
      children: <CompareRent />
    }
  ];

  return (
    <Tabs
      tabBarExtraContent={
        <Title level={3} className="card-heading">
          Comparable
        </Title>
      }
      items={comparableItems}
      className="tab-card"
    />
  );
};

export default Comparable;
