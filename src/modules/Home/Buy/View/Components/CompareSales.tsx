import { AppstoreOutlined, BarsOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Button, Card, Flex, Input, Tabs } from 'antd';
import type { TabsProps } from 'antd';

import { compareData, data } from '../../components/DummyData';
import ValuationCard from '../../components/ValuationCard';
import styled from 'styled-components';

import { useViewStore } from '../../../../../services/store/propertyView';
import { theming } from '../../../../../style/Theme';
import ComparePropGrid from './ComparePropGrid';
import ComparePropList from './ComparePropList';

const { Search } = Input;

const Label = styled.label`
  font-size: 12px;
  line-height: 20px;
  font-weight: 700;
  color: ${theming?.color?.gray7};
  width: 100%;
  margin: 0 0 4px;
  display: inline-block;
`;

const CompareSales: React.FC = () => {
  const { propertyView, toggleView } = useViewStore();

  const view: TabsProps['items'] = [
    {
      key: 'list',
      label: null,
      icon: <BarsOutlined />,
      children: <ComparePropList data={compareData} />
    },
    {
      key: 'grid',
      label: null,
      icon: <AppstoreOutlined />,
      children: <ComparePropGrid data={data} />
    }
  ];

  return (
    <>
      <Card className="detail-card">
        <>
          <Label>Add Property</Label>
          <Flex align="center" gap={8}>
            <Search
              placeholder="Add address of the comparable property..."
              style={{ width: 'calc(100% - 92px)' }}
              allowClear
            />
            <Button style={{ width: 84 }} icon={<EnvironmentOutlined />}>
              Map
            </Button>
          </Flex>
        </>
        <Flex className="b-t-1-solid-gray5 b-b-1-solid-gray5 mt-16" justify="space-between" gap={0}>
          <ValuationCard
            extraClass="c-4"
            valHeading="Selected"
            mainVal="4 properties"
            rateVal="from 8"
          />
          <ValuationCard
            extraClass="c-4"
            valHeading="Average sale price"
            mainVal={196580}
            highLow={[165000, 223500]}
          />
          <ValuationCard
            extraClass="c-4"
            valHeading="Average sqft price"
            mainSignVal={15600}
            highLow={['$127/sqft', '$183/sqft']}
          />
          <ValuationCard
            extraClass="c-4"
            valHeading="Average SqFt."
            mainVal={1211}
            highLow={[876, 1523]}
          />
        </Flex>
        <Tabs defaultActiveKey={propertyView} items={view} onChange={toggleView} />
      </Card>
    </>
  );
};

export default CompareSales;
