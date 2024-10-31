import { useMemo, useState } from 'react';

import {
  DashboardOutlined,
  FileOutlined,
  FolderOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MoneyCollectOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

import { ROUTES } from '../../../utils/constants/routes';
import { toAbsoluteUrl } from '../../../utils/functions';

import { StyledLayout } from '../Layout.Styled';

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

const items = [
  createMenuItem(ROUTES.dashboard, 'Dashboard', '1', <DashboardOutlined />),
  createMenuItem(ROUTES.userManagement, 'User Management', '2', <UserOutlined />),
  createMenuItem(ROUTES.reactQueryDemo, 'React query Demo', '3', <UserOutlined />),
  createMenuItem(
    '/subscription-management',
    'Subscription Management',
    '4',
    <MoneyCollectOutlined />
  ),
  createMenuItem(
    ROUTES.termsAndConditions,
    'CMS Management',
    'sub2',
    <FolderOutlined />,
    [
      createMenuItem(ROUTES.termsAndConditions, 'Terms And Conditions', '5', <FileOutlined />),
      createMenuItem(ROUTES.privacyPolicy, 'Privacy Policy', '6', <FileOutlined />)
    ],
    'CMS Management'
  )
];

function compareLinkAndReturnKey(items: any, currentPath: any): any {
  let activeLinkKey;
  for (const item of items) {
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
const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(true);

  const activeTab = useMemo(() => {
    const activeLinkKey = compareLinkAndReturnKey(items, location?.pathname);
    if (activeLinkKey) {
      return [activeLinkKey];
    } else {
      return [
        items?.find((item) => item?.link?.split('/')[1] === location?.pathname?.split('/')[1])
          ?.key ?? '1'
      ];
    }
  }, [location.pathname]);

  return (
    <StyledLayout.Sider
      collapsible
      breakpoint="lg"
      collapsed={collapsed}
      width={'260px'}
      collapsedWidth={60}
      onCollapse={(collapsed) => {
        setCollapsed(collapsed);
      }}
      trigger={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    >
      <div className="logoWrapper">
        {collapsed ? (
          <img className="logoSm" alt="Logo" src={toAbsoluteUrl('/icons/Logo_Small.svg')} />
        ) : (
          <img className="logoLg" alt="Logo" src={toAbsoluteUrl('/icons/Logo.svg')} />
        )}
      </div>
      <Menu
        theme="light"
        className="sidebarMenu"
        defaultSelectedKeys={activeTab}
        mode="inline"
        onClick={({ item }: any) => navigate(item.props.link)}
        items={items}
      />
    </StyledLayout.Sider>
  );
};

export default Sidebar;
