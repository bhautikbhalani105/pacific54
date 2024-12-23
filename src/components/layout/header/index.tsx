import { useMemo } from 'react';

import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, Dropdown, Layout, Menu, MenuProps, Row } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { ROUTES } from '../../../utils/constants/routes';
import { toAbsoluteUrl } from '../../../utils/functions';

import { authStore } from '../../../services/store/auth';

const { Header } = Layout;

function createMenuItem(
  link?: string,
  label?: string,
  key?: any,
  icon?: any,
  children?: any,
  type?: any
) {
  return {
    link,
    key,
    icon,
    children,
    label,
    type
  };
}

const menus = [
  createMenuItem(ROUTES.buy, 'BUY', '1'),
  createMenuItem(ROUTES.marketing, 'MARKETING', '2'),
  createMenuItem(ROUTES.contact, 'CONTACT', '3')
];

function compareLinkAndReturnKey(menus: any, currentPath: any): any {
  let activeLinkKey;
  for (const item of menus) {
    if (item?.children && Array.isArray(item?.children) && item.children.length > 0) {
      activeLinkKey = compareLinkAndReturnKey(item.children, currentPath);
    } else if (
      item.link === currentPath ||
      item.link === currentPath.split('/').splice(0, 3).join('/')
    ) {
      activeLinkKey = item.key;
      break;
    } else {
      continue;
    }
  }
  return activeLinkKey;
}

const LayoutHeader: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    actions: { authFail }
  } = authStore((state) => state);
  const onLogout = () => {
    authFail();
  };

  const activeTab = useMemo(() => {
    const activeLinkKey = compareLinkAndReturnKey(menus, location?.pathname);
    if (activeLinkKey) {
      return [activeLinkKey];
    } else {
      return [
        menus?.find((item) => item?.link?.split('/')[1] === location?.pathname?.split('/')[1])
          ?.key ?? '1'
      ];
    }
  }, [location.pathname]);

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

  return (
    <Header style={{ textAlign: 'center' }}>
      <Row gutter={16} align={'middle'} justify={'space-between'}>
        <Col sm={16} md={8} className="d-flex align-items-center justify-content-start">
          <div className="logoWrapper">
            <img src={toAbsoluteUrl('/Images/logo.svg')} />
          </div>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={activeTab}
            onClick={({ item }: any) => navigate(item.props.link)}
            items={menus}
          />
        </Col>
        <Col xs={8} className="d-flex align-items-center justify-content-end">
          <Dropdown
            menu={{ items }}
            trigger={['click']}
            className="layout-header-dropdown"
            overlayClassName="layout-header-dropdown"
          >
            <Link to="" onClick={(e) => e.preventDefault()}>
              <Avatar src={toAbsoluteUrl('/icons/user_thumbnail.svg')} className="profile-avatar" />
            </Link>
          </Dropdown>
        </Col>
      </Row>
    </Header>
  );
};

export default LayoutHeader;
