import { useState } from 'react';

import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, Dropdown, Layout, Menu, MenuProps, Row } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

import { ROUTES } from '../../../utils/constants/routes';
import { toAbsoluteUrl } from '../../../utils/functions';

import { authStore } from '../../../services/store/auth';

const { Header } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const LayoutHeader: React.FC = () => {
  const navigate = useNavigate();
  const {
    actions: { authFail }
  } = authStore((state) => state);
  const onLogout = () => {
    authFail();
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Button type="text" onClick={() => navigate(ROUTES.myAccount)}>
          My Account
        </Button>
      ),
      icon: <UserOutlined />,
      className: 'ant-dropdown-btn'
    },
    {
      key: '2',
      label: (
        <Button type="text" onClick={() => navigate(ROUTES.changePassword)}>
          Change password
        </Button>
      ),
      icon: <UserOutlined />,
      className: 'ant-dropdown-btn'
    },
    {
      key: '3',
      label: (
        <Button type="text" onClick={onLogout}>
          Logout
        </Button>
      ),
      icon: <LogoutOutlined />,
      className: 'ant-dropdown-btn'
    }
  ];

  const menu: MenuItem[] = [
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

  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  return (
    <Header style={{ textAlign: 'center' }}>
      <Row gutter={16} align={'middle'} justify={'space-between'}>
        <Col sm={16} md={8} className="d-flex align-items-center justify-content-start">
          <div className="logoWrapper">
            <img src={toAbsoluteUrl('/Images/logo.svg')} />
          </div>
          <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={menu} />
        </Col>
        <Col xs={8} className="d-flex align-items-center justify-content-end">
          <Dropdown
            menu={{ items }}
            trigger={['click']}
            className="layout-header-dropdown"
            overlayClassName="layout-header-dropdown"
          >
            <Link to="" onClick={(e) => e.preventDefault()}>
              <Avatar
                // size="large"
                src={toAbsoluteUrl('/icons/user_thumbnail.svg')}
                className="profile-avatar"
              />
            </Link>
          </Dropdown>
        </Col>
      </Row>
    </Header>
  );
};

export default LayoutHeader;
