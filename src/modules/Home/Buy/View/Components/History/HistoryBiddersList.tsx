import React from 'react';

import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import { BiddersType } from '../../../types';
import { biddersData } from '../DummyData';

const HistoryBiddersList: React.FC = () => {
  const columns: ColumnsType<BiddersType> = [
    {
      title: 'Bidder #',
      dataIndex: 'bidder',
      key: 'bidder'
    },
    {
      title: 'Last Activity',
      dataIndex: 'lastActivity',
      key: 'lastActivity'
    },
    {
      title: 'Highest Bid',
      dataIndex: 'highestBid',
      key: 'highestBid'
    },
    {
      title: 'Discount Rate',
      dataIndex: 'discountRate',
      key: 'discountRate'
    },
    {
      title: 'Estimated Bid',
      dataIndex: 'estimatedBid',
      key: 'estimatedBid'
    }
  ];

  return (
    <>
      <Table<BiddersType>
        columns={columns}
        dataSource={biddersData}
        pagination={false}
        // scroll={{ y: 45 * 5 }}
        rowKey="key"
      />
      {/* <div style={{ textAlign: 'center', marginTop: 16 }}>
        {loading ? (
          <Spin />
        ) : hasMore ? (
          <Button type="primary" onClick={loadMoreData}>
            Load More
          </Button>
        ) : (
          <p>No more data</p>
        )}
      </div> */}
    </>
  );
};

export default HistoryBiddersList;
