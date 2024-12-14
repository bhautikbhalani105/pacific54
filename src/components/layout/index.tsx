import React, { Suspense } from 'react';

import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import { Loader } from '../common/loader';
import LayoutFooter from './footer';
import LayoutHeader from './header';
import Sidebar from './sidebar';
import { Wrapper } from './style';

const AppLapout: React.FC = () => {
  return (
    <Wrapper>
      <Layout className="main-layout">
        <LayoutHeader />
        <Layout>
          <Sidebar />
          <Layout className="content-layout">
            <div className="content-wrap">
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </div>
            {/* <div className="content-body">
            </div> */}
          </Layout>
        </Layout>
        <LayoutFooter />
      </Layout>
    </Wrapper>
  );
};

export default AppLapout;
