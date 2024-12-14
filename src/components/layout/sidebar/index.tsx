import { useEffect, useState } from 'react';

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Divider, Input, Layout, Space } from 'antd';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';

import AssessedValue from './components/AssessedValue';
import AuctionDate from './components/AuctionDate';
import BathsInput from './components/BathsInput';
import BedsInput from './components/BedsInput';
import EstimatedValue from './components/EstimatedValue';
import Extras from './components/Extras';
import ListingType from './components/ListingType';
import PropertyType from './components/PropertyType';
import PurchasingFees from './components/PurchasingFees';
import Rent from './components/Rent';
import RentingFees from './components/RentingFees';
import Status from './components/Status';

// import { StyledLayout } from '../Layout.Styled';

const { Search } = Input;
const { Sider } = Layout;

// const text = `
//   A dog is a type of domesticated animal.
//   Known for its loyalty and faithfulness,
//   it can be found as a welcome guest in many households across the world.
// `;

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [pageHeight, setPageHeight] = useState<number>(0);

  useEffect(() => {
    setPageHeight(window.innerHeight - 120); // 36 + 36 + 48 + 22 + 49 + 60
  }, []);

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: `Status (5)`,
      children: <Status />
    },
    // {
    //   key: '2',
    //   label: `Saved searches (11)`,
    //   children: <p>{text}</p>
    // },
    {
      key: '3',
      label: 'Property type',
      children: <PropertyType />
    },
    {
      key: '4',
      label: `Listing type`,
      children: <ListingType />
    },
    {
      key: '5',
      label: 'Auction date',
      children: <AuctionDate />
    },
    // {
    //   key: '6',
    //   label: 'Address',
    //   children: <p>{text}</p>
    // },
    // {
    //   key: '7',
    //   label: 'Lot & property size',
    //   children: <p>{text}</p>
    // },
    {
      key: '8',
      label: 'Estimated value',
      children: <EstimatedValue />
    },
    {
      key: '9',
      label: 'Assessed value',
      children: <AssessedValue />
    },
    {
      key: '10',
      label: 'Rent',
      children: <Rent />
    },
    {
      key: '11',
      label: 'P%',
      children: <PurchasingFees />
    },
    {
      key: '12',
      label: 'R%',
      children: <RentingFees />
    },
    // {
    //   key: '13',
    //   label: 'Color',
    //   children: <p>{text}</p>
    // },
    // {
    //   key: '14',
    //   label: 'Folio #',
    //   children: <p>{text}</p>
    // },
    {
      key: '15',
      label: 'Beds',
      children: <BedsInput />
    },
    {
      key: '16',
      label: 'Baths',
      children: <BedsInput />
    },
    {
      key: '17',
      label: 'Owner',
      children: <BathsInput />
    },
    // {
    //   key: '18',
    //   label: 'Maximum bid',
    //   children: <p>{text}</p>
    // },
    // {
    //   key: '19',
    //   label: 'Final judgement',
    //   children: <p>{text}</p>
    // },
    // {
    //   key: '20',
    //   label: 'Primary plaintiff',
    //   children: <p>{text}</p>
    // },
    // {
    //   key: '21',
    //   label: 'Year built',
    //   children: <p>{text}</p>
    // },
    // {
    //   key: '22',
    //   label: 'Case number',
    //   children: <p>{text}</p>
    // },
    // {
    //   key: '23',
    //   label: 'SP% / Sq.Feet',
    //   children: <p>{text}</p>
    // },
    // {
    //   key: '24',
    //   label: 'Homestead',
    //   children: <p>{text}</p>
    // },
    {
      key: '25',
      label: 'Extras',
      children: <Extras />
    }
    // {
    //   key: '26',
    //   label: 'Parking spots',
    //   children: <p>{text}</p>
    // }
  ];

  // const onChange = (key: string | string[]) => {
  //   console.log(key);
  // };

  return (
    <Sider
      collapsible
      collapsedWidth="1px"
      onCollapse={(collapsed) => {
        setCollapsed(collapsed);
      }}
      trigger={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    >
      <div
        className="sider-content"
        style={{ display: collapsed ? 'none' : 'block', height: pageHeight }}
      >
        <div className="pl-16 pr-16">
          <h4 className="sidebar-heading">Filters</h4>
          <Space>
            <Search placeholder="Search filters..." allowClear />
          </Space>
          <h5 className="filter-heading">All (1,356)</h5>
          <p className="filter-info">Followed (123)</p>
        </div>
        <Divider style={{ margin: '16px 0' }} />
        <Collapse items={items} ghost />
      </div>
    </Sider>
  );
};

export default Sidebar;
