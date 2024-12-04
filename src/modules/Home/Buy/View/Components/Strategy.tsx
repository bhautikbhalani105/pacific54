import { useState } from 'react';

import { Card, Collapse, Radio } from 'antd';
import type { ConfigProviderProps, RadioChangeEvent } from 'antd';
import type { CollapseProps } from 'antd';

import Income from './Income';
import MonthlyExpenses from './MonthlyExpenses';
import Renovations from './Renovations';

type SizeType = ConfigProviderProps['componentSize'];

const Strategy = () => {
  const [size, setSize] = useState<SizeType>('small');

  const onChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };

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
    <Radio.Group buttonStyle="solid" value={size} onChange={onChange}>
      <Radio.Button value="cash">Rent</Radio.Button>
      <Radio.Button value="mortgage">Flip</Radio.Button>
    </Radio.Group>
  );

  return (
    <Card className="detail-card" title="Strategy" extra={cardTabs}>
      <Collapse items={items} defaultActiveKey={['1']} />
    </Card>
  );
};

export default Strategy;
