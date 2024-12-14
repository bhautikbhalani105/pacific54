import React from 'react';

import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';

import Status from './sidebar/components/Status';

const { Header, Content, Sider } = Layout;
const { SubMenu, Item } = Menu;

const items1: MenuProps['items'] = [
  {
    key: '1',
    label: 'BUY'
  },
  {
    key: '2',
    label: 'MARKETING'
  },
  {
    key: '3',
    label: 'CONTACTS'
  }
];

// const items2 = [
//   {
//     key: 'sub1',
//     icon: <UserOutlined />,
//     label: 'subnav 1',
//     children: <Status />
//   },
//   {
//     key: 'sub2',
//     icon: <LaptopOutlined />,
//     label: 'subnav 2',
//     children: [
//       { key: '5', label: 'option5' },
//       { key: '6', label: 'option6' },
//       { key: '7', label: 'option7' },
//       { key: '8', label: 'option8' }
//     ]
//   },
//   {
//     key: 'sub3',
//     icon: <NotificationOutlined />,
//     label: 'subnav 3',
//     children: [
//       { key: '9', label: 'option9' },
//       { key: '10', label: 'option10' },
//       { key: '11', label: 'option11' },
//       { key: '12', label: 'option12' }
//     ]
//   }
// ];

// const menuItems = [
//   {
//     key: 'sub1',
//     icon: <UserOutlined />,
//     label: 'subnav 1',
//     children: [
//       {
//         key: 'status',
//         label: <Status />, // Custom React component as the label
//       },
//     ],
//   },
//   {
//     key: 'sub2',
//     icon: <UserOutlined />,
//     label: 'subnav 2',
//     children: [
//       { key: '3', label: 'Option 3' },
//       { key: '4', label: 'Option 4' },
//     ],
//   },
// ];

const items2 = [
  {
    key: 'sub1',
    icon: <UserOutlined />,
    label: 'subnav 1',
    children: (
      <SubMenu
        key="sub1-1"
        title={
          <Item key="sub1-1-1" icon={<UserOutlined />}>
            <Status />
          </Item>
        }
      />
    )
  }
  // ... other menu items
];

const AppLapout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Layout>
        <Sider collapsible width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AppLapout;
