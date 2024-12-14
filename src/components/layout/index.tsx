import React, { Suspense, useState } from 'react';

import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';

import { toAbsoluteUrl } from '../../utils/functions';

import { Loader } from '../common/loader';
import Sidebar from './sidebar';
import { Wrapper } from './style';

const { Header } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: 'BUY',
    key: 'buy'
  },
  {
    label: 'MARKETING',
    key: 'marketing'
  },
  {
    label: 'CONTACT',
    key: 'contact'
  }
];

const AppLapout: React.FC = () => {
  // const {
  //   token: { colorBgContainer, borderRadiusLG }
  // } = theme.useToken();

  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Wrapper>
      <Layout className="main-layout">
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <div className="logoWrapper">
            <img src={toAbsoluteUrl('/Images/logo.svg')} />
          </div>
          <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </Header>
        <Layout>
          <Sidebar />
          <Layout className="content-layout">
            {/* <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG
            }}
          >
            Content
          </Content> */}
            <div className="content-body">
              <div className="content-wrap">
                <Suspense fallback={<Loader />}>
                  <Outlet />
                </Suspense>
              </div>
            </div>
          </Layout>
        </Layout>
      </Layout>
    </Wrapper>
  );
};

export default AppLapout;
