import React from 'react';

import { AppstoreOutlined, BarsOutlined, DownOutlined } from '@ant-design/icons';
import { Button, Divider, Dropdown, Flex, Segmented, Space, Typography, theme } from 'antd';
import type { MenuProps } from 'antd';

import { toAbsoluteUrl } from '../../../utils/functions';

import Meta from '../../../components/common/Meta';
import { data } from '../components/DummyData';
import PropertyGrid from '../components/PropertyGrid';
import PropertyListTable from '../components/PropertyListTable';

import { useViewStore } from '../../../services/store/propertyView';
import { Wrapper } from './style';

const { useToken } = theme;
const { Text } = Typography;

const HomeBuy = () => {
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

  return (
    <>
      <Meta title="Pecific54 - Property list" />
      <Wrapper>
        <div className="map-box">
          <img src={toAbsoluteUrl('/Images/Svg/map.svg')} alt="" />
        </div>
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
          {propertyView === 'list' && <PropertyListTable data={data} />}
          {propertyView === 'grid' && <PropertyGrid data={data} />}
        </div>
      </Wrapper>
    </>
  );
};

export default HomeBuy;
