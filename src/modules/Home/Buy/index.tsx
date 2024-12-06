import React from 'react';

import {
  AppstoreOutlined,
  BarsOutlined,
  DownOutlined,
  EnvironmentOutlined,
  FilterOutlined
} from '@ant-design/icons';
import {
  Button,
  Divider,
  Dropdown,
  Flex,
  Input,
  Segmented,
  Space,
  Tabs,
  Typography,
  theme
} from 'antd';
import type { MenuProps, TabsProps } from 'antd';

import Meta from '../../../components/common/Meta';
import { data } from './components/DummyData';
import MapBox from './components/MapBox';
import PropertyGrid from './components/PropertyGrid';
import PropertyListTable from './components/PropertyListTable';

import { useViewStore } from '../../../services/store/propertyView';
import { Wrapper } from './style';

const { useToken } = theme;
const { Text } = Typography;
const { Search } = Input;

const HomeBuy: React.FC = () => {
  const { token } = useToken();
  const { propertyView, toggleView } = useViewStore();

  const contentStyle: React.CSSProperties = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary
  };

  const menuStyle: React.CSSProperties = {
    boxShadow: 'none'
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      )
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item (disabled)
        </a>
      ),
      disabled: true
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item (disabled)
        </a>
      ),
      disabled: true
    }
  ];

  const view: TabsProps['items'] = [
    {
      key: 'list',
      label: null,
      icon: <BarsOutlined />,
      children: <PropertyListTable data={data} />
    },
    {
      key: 'grid',
      label: null,
      icon: <AppstoreOutlined />,
      children: <PropertyGrid data={data} />
    }
  ];

  return (
    <>
      <Meta title="Pecific54 - Property list" />
      <Wrapper>
        <Flex justify="space-between" className="mb-20">
          <Space>
            <Space.Compact>
              <Search placeholder="Search properties..." allowClear />
            </Space.Compact>
            <Button icon={<EnvironmentOutlined />}>Map</Button>
            <Button icon={<FilterOutlined />}>Filters</Button>
          </Space>
          <Button type="primary">Add Property</Button>
        </Flex>
        <MapBox />
        <div className="property list">
          <Flex align="center" justify="space-between" className="property-header">
            <Space>
              <Text className="text-gray7" strong>
                Sort:
              </Text>
              <Dropdown
                menu={{ items }}
                dropdownRender={(menu) => (
                  <div style={contentStyle}>
                    {React.cloneElement(menu as React.ReactElement, { style: menuStyle })}
                    <Divider style={{ margin: 0 }} />
                    <Space style={{ padding: 8 }}>
                      <Button type="primary">Apply</Button>
                    </Space>
                  </div>
                )}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <Text strong>Last added</Text>
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </Space>
            <Segmented
              options={[
                { value: 'list', icon: <BarsOutlined /> },
                { value: 'grid', icon: <AppstoreOutlined /> }
              ]}
              onChange={toggleView}
              defaultValue={propertyView}
            />
          </Flex>
          <Tabs defaultActiveKey={propertyView} items={view} onChange={toggleView} />
          {/* {propertyView === 'list' && <PropertyListTable data={data} />}
          {propertyView === 'grid' && <PropertyGrid data={data} />} */}
        </div>
      </Wrapper>
    </>
  );
};

export default HomeBuy;
