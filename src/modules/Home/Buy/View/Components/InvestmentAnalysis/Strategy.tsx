import { Card, Collapse, Radio } from 'antd';
// import type { ConfigProviderProps, RadioChangeEvent } from 'antd';
import type { CollapseProps } from 'antd';

import Renovations from '../Renovations';
import Income from './Income';
import MonthlyExpenses from './MonthlyExpenses';

// type SizeType = ConfigProviderProps['componentSize'];

const Strategy: React.FC = () => {
  // const [size, setSize] = useState<SizeType>('small');

  // const onChange = (e: RadioChangeEvent) => {
  //   setSize(e.target.value);
  // };

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'Renovations',
      children: <Renovations />
    },
    {
      key: '2',
      label: 'Income',
      children: <Income />
    },
    {
      key: '3',
      label: 'Monthly expenses',
      children: <MonthlyExpenses />
    }
  ];

  const cardTabs = (
    <Radio.Group buttonStyle="solid" defaultValue="rent">
      <Radio.Button value="rent">Rent</Radio.Button>
      <Radio.Button value="flip">Flip</Radio.Button>
    </Radio.Group>
  );

  return (
    <Card className="detail-card" title="Strategy" extra={cardTabs}>
      <Collapse items={items} defaultActiveKey={['1']} />
    </Card>
  );
};

export default Strategy;
