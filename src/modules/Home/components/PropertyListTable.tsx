import React from 'react';

import { MoreOutlined } from '@ant-design/icons';
import { Dropdown, Rate, Table, Typography } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import type { MenuProps } from 'antd';

import TableAddress from '../../../components/common/Table/TableAddress';

import { DataType } from '../Buy/types';

const { Text } = Typography;

interface IProps {
  data: DataType[];
}

const PropertyListTable: React.FC<IProps> = (props) => {
  const { data } = props;

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
      )
      // icon: <SmileOutlined />,
      // disabled: true,
      // danger: true,
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item (disabled)
        </a>
      )
    },
    {
      key: '4',
      label: 'a danger item'
    }
  ];

  const columns: TableColumnsType<DataType> = [
    {
      title: 'Address',
      dataIndex: 'address',
      className: 'pending',
      render: () => <TableAddress />
    },
    {
      title: 'Days on market',
      dataIndex: 'daysOnMarket',
      sorter: {
        compare: (a, b) => a.daysOnMarket - b.daysOnMarket,
        multiple: 3
      }
    },
    {
      title: 'Days to auction',
      dataIndex: 'daysToAuction',
      sorter: {
        compare: (a, b) => a.daysToAuction - b.daysToAuction,
        multiple: 2
      }
    },
    {
      title: 'Beds',
      dataIndex: 'beds',
      sorter: {
        compare: (a, b) => a.beds - b.beds,
        multiple: 1
      }
    },
    {
      title: 'Baths',
      dataIndex: 'baths',
      sorter: {
        compare: (a, b) => a.baths - b.baths,
        multiple: 1
      }
    },
    {
      title: 'Sq.ft',
      dataIndex: 'sqFt',
      sorter: {
        compare: (a, b) => a.sqFt - b.sqFt,
        multiple: 1
      }
    },
    {
      title: 'Listing price',
      dataIndex: 'listingPrice',
      sorter: {
        compare: (a, b) => a.listingPrice - b.listingPrice,
        multiple: 1
      }
    },
    {
      title: 'Estimated value',
      dataIndex: 'estimatedValue',
      sorter: {
        compare: (a, b) => a.estimatedValue - b.estimatedValue,
        multiple: 1
      }
    },
    {
      title: 'Estimated rent',
      dataIndex: 'estimatedRent',
      sorter: {
        compare: (a, b) => a.estimatedRent - b.estimatedRent,
        multiple: 1
      }
    },
    {
      title: 'ROI',
      dataIndex: 'roi',
      render: (_) => (
        <Text type={`${_ >= 0 ? 'success' : 'danger'}`} strong>
          {_}
        </Text>
      ),
      sorter: {
        compare: (a, b) => a.roi - b.roi,
        multiple: 1
      }
    },
    {
      title: 'Cap Rate',
      dataIndex: 'capRate',
      render: (_) => (
        <Text type={`${_ >= 0 ? 'success' : 'danger'}`} strong>
          {_}
        </Text>
      ),
      sorter: {
        compare: (a, b) => a.capRate - b.capRate,
        multiple: 1
      }
    },
    {
      title: '',
      dataIndex: 'bookmark',
      render: () => <Rate count={1} style={{ fontSize: 19 }} />
    },
    {
      title: '',
      dataIndex: 'opetions',
      render: () => (
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <MoreOutlined style={{ fontSize: 19 }} />
          </a>
        </Dropdown>
      )
    }
  ];

  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  return <Table<DataType> columns={columns} dataSource={data} onChange={onChange} />;
};

export default PropertyListTable;
