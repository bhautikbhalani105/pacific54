import { Tabs, Typography } from 'antd';
import type { TabsProps } from 'antd';

import HistoryBidders from './HistoryBidders';
import HistoryMortgages from './HistoryMortgages';
import HistoryPlantif from './HistoryPlantif';
import HistorySales from './HistorySales';
import HistoryTaxes from './HistoryTaxes';

const { Title } = Typography;

const HistorySec: React.FC = () => {
  const historyItems: TabsProps['items'] = [
    {
      key: 'sales',
      label: 'Sales',
      children: <HistorySales />
    },
    {
      key: 'mortgages',
      label: 'Mortgages',
      children: <HistoryMortgages />
    },
    {
      key: 'taxes',
      label: 'Taxes',
      children: <HistoryTaxes />
    },
    {
      key: 'plantif',
      label: 'Plantif',
      children: <HistoryPlantif />
    },
    {
      key: 'bidders',
      label: 'Bidders',
      children: <HistoryBidders />
    }
  ];

  return (
    <Tabs
      tabBarExtraContent={
        <Title level={3} className="card-heading">
          History
        </Title>
      }
      items={historyItems}
      className="tab-card"
    />
  );
};

export default HistorySec;
