import { Suspense, lazy } from 'react';

import { Content } from 'antd/es/layout/layout';
import { Outlet } from 'react-router-dom';

import { Loader } from '../../components/common/loader';

import { StyledLayout } from './Layout.Styled';
import Sidebar from './sidebar';

const Header = lazy(() => import('./header'));
const Footer = lazy(() => import('./footer'));

const Layout = () => {
  return (
    <StyledLayout hasSider>
      <Sidebar />
      <StyledLayout className="siteLayout">
        <Header />
        <Content>
          <div className="content-body">
            <div className="content-wrap">
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </div>
          </div>
        </Content>
        <Footer />
      </StyledLayout>
    </StyledLayout>
  );
};

export default Layout;
