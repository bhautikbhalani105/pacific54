import { useState } from 'react';

import { AppstoreOutlined, BarsOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Button, Card, Flex, Input, Tabs } from 'antd';
import type { TabsProps } from 'antd';

import { compareData, data } from '../../../components/DummyData';
import MapBox from '../../../components/MapBox';
import ValuationCard from '../../../components/ValuationCard';
import styled from 'styled-components';

import { useViewStore } from '../../../../../../services/store/propertyView';
import { theming } from '../../../../../../style/Theme';
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
  const [isMapVisible, setIsMapVisible] = useState<boolean>(false);

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

  const mapVisiblity = () => {
    setIsMapVisible((prevState: boolean) => !prevState);
  };

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
            <Button style={{ width: 84 }} icon={<EnvironmentOutlined />} onClick={mapVisiblity}>
              Map
            </Button>
          </Flex>
        </>
        <Flex className="mb-16 mt-16" justify="space-between" gap={0}>
          <ValuationCard
            extraClass="c-4"
            valHeading="Selected"
            mainVal="4 properties"
            rateVal="from 8"
            tooltipinfo={
              <ul>
                <li>6391 Elgin St. Celina</li>
                <li>2118 Thornridge Cir.</li>
                <li>2464 Royal Ln. Mesa</li>
                <li>6391 Elgin St. Celina</li>
              </ul>
            }
          />
          <ValuationCard
            extraClass="c-4"
            valHeading="Average sale price"
            mainVal={1364}
            highLow={[165000, 223500]}
            tooltipinfo="Represents the average price of properties sold in a specific area or time period, providing insights into market trends."
          />
          <ValuationCard
            extraClass="c-4"
            valHeading="Average sqft price"
            mainVal={1.6}
            highLow={['$127/sqft', '$183/sqft']}
            tooltipinfo="The average price per square foot of properties sold, reflecting property value relative to size."
          />
          <ValuationCard
            extraClass="c-4"
            valHeading="Average SqFt."
            mainVal={1211}
            highLow={[876, 1523]}
            tooltipinfo="The average size of properties sold, measured in square feet, indicating typical property dimensions."
          />
        </Flex>
        {isMapVisible && <MapBox />}
        <Tabs defaultActiveKey={propertyView} items={view} onChange={toggleView} />
      </Card>
    </>
  );
};

export default CompareSales;
