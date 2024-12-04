import React from 'react';

import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import dayjs from 'dayjs';

import { defaultPagination } from '../../../../../utils/constants/utils';

import TableAddress from '../../../../../components/common/Table/TableAddress';

import { CompareDataType } from '../../types';

interface IProps {
  data: CompareDataType[];
}

const ComparePropList: React.FC<IProps> = (props) => {
  const { data } = props;

  const columns: TableColumnsType<CompareDataType> = [
    {
      title: 'Address',
      dataIndex: 'address',
      className: 'status',
      render: (_, record) => <TableAddress thumb={record.thumb} />
    },
    {
      title: 'Sale price',
      dataIndex: 'salePrice',
      sorter: {
        compare: (a, b) => a.salePrice - b.salePrice,
        multiple: 1
      },
      render: (_) => `$${_}`
    },
    {
      title: 'Sale Date',
      dataIndex: 'saleDate',
      sorter: {
        compare: (a, b) => a.saleDate - b.saleDate,
        multiple: 1
      },
      render: (_) => dayjs(_).format('DD/MM/YYYY')
    },
    {
      title: 'Distance',
      dataIndex: 'distance',
      render: (_) => `${_} mi`,
      sorter: {
        compare: (a, b) => a.distance - b.distance,
        multiple: 1
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
      title: 'Lot Size',
      dataIndex: 'lotSize',
      sorter: {
        compare: (a, b) => a.lotSize - b.lotSize,
        multiple: 1
      }
    },
    {
      title: 'Year',
      dataIndex: 'yearBuilt',
      sorter: {
        compare: (a, b) => a.yearBuilt - b.yearBuilt,
        multiple: 1
      },
      render: (_) => dayjs(_).format('YYYY')
    },
    {
      title: 'Source',
      dataIndex: 'source',
      sorter: {
        compare: (a, b) => a.source.localeCompare(b.source),
        multiple: 1
      }
    },
    {
      title: '',
      dataIndex: 'edit',
      render: () => <Button icon={<DeleteOutlined />} />
    },
    {
      title: '',
      dataIndex: 'delete',
      render: () => <Button icon={<EditOutlined />} />
    }
  ];

  const onChange: TableProps<CompareDataType>['onChange'] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <Table<CompareDataType>
      columns={columns}
      dataSource={data}
      pagination={{ ...defaultPagination }}
      onChange={onChange}
    />
  );
};

export default ComparePropList;
